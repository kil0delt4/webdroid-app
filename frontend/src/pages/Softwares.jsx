import React from "react";
import soft from "../images/software.jpg";
import Card from "../components/Card";

function Softwares() {
  return (
    <div>
      <img
        src={soft}
        alt="Sample_software_photo"
        href="/login"
        style={{
          width: "100%",
          height: "auto",
          marginTop: "0px",
        }}
      />
      <div className="row flex">
        <Card
          title="Some Python Projects"
          image="https://picsum.photos/200/300?random=1"
          catagory="Python"
          description="Want to explore some python projects.... Here we have...."
          link="/python"
        />
        <Card
          title="Some Web-Based Projects"
          image="https://picsum.photos/200/300?random=2"
          catagory="Web-Based"
          description="Want to explore some web-based projects.... Here we have...." 
          link="/webbased"
        />
        <Card
          title="Some Android Projects"
          image="https://picsum.photos/200/300?random=3"
          catagory="Android"
          description="Want to explore some android projects.... Here we have...."
          link="/android"
        />
      </div>
      <div className="row flex">
        <Card
          title="Some Blockchain Projects"
          image="https://picsum.photos/200/300?random=4"
          catagory="Blockchain"
          description="Want to explore some blockchain projects.... Here we have...."
          //   price="299"
          link="/blockchain"
        />
        <Card
          title="Some Cloud Projects"
          image="https://picsum.photos/200/300?random=5"
          catagory="Cloud"
          description="Want to explore some cloud projects.... Here we have...." 
          link="/cloud"
        />
        <Card
          title="Some Matlab Projects"
          image="https://picsum.photos/200/300?random=6"
          catagory="Matlab"
          description="Want to explore some matlab projects.... Here we have...." 
          link="/matlab"
        />
      </div>
    </div>
  );
}

// const hed = {
//     display: "block",
//     textAlign: "center",

//   };

export default Softwares;
