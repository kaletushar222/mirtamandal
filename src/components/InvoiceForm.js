import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


class ComponentInvoiceForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            invoiceDate : new Date(),
            billNumber : "",
            contributerName : "",
            amount : 0,
            isPending : false,
            remarks : "",
            contributorType:"LOCAL",
            validated : false,
            show : false
        }
    }

    componentDidMount() {
        
    }

    handleDateChange = (value) =>{
        this.setState({
            invoiceDate : value
        })
    }

    handlePendingCheckBox = (event) =>{
        console.log(event.target.checked)
        this.setState({
            isPending : event.target.checked
        })
    }
    handleStateUpdate = (event) =>{
        const updatedState = {}
        updatedState[event.target.name] = event.target.value
        this.setState(updatedState)
    }

    setShow = (value) => {
        this.setState({show: value});
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            console.log("error")
        }
        else{
            console.log("success")
            this.props.submitInvoice(this.state)
        }
        this.setState({validated : true})

    }
    render() {
        const { invoiceDate, billNumber, contributerName, amount, isPending, remarks, contributorType, validated } = this.state
        return (
            <div>
                <div className='panel'>
                    <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" c>
                                    <Form.Label>Bill number</Form.Label>
                                    <Form.Control value={billNumber} type="text" placeholder="Bill number" style={{ textTransform : "uppercase" }} name="billNumber"  onChange={this.handleStateUpdate}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" c>
                                    <Form.Label>Date</Form.Label>
                                    <DatePicker
                                        selected={invoiceDate}
                                        className="form-control"
                                        customInput={
                                            <Form.Control type="text" placeholder="Bill number" id="validationCustom01" />
                                        }
                                        onChange={this.handleDateChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" c>
                            <Form.Label>Contributers Name</Form.Label>
                            <Form.Control value={contributerName} type="text" placeholder="Contributers Name" name="contributerName"  onChange={this.handleStateUpdate} required/>
                            <Form.Control.Feedback type="invalid">
                                Please enter a contributers name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" c >
                            <Form.Label>Amount</Form.Label>
                            <Form.Control value={amount} type="number" placeholder="Amount" min="0" name="amount"  onChange={this.handleStateUpdate} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Pending" checked={isPending} name="isPending"  onChange={this.handlePendingCheckBox}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                inline
                                checked={contributorType === "LOCAL"}
                                value="LOCAL"
                                label="Local"
                                type="radio"
                                id={`inline-radio-1`}
                                name="contributorType"
                                onChange={this.handleStateUpdate}
                            />
                            <Form.Check
                                inline
                                checked={contributorType === "SHOP"}
                                value="SHOP"
                                label="Shop"
                                type="radio"
                                id={`inline-radio-2`}
                                name="contributorType"
                                onChange={this.handleStateUpdate}
                            />
                            <Form.Check
                                inline
                                checked={contributorType === "POLITICIAN"}
                                value="POLITICIAN"
                                label="Politician"
                                type="radio"
                                id={`inline-radio-3`}
                                name="contributorType"
                                onChange={this.handleStateUpdate}
                            />
                            <Form.Check
                                inline
                                checked={contributorType === "MEMBER"}
                                value="MEMBER"
                                label="Member"
                                type="radio"
                                id={`inline-radio-4`}
                                name="contributorType"
                                onChange={this.handleStateUpdate}
                            />
                        </Form.Group>
                        <br/>
                        <Form.Group className="mb-3" c>
                            <Form.Label>Remarks</Form.Label>
                            <Form.Control value={remarks} type="text" placeholder="Remarks" name="remarks" onChange={this.handleStateUpdate}/>
                        </Form.Group>
                        <br/>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default ComponentInvoiceForm