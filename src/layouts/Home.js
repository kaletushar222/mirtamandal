import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import crackerImg from '../images/cracker.jpg'
import ganeshImage from '../images/ganesh.png'
class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            invoices: []
        }
        console.log("props : ",props)
        console.log(window.location)
    }

    submitInvoice =() =>{
        console.log("invoice submitted")
    }
    render() {
        return (
            <div>
                <div className='home-container'>
                    <Image className='home-image' src={crackerImg}/>
                    <h1 className="centered">Mitra Mandal</h1>
                </div>
                {/* <div className='home-container'>
                    <Image className='home-image' src={ganeshImage}/>
                    <h1 className="centered">Ganesh Festival</h1>
                </div> */}
            </div>
        );
    }
}

export default Home