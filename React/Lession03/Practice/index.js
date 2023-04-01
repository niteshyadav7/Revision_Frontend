// let show = false;

// const handleClick = () => {
//   show = !show;
//   root.render(<App />);
// };

// function App() {
//   return (
//     <>
//       <h1>Coding Ninjas</h1>
//       <button onClick={handleClick}>
//         {show ? "Hide button" : "show button"}
//       </button>
//       {show && <p>Hello</p>}
//     </>
//   );
// }

// DYNAMIC FORM SUBMIT:

let fname;
let email;
let about;

const handleName = (e) => {
  fname = e.target.value;
  root.render(<App />)
};
const handleEmail = (e) => {
  email = e.target.value;
  root.render(<App />)
};
const handleAbout = (e) => {
  about = e.target.value;
  root.render(<App />)
};

const Card = () => {
  return (
    <>
      <h3>Name:{fname}</h3>
      <p>Email:{email}</p>
      <p>About:{about}</p>
    </>
  );
};

function App() {
  return (
    <>
      <Card />
      <input placeholder="Name" onChange={handleName} />
      <input type="email" placeholder="email" onChange={handleEmail} />
      <textarea placeholder="about" onChange={handleAbout}></textarea>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
