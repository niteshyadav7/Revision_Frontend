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
// const originalArr = [11, 98, 31, 23, 944];

// function App (){
//    return(
//       <>
//       {originalArr.filter((items)=>items%2===0).map((items,key)=><div>{items}</div>)}
//       </>
//    )
// }

/**JSX in OBJECTS */

// function App() {
//   const myVariable = {
//     firstName: "Nitesh",
//     lastName: "Yadav",
//     bornYear:1998,
//     age() {
//       return 2023 - this.bornYear;
//     },
//   };
//   const ans=myVariable.age()
//   console.log(ans);
// //  console.log(myVariable.age());

//   const { firstName, lastName} = myVariable;
//   return (
//     <>
//       {/* <h3>{age}</h3> */}
//       <h3>{firstName}</h3>
//       <h2>{ans}</h2>
//     </>
//   );
// }

// /**TABLE IN JSX 

// const App = () => {
//   return (
//     <table border="1">
//       <caption>This is the Table</caption>
//       {/* <thead> */}
//         <tr>
//           <th>Column1</th>
//           <th>Column2</th>
//           <th>Column3</th>
//         </tr>
//       {/* </thead> */}
//       {/* <tbody> */}
//         <tr>
//           <td rowspan="2">Row 1 Cell1</td>
//           <td>Row 1 Cell2</td>
//           <td>Row 1 Cell3</td>
//         </tr>
//         <tr>
//           {/* <td>Row 1 Cell1</td> */}
//           <td>Row 2 Cell2</td>
//           <td>Row 2 Cell3</td>
//         </tr>
//       {/* </tbody> */}
//       {/* <tfoot> */}
//          <tr>
//             <td colspan='3'>Row 3 Cell1</td>
//          </tr>
//       {/* </tfoot> */}
//     </table>
//   );
// };




ReactDOM.createRoot(document.getElementById("root")).render(<App />);
