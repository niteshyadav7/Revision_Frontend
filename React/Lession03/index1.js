// DEFINED VARIABLE GLOBALLY
let score = 0;
let wicket = 0;
let ballWise = [];
let hit = 0;
let inputRef = React.createRef();

// HANDLE CLICK OF BUTTON
const handleButton = (num) => {
  // score+=num;
  hit = num;
  root.render(<App />);
};

// HANDLE CLICK OF WICKET
const handleWicket = () => {
  // wicket+=1
  hit = "w";
  root.render(<App />);
};

// HANDLE CLICK OF SUBMIT
const handleSubmit = (event) => {
  event.preventDefault();
  if (hit == "w") {
    wicket += 1;
  } else {
    score += hit;
  }
  ballWise.unshift(
    <span>
      {`${hit==0?"DOT":hit},${inputRef.current.value}`}
    </span>
  );
  root.render(<App />);
};
const Button = () => {
  return (
    <>
      <button onClick={() => handleButton(0)}>0</button>
      <button onClick={() => handleButton(1)}>1</button>
      <button onClick={() => handleButton(2)}>2</button>
      <button onClick={() => handleButton(3)}>3</button>
      <button onClick={() => handleButton(4)}>4</button>
      <button onClick={() => handleButton(6)}>6</button>
      <button onClick={handleWicket}>wicket</button>
    </>
  );
};

const Form = () => {
  return (
    <form onSubmit={handleSubmit}>
      <input value={hit} />
      <input ref={inputRef} />
      <button>Submit</button>
    </form>
  );
};

function App() {
  return (
    <>
      <h1>SCORE KEEPER</h1>
      <div>
        Score: {score}/{wicket}
      </div>
      <br />
      <br />
      <Button />
      <br />
      <br />
      <Form />
      {ballWise.map((res, i) => (
        <>
          <p>{res}</p>
        </>
      ))}
    </>
  );
}

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
root.render(<App />);
