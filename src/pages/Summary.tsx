import React, { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import "./Summary.scss";
import {
  PDFDownloadLink,
  Document,
  Page,
  Image,
  Text,
  View,
} from "@react-pdf/renderer";
import { Font } from "@react-pdf/renderer";

import { Link as Lonk } from "react-router-dom";
import { Correctness, DecisionPoint } from "../hooks/useGameData";

const Roboto = require("../fnt/Roboto-Regular.ttf").default as string;

Font.register({
  family: "Roboto",
  format: "truetype",
  src: Roboto,
});

interface iProps {
  decisionPoints: DecisionPoint[];
  gameProgress: { id: number; label: string; option: number }[];
  completed: boolean;
}

const correctnessColors: { [key in Correctness]: string } = {
  correct: "#009933",
  half: "#808080",
  wrong: "cc0000",
};

const correctnessLabels: { [key in Correctness]: string } = {
  correct: "CORRECT",
  half: "NOT-THE-BEST",
  wrong: "INCORRECT",
};

const Summary: React.FC<iProps> = ({
  gameProgress,
  decisionPoints,
  completed,
}) => {
  // const [progress, setProgress] = useState([])

  let progress: {
    question: string;
    answer: string;
    correct: Correctness;
    feedback: string;
  }[] = useMemo(() => {
    let progress = [];
    var i;
    for (i = 0; i < gameProgress.length; i++) {
      const dp = gameProgress[i];
      const current = decisionPoints.find(({ id }) => id === dp.id)!;
      const next = decisionPoints.find(({ id }) => id === dp.option)!;

      progress.push({
        question: current.message,
        answer: dp.label,
        correct: next.correct,
        feedback: next.feedback,
      });
    }
    return progress;
  }, [decisionPoints, gameProgress]);

  let message: (webrender: boolean) => JSX.Element;

  if (completed) {
    message = (webrender) => {
      const tags = webrender
        ? {
            br: () => <br />,
            img: ({
              alt,
              ...props
            }: React.ImgHTMLAttributes<HTMLImageElement> & { alt: string }) => (
              <img alt={alt} {...props} />
            ),
            text: ({
              style,
              children,
            }: React.HTMLAttributes<HTMLSpanElement> &
              React.ComponentProps<typeof Text>) => (
              <span style={style}>{children}</span>
            ),
            view: ({
              style,
              children,
            }: React.HTMLAttributes<HTMLDivElement> &
              React.ComponentProps<typeof View>) => (
              <div style={style}>{children}</div>
            ),
          }
        : {
            br: () => <>{"\n"}</>,
            img: ({ src }: React.ImgHTMLAttributes<HTMLImageElement>) => (
              <Image src={src}></Image>
            ),
            text: ({
              style,
              children,
            }: React.HTMLAttributes<HTMLSpanElement> &
              React.ComponentProps<typeof Text>) => (
              <Text style={style}>{children}</Text>
            ),
            view: ({
              style,
              children,
            }: React.HTMLAttributes<HTMLDivElement> &
              React.ComponentProps<typeof View>) => (
              <View style={style}>{children}</View>
            ),
          };

      return (
        <>
          <tags.text>
            You have completed the game by answering{" "}
            <tags.text style={{ fontWeight: "bold" }}>
              {" "}
              {progress.length} questions
            </tags.text>
            .
          </tags.text>
          {progress.length ===
          decisionPoints.filter(({ correct }) => correct === "correct")
            .length ? (
            <tags.text>
              You've demonstrated the best possible result! Now play it one more
              time to make sure it wasn't mere luck :){"\n\n"}
              <tags.br />
              <tags.br />
              <tags.text>
                If you are not involved in an organized debrief, we recommend
                you complete the attached self-debrief to optimize your learning
                through this virtual gaming simulation.
              </tags.text>
            </tags.text>
          ) : (
            <tags.view>
              <tags.text>
                {" "}
                However, if you give only correct answers it should only take 14
                questions to complete the scenario. Your selections had the
                following results:
              </tags.text>

              <tags.view style={{ padding: "5mm" }}>
                <tags.text>
                  <tags.img
                    src="/images/icon-correct.png"
                    alt="green circular checkmark icon"
                    width="20"
                    height="20"
                  />{" "}
                  Correct:{" "}
                  {
                    progress.filter(({ correct }) => correct === "correct")
                      .length
                  }
                  <tags.br />
                  <tags.img
                    src="/images/icon-partial.png"
                    alt="yellow triangular warning icon"
                    width="20"
                    height="20"
                  />{" "}
                  Not-the-Best:{" "}
                  {progress.filter(({ correct }) => correct === "half").length}
                  <tags.br />
                  <tags.img
                    src="/images/icon-incorrect.png"
                    alt="red circular x icon"
                    width="20"
                    height="20"
                  />{" "}
                  Incorrect:{" "}
                  {progress.filter(({ correct }) => correct === "wrong").length}
                </tags.text>
              </tags.view>

              <tags.text>
                See if you can improve your results next time!{"\n\n"}
                <tags.br />
                <tags.br />
                <tags.text>
                  If you are not involved in an organized debrief, we recommend
                  you complete the attached self-debrief to optimize your
                  learning through this virtual gaming simulation.
                </tags.text>
              </tags.text>
            </tags.view>
          )}
          {/* <Text>
          Document this encounter by clicking on the practice documentation
          icon. There you will find a blank documentation form. Once you are
          done, compare your documentation to the sample provided.{" "}
        </Text>
        <Text>
          If not attending an organized debrief, make sure you download and
          complete the{" "}
          <Link src={`${window.location.origin}/docs/self-assessment.pdf`}>
            self-debriefing questions
          </Link>{" "}
          to optimise your learning experience. Scroll down to view results.
        </Text> */}
        </>
      );
    };
  } else {
    message = () => (
      <Text>
        You have answered{" "}
        <Text style={{ fontWeight: "bold" }}> {progress.length} questions</Text>
        . To finish the game go to menu and resume the gameplay.
      </Text>
    );
  }

  const pdfContent = useMemo(() => {
    let responses = progress.map((dp, i) => (
      <View key={i}>
        <View>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Q: </Text>
            <Text>{dp.question}</Text>
          </Text>
        </View>
        <View>
          <Text>
            <Text style={{ fontWeight: "bold" }}>A: </Text>
            <Text style={{ color: correctnessColors[dp.correct] }}>
              {dp.answer} ({correctnessLabels[dp.correct]})
            </Text>
          </Text>
          <Text>
            {dp.feedback} {"\n\n"}
          </Text>
        </View>
      </View>
    ));
    const html = (
      <Document>
        <Page size="letter" style={{ padding: "1in" }}>
          {/* <style
            dangerouslySetInnerHTML={{
              __html: `html, body { font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 130%; background-color: #ffffff; color: #000;}
							h1, h2, p, ol { font-weight: normal; margin-top: 0.3em; margin-bottom: 0.3em; padding-top: 0; padding-bottom: 0; line-height: 130%; color: #000; }`,
            }}
          /> */}
          <View
            style={{
              fontFamily: "Roboto",
              fontSize: 14,
              lineHeight: "130%",
              backgroundColor: "#ffffff",
              color: "#000",
            }}
          >
            <Text
              style={{
                fontSize: 32,
                paddingBottom: "0.3em",
                borderBottom: "2px solid #000000",
              }}
            >
              Crisis Intervention
            </Text>
            <Text
              style={{
                fontSize: 28,
                paddingBottom: "0.3em",
                borderBottom: "2px solid #000000",
              }}
            >
              Feedback Report
            </Text>
            <Text style={{ fontSize: 24 }}>{"\nSummary"}</Text>
            <View>{message(false)}</View>
            <Text style={{ fontSize: 24 }}>Your Responses</Text>
            <View>{responses}</View>
          </View>
        </Page>
      </Document>
    );
    return html;
  }, [message, progress]);

  return (
    <div className="container">
      <div className="panel info">
        <header>
          <FormattedMessage
            id="Summary.title"
            defaultMessage="Great Work!"
            description="Summary title"
            tagName="h2"
          />
        </header>
        <div className="main summary">
          <div className="content">
            <div>{message(true)}</div>
          </div>
        </div>
        <footer>
          <PDFDownloadLink
            className="button"
            document={pdfContent}
            fileName="crisis-intervention-report.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download Feedback Report"
            }
          </PDFDownloadLink>

          <Lonk to="/debrief/" className="button">
            <FormattedMessage
              id="debrief.link"
              defaultMessage="Self Debrief"
              description="Link to Self Debrief"
            />
          </Lonk>

          {/* <a href="/module/_/ui/game/tpl/materials.html" className="button">
            {" "}
            Practice Documentation{" "}
          </a> */}
        </footer>
      </div>
    </div>
  );
};

export default Summary;
