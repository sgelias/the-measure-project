import React from 'react';
import { Form, FormGroup, Input, Label, Col, Row } from 'reactstrap';


export default () => {


    return (
        <Row>
            <Col>
                <Form>
                    <FormGroup>
                        <Label for="label">Email</Label>
                        <Input 
                            type="text" 
                            id="label" 
                            name="label" 
                            pattern='[0-9]+'
                            placeholder="Set the structure label." 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="type">Select</Label>
                        <Input 
                            type="select" 
                            name="type" 
                            id="type"
                        >
                            <option value="integer">Integer</option>
                            <option value="float">Float</option>
                            <option value="short-text">Short text</option>
                            <option value="long-text">Long text</option>
                            <option value="ingle-select">Single select</option>
                            <option value="multi-select">Multi select</option>
                        </Input>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    )
};