import { BrowserRouter as Router, Routes, Route, createPortal, Link, useParams } from "react-router-dom";


import Alluser from "./component/Places/Alluser/Alluser.js";
import UserPlaces from "./component/Places/UserPlaces/UserPlaces.js"
import Navbar from './component/Navbar/Navbar.js';
import PageNotFound from "./component/utility_folder/PageNotFound.js";
import Addplaces from "./component/Places/Addplaces/Addplaces.js";
import Editplace from "./component/Places/EditPlaces/Editplaces.js"
import Loginpage from "./component/Login/Login.js";

import './App.css';



function App() {




  return (
    <div className="App">
      <Router>

        <Navbar></Navbar>
        <Routes >
          <Route path="/" element={<Alluser />} />
          <Route path="/:us1/place" element={<UserPlaces />} />
          <Route path="/:us1/place/us1/addplace" element={<Addplaces />} />
          <Route path="/:us1/editplace" element={<Editplace/>} ></Route>
          <Route path="/login" element={<Loginpage/>} ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
