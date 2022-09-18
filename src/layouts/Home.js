import React from 'react';

class Home extends React.Component {
    submitInvoice =() =>{
        console.log("invoice submitted")
    }
    render() {
        return (
            <div className='home'>
                <h1>Welcome to Mitra Mandal </h1>
            </div>
        );
    }
}

export default Home