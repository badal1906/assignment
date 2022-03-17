import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddDetails from "./components/AddDetails";
import EditDetails from "./components/EditDetails";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { selectUser } from "./redux/reducer/userReducer";
import {useSelector} from "react-redux"
import Logout from "./components/Logout";
function App() {
  const user = useSelector(state=>state.user)
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      
      <Switch>
      <Route exact path="/Login" >
        <Login/>
      </Route>
      <Route exact path="/" >
        <Home/>
        <Logout/>
      </Route>
      <Route path="/add" >
        <AddDetails/>
        <Logout/>
      </Route>
      <Route path="/edit/:id">
        <EditDetails/>
        <Logout/>
      </Route>
      </Switch>
     
      
    </div>
  );
}

export default App;
