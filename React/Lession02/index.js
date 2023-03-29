// const App = () => {
//     const Bollean=false.toString();
//   return (
//     <>
//       <div>Hello</div>
//       <div>{Bollean}</div>
//     </>
//   );
// };

// const arr = [1, 2, 3, 4, 5];

// const App = () => {
//   const x = arr.map((items,index) => <span key={index}>{items}</span>);
//   return <>{x}</>;
// };

/* MAPPING OVER ARRAY*/

// function App() {
//   var originalArr = [11, 98, 31, 23, 944];
//   const mapping = (items, index) => {
//     return <h2>{items}</h2>;
//   };
//   const newArr = originalArr.map(mapping);
//   return (
//     <>
//       {/* {originalArr.map((items, index) => (
//         <p>{items}</p>
//       ))} */}

//       {newArr}
//     </>
//   );
// }

/**FILTER METHOD */
const originalArr = [11, 98, 31, 23, 944];

function App (){
   return(
      <>
      {originalArr.filter((items)=>items%2===0).map((items,key)=><div>{items}</div>)}
      </>
   )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
