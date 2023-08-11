import logo from "./logo.svg";
import "./App.css";
import StaticComponent from "./Component/StaticComponent";
import DynamicComponent from "./Component/DynamicComponent";

function App() {
  return (
    <div style={{display : 'flex' , flexDirection : 'row' , justifyContent : 'space-evenly'}}>
      <StaticComponent />
      <DynamicComponent/>
    </div>
  );
}

export default App;
