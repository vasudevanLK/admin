import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/navbar";
import Home from "./pages/Home";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
function App(){

  return(
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} ></Route>
        <Route exact path="/adduser" element={<AddUser/>} />
        <Route exact path="/edituser/:id" element={<EditUser/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )

}
export default App;