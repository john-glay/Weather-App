import "../styles/components/Hourly.scss";

const hourlyInfo = [
  {
    id: "0",
    num: "1",
  },
  {
    id: "1",
    num: "2",
  },
  {
    id: "2",
    num: "3",
  },
  {
    id: "3",
    num: "4",
  },
  {
    id: "4",
    num: "5",
  },
  {
    id: "5",
    num: "6",
  },
  {
    id: "6",
    num: "7",
  },
];

function Hourly() {
  return (
    <>
      {hourlyInfo.map(({ id, num }) => (
        <div className="Hourly" key={id}>
          <div className="widget">{num}</div>
        </div>
      ))}
    </>
  );
}

export default Hourly;
