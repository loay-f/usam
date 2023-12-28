import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import News from "./pages/news/News";
import Partners from "./pages/partners/Partners";
import Register from "./pages/register/Register";
import Nav from "./components/navbar/Nav";
import Articles from "./pages/articles/Articles";
import DashboardNav from "./components/dashboardNav/DashboardNav";
import Programs from "./pages/programs/Programs";
import Courses from "./pages/courses/Courses";
import Article_1 from "./pages/article_1/Article_1";
import Inbox from "./pages/inbox/Inbox";
import Chats from "./pages/Chats/Chats";
import Calender from "./pages/Calender/Calender";
import Analytics from "./pages/analytics/Analytics";
import React from "react";
import Settings from "./pages/settings/Settings";

function App() {
    return (<BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Nav/>}>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/news"} element={<News/>}/>
                <Route path={"/partners"} element={<Partners/>}/>
            </Route>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/register"} element={<Register/>}/>
            <Route path={"/"} element={<DashboardNav/>}>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path={"/articles"} element={<Articles/>}/>
                <Route path={"/articles/:num"} element={<Article_1/>}/>
                <Route path={"/programs"} element={<Programs/>}/>
                <Route path={"/courses"} element={<Courses/>}/>
                <Route path={"/inbox"} element={<Inbox/>}/>
                <Route path={"/chats"} element={<Chats/>}/>
                <Route path={"/calender"} element={<Calender/>}/>
                <Route path={"/analytics"} element={<Analytics/>}/>
                <Route path={"/settings"} element={<Settings/>}/>
            </Route>
        </Routes>
    </BrowserRouter>);
}

export default App;
