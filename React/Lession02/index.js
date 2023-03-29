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

// Condtional Rendering

// function App() {
//   const logged = false;
//   const email = "xyz@gmail.com";
//   const pass = "Masai@123";
//   return (
//     <>
//       {/* {logged?'Hello World!':'Not Found!'} */}
//       {(email === "xyz@gmail.com" && pass === "Masai@123" )&& "login"}
//     </>
//   );
// }

// // PROBLEM01:
// function App() {
//   const age = 18;
//   const like = "JavaScript";
//   const isMarried = false;
//   return (
//     <>
//       <h1>Demo's basic info:</h1>
//       <p>My age is {age}</p>
//       <p>I like {like} a lot!</p>
//       <p>Am i married?: {isMarried + ""}</p>
//     </>
//   );
// }

// PROBLEM02:

// function App() {
//   const fn = 12;
//   const cl = (f) => ((f - 32) * 5) / 9;
//   return (
//     <>
//       <h1>Temperature Converter</h1>
//       <p>Temperature in fahrenheit: {fn}</p>
//       <p>Temperature in celsius: {cl(fn)}</p>

//     </>
//   );
// }

// PROBLEM03:

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function App() {
//   return (
//     <>
//       {numbers
//         .filter((items) => items % 2 === 0)
//         .map((items, index) => (
//           <h2 key="index">{items}</h2>
//         ))}
//     </>
//   );
// }

// Problem04:

// function App() {
//   const itemsSold = [
//     { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
//     { id: 2, name: "iPad Pro", price: 800, qty: 18 },
//     { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
//     { id: 4, name: "Samsung S23", price: 1100, qty: 16 },
//     { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 },
//   ];
//   const sum=itemsSold.reduce((acc,curr)=>{
//     return acc+curr.price
//   },0)
//   // console.log(sum);
//   return (
//     <>
//       <h1>Record of sold items</h1>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Selling Price</th>
//             <th>Quantity</th>
//           </tr>
//         </thead>
//        <tbody>
//         {itemsSold.map((items,key)=>(
//           <>
//           <tr>
//             <td>{items.id}</td>
//             <td>{items.name}</td>
//             <td>{items.price}</td>
//             <td>{items.qty}</td>
//           </tr>
//           </>
//         ))}
//        </tbody>
//        <tfoot>
//        <tr>
//         <td>Total Revenue</td>
//         <td colspan="3">{sum}</td>
//        </tr>
//        </tfoot>
//       </table>
//     </>
//   );
// }

// function Table() {
//   const itemsSold = [
//     { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
//     { id: 2, name: "iPad Pro", price: 800, qty: 18 },
//     { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
//     { id: 4, name: "Samsung S23", price: 1100, qty: 16 },
//     { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 },
//   ];
//   // const mapping = itemsSold.map((items, key) => {
//   //   return items;
//   // });
//   // console.log(mapping);
//   return (
//     <>
//       <h1>Record of sold items</h1>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Selling Price</th>
//             <th>Quantity</th>
//           </tr>
//         </thead>
//         <tbody>
//           {itemsSold.map((items, key) => (
//             <tr key={key}>
//               <td>{items.id}</td>
//               <td>{items.name}</td>
//               <td>{items.price}</td>
//               <td>{items.qty}</td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <tr>
//             <td>Total Revenue</td>
//             <td>${itemsSold.reduce((acc, curr) => acc + curr.price, 0)}</td>
//           </tr>
//         </tfoot>
//       </table>
//     </>
//   );
// }

// function Not() {
//   return <h1>Page not Found!</h1>;
// }

// function App() {
//   const show = true;
//   return <h1>{<Table /> && <Not />}</h1>;
// }

/*
function App() {
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const timeTable = {
    Monday: {
      9: {
        subject: "Maths",
        teacher: "Brijesh Mishra",
        time: "1 hour",
      },
      10: {
        subject: "Physics",
        teacher: "Sumit Yadav",
        time: "1 hour",
      },
      11: {
        subject: "Chemistry",
        teacher: "Vedanti Joshi",
        time: "1 hour",
      },
      13: {
        subject: "English Litrature",
        teacher: "Mayur Pandey",
        time: "1 hour",
      },
      14: {
        subject: "Hindi Vyakaran",
        teacher: "Sony Desai",
        time: "1 hour",
      },
      15: {
        subject: "PT",
        teacher: "Sonu Tyagi",
        time: "1 hour",
      },
    },
    Tuesday: {
      9: {
        subject: "Physics",
        teacher: "Sumit Yadav",
        time: "1 hour",
      },
      10: {
        subject: "Hindi Sahitya",
        teacher: "Ramesh Jha",
        time: "1 hour",
      },
      11: {
        subject: "Environtal Studies",
        teacher: "Rakesh Prakash",
        time: "1 hour",
      },
      13: {
        subject: "Biology",
        teacher: "Kuldeep Narayan",
        time: "1 hour",
      },
      14: {
        subject: "Maths",
        teacher: "Brijesh Mishra",
        time: "1 hour",
      },
      15: {
        subject: "Physics Practical",
        teacher: "Sumit Yadav",
        time: "1 hour",
      },
    },
    Wednesday: {
      9: {
        subject: "Chemistry",
        teacher: "Vedanti Joshi",
        time: "1 hour",
      },
      10: {
        subject: "English Grammar",
        teacher: "Aditi Upasane",
        time: "1 hour",
      },
      11: {
        subject: "Maths",
        teacher: "Brijesh Mishra",
        time: "1 hour",
      },
      13: {
        subject: "English Litrature",
        teacher: "Mayur Pandey",
        time: "1 hour",
      },
      14: {
        subject: "Physics",
        teacher: "Sumit Yadav",
        time: "1 hour",
      },
      15: {
        subject: "Chemistry Practical",
        teacher: "Vedanti Joshi",
        time: "1 hour",
      },
    },
    Thursday: {
      9: {
        subject: "Biology",
        teacher: "Kuldeep Narayan",
        time: "1 hour",
      },
      10: {
        subject: "Hindi Sahitya",
        teacher: "Ramesh Jha",
        time: "1 hour",
      },
      11: {
        subject: "Chemistry",
        teacher: "Vedanti Joshi",
        time: "1 hour",
      },
      13: {
        subject: "Maths",
        teacher: "Brijesh Mishra",
        time: "1 hour",
      },
      14: {
        subject: "Physics",
        teacher: "Sumit Yadav",
        time: "1 hour",
      },
      15: {
        subject: "Biology Practical",
        teacher: "Kuldeep Narayan",
        time: "1 hour",
      },
    },
    Friday: {
      9: {
        subject: "English Litrature",
        teacher: "Mayur Pandey",
        time: "1 hour",
      },
      10: {
        subject: "Hindi Sahitya",
        teacher: "Ramesh Jha",
        time: "1 hour",
      },
      11: {
        subject: "English Grammar",
        teacher: "Aditi Upasane",
        time: "1 hour",
      },
      13: {
        subject: "Biology",
        teacher: "Kuldeep Narayan",
        time: "1 hour",
      },
      14: {
        subject: "Hindi Vyakaran",
        teacher: "Sony Desai",
        time: "1 hour",
      },
      15: {
        subject: "PT",
        teacher: "Sonu Tyagi",
        time: "1 hour",
      },
    },
  };
  return (
    <table border="1">
      <caption>School time-table of a class 12th Student.</caption>
      <thead>
        <tr>
          <th></th>
          <th>9am-10am</th>
          <th>10am-11am</th>
          <th>11am-12noon</th>
          <th>12noon-1pm</th>
          <th>1pm-2pm</th>
          <th>2pm-3pm</th>
          <th>3pm-4pm</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(timeTable).map((day, index) => (
          <tr key="index">
            <td>{day}</td>
            {Object.keys(timeTable[day]).map((hrs, index) => (
              <>
                {index === 3 ? (
                  <>
                    <td key={index}>Break</td>
                    <td key={index}>{timeTable[day][hrs].subject}</td>
                  </>
                ) : (
                  <td>{timeTable[day][hrs].subject}</td>
                )}
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
*/

// const timeTable = {
//   Monday: {
//     9: {
//       subject: "Maths",
//       teacher: "Brijesh Mishra",
//       time: "1 hour",
//     },
//     10: {
//       subject: "Physics",
//       teacher: "Sumit Yadav",
//       time: "1 hour",
//     },
//     11: {
//       subject: "Chemistry",
//       teacher: "Vedanti Joshi",
//       time: "1 hour",
//     },
//     13: {
//       subject: "English Litrature",
//       teacher: "Mayur Pandey",
//       time: "1 hour",
//     },
//     14: {
//       subject: "Hindi Vyakaran",
//       teacher: "Sony Desai",
//       time: "1 hour",
//     },
//     15: {
//       subject: "PT",
//       teacher: "Sonu Tyagi",
//       time: "1 hour",
//     },
//   },
//   Tuesday: {
//     9: {
//       subject: "Physics",
//       teacher: "Sumit Yadav",
//       time: "1 hour",
//     },
//     10: {
//       subject: "Hindi Sahitya",
//       teacher: "Ramesh Jha",
//       time: "1 hour",
//     },
//     11: {
//       subject: "Environtal Studies",
//       teacher: "Rakesh Prakash",
//       time: "1 hour",
//     },
//     13: {
//       subject: "Biology",
//       teacher: "Kuldeep Narayan",
//       time: "1 hour",
//     },
//     14: {
//       subject: "Maths",
//       teacher: "Brijesh Mishra",
//       time: "1 hour",
//     },
//     15: {
//       subject: "Physics Practical",
//       teacher: "Sumit Yadav",
//       time: "1 hour",
//     },
//   },
//   Wednesday: {
//     9: {
//       subject: "Chemistry",
//       teacher: "Vedanti Joshi",
//       time: "1 hour",
//     },
//     10: {
//       subject: "English Grammar",
//       teacher: "Aditi Upasane",
//       time: "1 hour",
//     },
//     11: {
//       subject: "Maths",
//       teacher: "Brijesh Mishra",
//       time: "1 hour",
//     },
//     13: {
//       subject: "English Litrature",
//       teacher: "Mayur Pandey",
//       time: "1 hour",
//     },
//     14: {
//       subject: "Physics",
//       teacher: "Sumit Yadav",
//       time: "1 hour",
//     },
//     15: {
//       subject: "Chemistry Practical",
//       teacher: "Vedanti Joshi",
//       time: "1 hour",
//     },
//   },
//   Thursday: {
//     9: {
//       subject: "Biology",
//       teacher: "Kuldeep Narayan",
//       time: "1 hour",
//     },
//     10: {
//       subject: "Hindi Sahitya",
//       teacher: "Ramesh Jha",
//       time: "1 hour",
//     },
//     11: {
//       subject: "Chemistry",
//       teacher: "Vedanti Joshi",
//       time: "1 hour",
//     },
//     13: {
//       subject: "Maths",
//       teacher: "Brijesh Mishra",
//       time: "1 hour",
//     },
//     14: {
//       subject: "Physics",
//       teacher: "Sumit Yadav",
//       time: "1 hour",
//     },
//     15: {
//       subject: "Biology Practical",
//       teacher: "Kuldeep Narayan",
//       time: "1 hour",
//     },
//   },
//   Friday: {
//     9: {
//       subject: "English Litrature",
//       teacher: "Mayur Pandey",
//       time: "1 hour",
//     },
//     10: {
//       subject: "Hindi Sahitya",
//       teacher: "Ramesh Jha",
//       time: "1 hour",
//     },
//     11: {
//       subject: "English Grammar",
//       teacher: "Aditi Upasane",
//       time: "1 hour",
//     },
//     13: {
//       subject: "Biology",
//       teacher: "Kuldeep Narayan",
//       time: "1 hour",
//     },
//     14: {
//       subject: "Hindi Vyakaran",
//       teacher: "Sony Desai",
//       time: "1 hour",
//     },
//     15: {
//       subject: "PT",
//       teacher: "Sonu Tyagi",
//       time: "1 hour",
//     },
//   },
// };

// const newObj = Object.keys(timeTable).map((day) =>
//   Object.keys(timeTable[day]).map((hrs) => hrs)
// );
// console.log(newObj);
// // ReactDOM.createRoot(document.getElementById("root")).render(<App />);
