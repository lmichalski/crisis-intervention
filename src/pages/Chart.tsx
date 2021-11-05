import "./Chart.scss";

interface iProps {
  image: string;
}

const Chart: React.FC<iProps> = ({ image }) => {
  return (
    <div className="Chart container">
      <div className="Chart__panel panel info">
        <header>
          <h2>Client Chart</h2>
        </header>
        <img
          className="chart"
          src="/images/chart_image.png"
          alt="Client's Chart with some background information for this visit"
        />
      </div>
    </div>
  );
};

export default Chart;
