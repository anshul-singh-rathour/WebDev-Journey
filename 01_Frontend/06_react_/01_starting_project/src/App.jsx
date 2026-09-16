import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Exanples.jsx";
// import Fragment to use as container like div and avoiding extra div 
// import { Fragment } from "react";
function App() {
 
  return (
    // <Fragment>
    <>
      <Header></Header>
      <main>
       <CoreConcepts></CoreConcepts>
       <Examples></Examples>
      </main>
    {/* </Fragment> */}
    </>
  );
}

export default App;
