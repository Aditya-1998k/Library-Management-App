import {BrowserRouter, Route, Routes} from "react-router-dom";
import Mybook from "./component/Mybook";
import Signup from "./component/Signup";
import Login from "./component/Login";
import HomePage from "./component/HomePage";
import Logout from "./component/Logout";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
                <Route path="/home" element={<HomePage/>}></Route>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/mybook" element={<Mybook/>}></Route>
                <Route path="/logout" element={<Logout/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
