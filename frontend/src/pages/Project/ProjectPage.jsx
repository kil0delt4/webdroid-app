import React from "react";
import "./ProjectPage.css";
import PropTypes from "prop-types";
// import { Button } from "react-bootstrap";

const ProjectPage = ({ embedId }) => {
    return(
        <>
        <br/><h1 style={{textAlign: "center"}}> PROJECT TITLE
                </h1><br/><br/>
        <div className="projectContainer">
            <div className="projectVideo projectItem">
                <iframe width="420" height="315"
                src={`https://www.youtube.com/embed/${embedId}?controls=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="Embedded youtube" allowFullScreen
                />
            </div>
            <div className="projectItem info">
                <br/><br/><br/><br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ratione modi architecto tempore itaque consequuntur aperiam iusto maiores fuga labore sapiente pariatur delectus sit officia, similique odio deserunt provident. Eos.
                Soluta, quis pariatur rem veniam iste amet vel, optio eum modi non magni sunt dicta autem cumque possimus ad libero quasi. Dicta aut corporis nesciunt quaerat ex dignissimos vitae explicabo!</p>
                <Button className="btn" variant="outline-success" href="/login">Download/Purchase</Button>
            </div>
        </div>
        
            
        </>
    );
};

ProjectPage.propTypes = {
    embedId: PropTypes.string.isRequired
  };

export default ProjectPage;