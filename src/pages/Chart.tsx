// import { useCallback, useState } from "react";
// import Modal from "react-modal";
import { useCallback } from "react";
import { useHistory } from "react-router";
import ChartContent from "../components/ChartContent";
import Polaroid from "../components/Polaroid";

import "./Chart.scss";

interface iProps {
  image: string;
}

// const customStyles = {
//   overlay: { zIndex: 1000 },
// };

const Chart: React.FC<iProps> = ({ image }) => {
  // const [modalIsOpen, setIsOpen] = useState(false);

  // const closeModal = useCallback(() => {
  //   setIsOpen(false);
  // }, []);

  // const openModal = useCallback(() => {
  //   setIsOpen(true);
  // }, []);

  const history = useHistory();

  const handleClickNext = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement>) => {
      evt.currentTarget.blur();

      history.push(`/intro/`);
    },
    [history]
  );

  return (
    <>
      {/* <Modal
        className="ChartModal"
        isOpen={modalIsOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Patient Chart"
      >
        <img
          className="chart"
          onClick={closeModal}
          src="/images/chart_image.png"
          alt="Client's Chart with some background information for this visit"
        />
        <button onClick={closeModal}>CLOSE</button>
      </Modal> */}
      <div className="Chart container">
        <div className="Chart__panel panel info">
          <header>
            <h2>Client Chart</h2>
          </header>
          <div className="Chart-folder">
            <div className="Chart-folder-left">
              <Polaroid></Polaroid>
            </div>
            <div className="Chart-folder-right">
              <ChartContent></ChartContent>
            </div>
          </div>
        </div>
        <button className="next-button" onClick={handleClickNext}>Next</button>
      </div>
    </>
  );
};

export default Chart;

// function logGameEvent(arg0: string, arg1: string, arg2: string, arg3: any, arg4: string) {
//   throw new Error("Function not implemented.");
// }

