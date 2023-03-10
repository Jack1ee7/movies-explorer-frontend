import "./App.css";
import Main from "../Main/Main.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import Movies from "../Movies/Movies.jsx";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/2" element={<Movies />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
