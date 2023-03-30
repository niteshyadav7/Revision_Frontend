let score = 0;
let wicket = 0;
let ballWise = [];
const handleClick = (num) => {
  if (wicket < 10) {
    ballWise.push(num);
    score += num;
    root.render(<App />);
    console.log(ballWise);
  }
};

const handleWicket = () => {
  if (wicket < 10) {
    ballWise.push("w");
    wicket += 1;
    root.render(<App />);
    console.log(ballWise);
  }
};

const Button = () => {
  return (
    <>
      {" "}
      <button onClick={() => handleClick(0)}>0</button>
      <button onClick={() => handleClick(1)}>1</button>
      <button onClick={() => handleClick(2)}>2</button>
      <button onClick={() => handleClick(3)}>3</button>
      <button onClick={() => handleClick(4)}>4</button>
      <button onClick={() => handleClick(5)}>5</button>
      <button onClick={() => handleClick(6)}>6</button>
      <button onClick={handleWicket}>wicket</button>
    </>
  );
};

const Result = () => (
  <div>
    {ballWise.map((n, k) => (
      <>
        {k % 6 == 0 ? <br /> : null}
        <span>{n == 0 ? <strong>.</strong> : n}</span>&nbsp;&nbsp;&nbsp;
      </>
    ))}
  </div>
);

function App() {
  return (
    <>
      <h1>SCORE KEPPER</h1>
      <h3>
        Score: {score}/{wicket}
      </h3>
      <Button />
      <Result />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
