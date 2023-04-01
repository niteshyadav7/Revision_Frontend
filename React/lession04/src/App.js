// FUNCTIONAL COMPONENTS

// const App = () => {
//     return (
//       <>
//         <h1>functional components</h1>
//       </>
//     );
//   };
//   export default App;

// CLASS COMPONENTS
// import React from "react"
// class App extends React.Component{
//     render(){
//         return(
//             <>
//             <h1>Class Components</h1>
//             </>
//         )
//     }
// }
// export {App}

// Movies Card!

import MovieCard from "./MovieCard"
function App(){
    return(
        <>
        <h1>Movie List</h1>
        <MovieCard />
        </>
    )
}
export {App}