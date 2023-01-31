import React, { useState } from "react";
// import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

const ProjectForm = () => {
    const [project, setProject]=useState({
        name: '',
        category: 'misc',
        description: '',
        free: true,
        price: 0,
        technology: {},
        video_link_free: '',
        video_link_paid: '',
        synopsis: '',
        full_report: '',
        paid_user: []
    });
    const [free, setFree]=useState(true);

    const handleChange=(e) => {
        setProject({
        ...project,
        [e.target.name]: e.target.value
    });
}
    const handleFreeChange = (e) => {
        setFree(!free);
    }

    const handleSubmit=(e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/api/project/projectForm", project)
        .then((res) => {
            console.log(res.data);
            setProject({
                name: '',
                category: 'misc',
                description: '',
                free: true,
                price: 0,
                technology: {},
                video_link_free: '',
                video_link_paid: '',
                synopsis: '',
                full_report: '',
                paid_user: []
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    return (
        <Container>
            <h1 className="text-center mt-5">Create New Project</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                <Form.Label>Project Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter project name" name="name" onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formCategory">
                    <Form.Label>Category</Form.Label>
                <Form.Control as="select" defaultValue="misc" name="category" onChange={handleChange}>
                    <option>Misc</option>
                <option>Web Development</option>
                <option>Mobile Development</option>
                <option>Machine Learning</option>
                </Form.Control>
                </Form.Group>
                <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Enter a brief description of the project" name="description" onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formFree">
                    <Form.Check
                        type="checkbox"
                        label="Is this project free?"
                        onChange={handleFreeChange}
                    />
                </Form.Group>
                <Form.Group controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                <Form.Control
                type="number"
                placeholder="Enter price of the project"
                value={project.price}
                onChange={handleChange}
                name="price"
                />
                </Form.Group>
                <Form.Group controlId="formTechnology">
                    <Form.Label>Technology</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter technology used in the project"
                value={project.technology}
                onChange={handleChange}
                name="technology"
                    />
                </Form.Group>
                <Form.Group controlId="formVideoLinkFree">
                    <Form.Label>Video Link (Free)</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter video link for free users"
                value={project.video_link_free}
                onChange={handleChange}
                name="video_link_free"
                />
                </Form.Group>
                <Form.Group controlId="formVideoLinkPaid">
                    <Form.Label>Video Link (Paid)</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter video link for paid users"
                value={project.video_link_paid}
                onChange={handleChange}
                name="video_link_paid"
                />
                </Form.Group>
                <Form.Group controlId="formSynopsis">
                    <Form.Label>Synopsis</Form.Label>
                    <Form.Control
                        type="file"
                        value={project.synopsis}
                        onChange={handleChange}
                        name="synopsis"
                    />
                </Form.Group>
                <Form.Group controlId="formFullReport">
                    <Form.Label>Full Report</Form.Label>
                <Form.Control
                type="file"
                placeholder="Upload the full report for the project"
                onChange={handleChange}
                name="full_report"
                />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Project
                </Button>
                </Form>
                </Container>
    );
};

export default ProjectForm;