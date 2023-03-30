// let score = 0;
// let wicket = 0;
// let ballWise = [];
// let hit = "";
// const handleClick = (num) => {
//   hit = num;
//   root.render(<App />);
// };

// const handleWicket = () => {
//   hit = "w";
//   root.render(<App />);
// };

// const Button = () => {
//   return (
//     <>
//       <button onClick={() => handleClick(0)}>0</button>
//       <button onClick={() => handleClick(1)}>1</button>
//       <button onClick={() => handleClick(2)}>2</button>
//       <button onClick={() => handleClick(3)}>3</button>
//       <button onClick={() => handleClick(4)}>4</button>
//       <button onClick={() => handleClick(5)}>5</button>
//       <button onClick={() => handleClick(6)}>6</button>
//       <button onClick={handleWicket}>wicket</button>
//     </>
//   );
// };

// // const Result = () => (
// //   <div>
// //     {ballWise.map((n, k) => (
// //       <>
// //         {k % 6 == 0 ? <br /> : null}
// //         <span>{n == 0 ? <strong>.</strong> : n}</span>&nbsp;&nbsp;&nbsp;
// //       </>
// //     ))}
// //   </div>
// // );

// const handleSubmit = (event) => {
//   event.preventDefault();
//   ballWise.unshift(hit);
//   root.render(<App />);
// };

// const Form = () => {
//   return (
//     <form onSubmit={handleSubmit}>
//       <input value={hit} />
//       <input />
//       <button>Submit</button>
//     </form>
//   );
// };
// function App() {
//   return (
//     <>
//       <h1>SCORE KEPPER</h1>
//       <h3>
//         Score: {score}/{wicket}
//       </h3>
//       <Button />
//       {/* <Result /> */}
//       <br />
//       <Form />
//       <hr />
//       {ballWise.map((res, key) => {
//         return (
//           <>
//             <p key={key}>{res}</p>
//           </>
//         );
//       })}
//     </>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// let score = 0;
// let wicket = 0;
// let ballWise = [];
// let hit = "";
// let inputRef = React.createRef();

// const handleClick = (num) => {
//   //   score += num;
//   hit = num;
//   root.render(<App />);
// };
// const handleWicket = () => {
//   //   wicket += 1;
//   hit = "w";
//   root.render(<App />);
// };

// const handleSubmit = (event) => {
//   event.preventDefault();
//   ballWise.unshift(
//     <span>{hit}{","},{inputRef.current.value}</span>
//   );
  
//   root.render(<App />);
// };

// const Button = () => {
//   return (
//     <>
//       <button onClick={() => handleClick(0)}>0</button>
//       <button onClick={() => handleClick(1)}>1</button>
//       <button onClick={() => handleClick(2)}>2</button>
//       <button onClick={() => handleClick(3)}>3</button>
//       <button onClick={() => handleClick(4)}>4</button>
//       <button onClick={() => handleClick(6)}>6</button>
//       <button onClick={handleWicket}>wicket</button>
//     </>
//   );
// };

// const Form = () => {
//   return (
//     <form onSubmit={handleSubmit}>
//       <input value={hit} />
//       <input ref={inputRef} placeholder="comment" />
//       <button>Submit</button>
//     </form>
//   );
// };

// function App() {
//   return (
//     <>
//       <h1>SCORE KEEPER</h1>
//       <h3>
//         Score: {score}/{wicket}
//       </h3>
//       <Button />
//       <hr />
//       <Form />
//       <hr />
//       {ballWise.map((res) => {
//         return <p>{res}</p>;
//       })}
//     </>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
