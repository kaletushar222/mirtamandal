import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class ComponentRegistrationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formObject : {
                invoiceDate : new Date(),
                billNumber : "",
                contributerName : "",
                amount : 0,
                isPending : false,
                remarks : "",
                contributorType:"LOCAL",
            },
            validated : false,
            show : false,
            members: [
                {
                    id: 1,
                    name: "",
                    contact: "",
                    role: ""
                }
            ]
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(this.props.invoiceSubmitted, prevProps.invoiceSubmitted)
        if(this.props.invoiceSubmitted && !prevProps.invoiceSubmitted){
            this.setState({
                formObject : {
                    registrationDate : new Date(),
                    address : "",
                    groupName : "",
                    chiefPersonName : "",
                    chiefPersonContact : "",
                    description : "",
                    contributorType:"LOCAL",
                },
                validated : false,
                show : false
            })
        }
    }

    handleDateChange = (value) =>{
        const { invoice } = this.state
        invoice["registrationDate"] = value
        this.setState({
            invoice: invoice
        })
    }

    handleFormUpdate = (event) =>{
        const { invoice } = this.state
        invoice[event.target.name] = event.target.value
        this.setState({
            invoice: invoice
        })
    }

    setShow = (value) => {
        this.setState({show: value});
    }

    handleSubmit = (event) =>{
        const { invoice } = this.state
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            console.log("error")
        }
        else{
            console.log("success")
            this.props.submitInvoice(invoice)
        }
        this.setState({validated : true})
    }

    addNewMember = () =>{
        const { members } = this.state
        members.push({
            id: members.length + 1,
            name: "",
            contact: "",
            role: "",
        })
        this.setState({
            members: members
        })
    }

    deleteMember = (index) =>{
        const { members } = this.state
        members.splice(index, 1)
        this.setState({
            members: members
        })
    }

    render() {
        const { formObject, validated, members } = this.state
        return (
            <div>
                <div className='panel'>
                    <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
                        <Row>
                            <Col md="4" lg="4">
                                <Form.Group className="mb-3">
                                    <Form.Label>Group Name</Form.Label>
                                    <Form.Control value={ formObject.groupName } type="text" placeholder="Group Name" name="groupName"  onChange={this.handleFormUpdate} required/>
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a group name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control value={ formObject.address } type="text" placeholder="Address" name="address"  onChange={this.handleFormUpdate} required/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Registration Date</Form.Label>
                                    <DatePicker
                                        selected={ formObject.registrationDate }
                                        className="form-control"
                                        customInput={
                                            <Form.Control type="text" placeholder="Registration date" id="validationCustom01" />
                                        }
                                        onChange={this.handleDateChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Chief person name</Form.Label>
                                    <Form.Control value={ formObject.chiefPersonName } type="text" placeholder="Enter chief person name" name="chiefPersonName"  onChange={this.handleFormUpdate} required/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Chief person contact</Form.Label>
                                    <Form.Control value={ formObject.chiefPersonContact } type="text" placeholder="Enter chief person contact" name="chiefPersonContact"  onChange={this.handleFormUpdate} required/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control value={ formObject.description } type="text" placeholder="Description" name="description" onChange={this.handleFormUpdate}/>
                                </Form.Group>
                            </Col>
                            <div className="vr"></div>
                            <Col>
                                <div className="members-section">
                                    {
                                        members.map((member, index)=>{
                                            return <Row key={index}>
                                                {index+1}.
                                                <Col>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Member Name</Form.Label>
                                                        <Form.Control value={ member.name } type="text" placeholder="Enter Member Name" name="memberName"  onChange={this.handleFormUpdate} />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Member Contact</Form.Label>
                                                        <Form.Control value={ member.contact } type="text" placeholder="Enter Member Contact" name="memberContact"  onChange={this.handleFormUpdate} />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Member Role</Form.Label>
                                                        <Form.Control value={ member.role } type="text" placeholder="Enter Member Role" name="memberRole"  onChange={this.handleFormUpdate} />
                                                    </Form.Group>
                                                </Col>
                                                <Button style={{marginTop: "30px", marginBottom: "30px"}} variant="danger" onClick={ ()=>this.deleteMember(member.id) }><i className="bi bi-trash"></i></Button>
                                            </Row>
                                        })
                                    }
                                </div>
                                <Button variant="secondary"  onClick={ this.addNewMember } >+ Add member</Button>
                            </Col>
                        </Row>
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

export default ComponentRegistrationForm