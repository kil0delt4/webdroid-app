import React from "react";
import hard from "../images/hardware.jpg";
import Card from "../components/Card";

function Hardwares() {
  return (
    <div>
      <div>
        <img
          src={hard}
          alt="Sample_hardware_photo"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            marginTop: "0px",
          }}
        />
      </div>
      <div className="row flex">
        <Card
          title="Some IOT/Robotics Projects"
          image="https://picsum.photos/200/300?random=1"
          catagory="IOT/Robotics"
          description="Want to explore some IoT projects.... Here we have...."
          link="/iot"
        />
        <Card
          title="Some Drone Projects"
          image="https://picsum.photos/200/300?random=2"
          catagory="Drone"
          description="Want to explore some web-based projects.... Here we have...."
          link="/drone"
        />
      </div>
    </div>
  );
}

// const hed = {
//     display: "block",
//     textAlign: "center",

//   };

export default Hardwares;
