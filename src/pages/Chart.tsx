import { useCallback, useState } from "react";
import Modal from "react-modal";
import ChartContent from "../components/ChartContent";
import Polaroid from "../components/Polaroid";

import "./Chart.scss";

interface iProps {
  image: string;
}

const customStyles = {
  overlay: { zIndex: 1000 },
};

const Chart: React.FC<iProps> = ({ image }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <Modal
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
      </Modal>
      <div className="Chart container">
        <div className="Chart__panel panel info">
          <header>
            <h2>Client Chart</h2>
          </header>
          <img
            className="chart"
            onClick={openModal}
            src="/images/chart_image.png"
            alt="Client's Chart with some background information for this visit"
          />
          <Polaroid></Polaroid>
          <ChartContent></ChartContent>
        </div>
      </div>
    </>
  );
};

export default Chart;
