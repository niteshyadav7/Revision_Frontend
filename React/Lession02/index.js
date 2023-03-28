// const App = () => {
//     const Bollean=false.toString();
//   return (
//     <>
//       <div>Hello</div>
//       <div>{Bollean}</div>
//     </>
//   );
// };

const arr = [1, 2, 3, 4, 5];

const App = () => {
  const x = arr.map((newArr) => <span>{newArr}</span>);
  return <>{x}</>;
};
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
