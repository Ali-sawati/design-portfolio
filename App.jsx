import Pages from "./Component/Pages";
import About from "./Component/About";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
function App(){
  useEffect(()=>{
    AOS.init()
    AOS.refresh()
  },[])
  return(
    <>
    <Pages/>

  
    {/* <h1>App Component</h1> */}
    </>
  );
}
export default App;