import react, {Component} from "react";
import "./App.css"
//import Login from "./components/Login";
import Cadastro from "./components/Landing";

class App extends Component {
    render(){
        return(
            <div className="App">
                <Cadastro/>
            </div>
        );
    }
}

export default App