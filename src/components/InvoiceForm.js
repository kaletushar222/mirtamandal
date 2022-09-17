import React from 'react';
import {Button, Form, Row, Col} from 'react-bootstrap';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"


class InvoiceForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            invoiceDate : new Date(),
            billNumber : "",
            contributerName : "",
            amount : 0,
            isPending : false,
            remarks : "",
            contributorType:"LOCAL"
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

    render() {
        const { invoiceDate, billNumber, contributerName, amount, isPending, remarks, contributorType } = this.state
        return (
            <div className='panel'>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Bill number</Form.Label>
                                <Form.Control value={billNumber} type="text" placeholder="Bill number" style={{ textTransform : "uppercase" }} name="billNumber"  onChange={this.handleStateUpdate}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
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
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contributers Name</Form.Label>
                        <Form.Control value={contributerName} type="text" placeholder="Contributers Name" name="contributerName"  onChange={this.handleStateUpdate} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control value={amount} type="number" placeholder="Amount" name="amount"  onChange={this.handleStateUpdate} />
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
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Remarks</Form.Label>
                        <Form.Control value={remarks} type="text" placeholder="Remarks" name="remarks" onChange={this.handleStateUpdate}/>
                    </Form.Group>
                    <br/>
                    <Button variant="primary" type="submit" onClick={this.props.submitInvoice}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default InvoiceForm