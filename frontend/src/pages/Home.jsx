import React from "react";
import "./Home.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import SignupPage from "./Signup/SignupPage";
import { AuthContextProvider } from "../Context/AuthContext";
import NavBar from "../components/NavBar";
import ProjectForm from "./projectForm";
import Softwares from "./Softwares";
import Hardwares from "./Hardwares";
import ProjectPage from "./Project/ProjectPage";
import soft from "../images/software.jpg";
// import { Button, Card } from "react-bootstrap";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Freeprojects from "./Freeprojects";
import Python from "../pages/Python";
import Webbased from "../pages/Webbased";

const Home = () => {
  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/softwares" element={<Softwares />} />
            <Route path="/hardwares" element={<Hardwares />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/createProject" element={<ProjectForm />} />
            <Route path="/freeProjects" element={<Freeprojects />} />
            <Route path="/python" element={<Python />} />
            <Route path="/web" element={<Webbased />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
      {/* <ProjectPage embedId="" /> */}
      <Footer />
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="hero">
      <h1 className="heroText">
        <strong>Welcome to the Education Website</strong>
      </h1>
      <img className="heroImg" src={soft} alt="Sample_software_photo" />
      <div className="row flex">
        <Card
          title="Some Software Project"
          image="https://picsum.photos/200/300?random=1"
          catagory="Python"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia, quod, voluptas, voluptate quae."
          price="299"
          link="/softwares"
        />
        <Card
          title="Another Software Project"
          image="https://picsum.photos/200/300?random=2"
          catagory="Java"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia, quod, voluptas, voluptate quae."
          price="499"
          link="#"
        />
        <Card
          title="Yet Another Software Project"
          image="https://picsum.photos/200/300?random=3"
          catagory="IOT, Arduino"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia, quod, voluptas, voluptate quae."
          price="699"
          link="#"
        />
      </div>
    </div>
  );
};

export default Home;
