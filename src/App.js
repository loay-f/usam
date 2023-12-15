import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import News from "./pages/news/News";
import Partners from "./pages/partners/Partners";
import Register from "./pages/register/Register";
import Nav from "./components/navbar/Nav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Nav />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/news"} element={<News />} />
          <Route path={"/partners"} element={<Partners />} />
        </Route>
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
