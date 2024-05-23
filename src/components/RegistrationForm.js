// RegistrationForm.js
import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './RegistrationForm.css'; // Make sure to create this CSS file

const RegistrationForm = () => {
    const [formData, setFormData] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const formDataObject = {};
        const formDataEntries = new FormData(event.target).entries();
        for (let entry of formDataEntries) {
            formDataObject[entry[0]] = entry[1];
        }
        setFormData(formDataObject);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit} className="registration-form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Form.Group controlId="formBio">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Form.Group controlId="formGender">
                    <Form.Label>Gender</Form.Label>
                    <Col>
                        <Form.Check type="radio" label="Male" name="formGender" id="formGenderMale" />
                        <Form.Check type="radio" label="Female" name="formGender" id="formGenderFemale" />
                    </Col>
                </Form.Group>

                <Form.Group controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <div className="json-data">
                <h2>Form Data (JSON)</h2>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
        </div>
    );
};

export default RegistrationForm;
