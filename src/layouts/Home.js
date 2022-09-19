import React from 'react';

class Home extends React.Component {
    submitInvoice =() =>{
        console.log("invoice submitted")
    }
    render() {
        return (
            <div>
                <div className='home'>
                    <h1>Welcome to Mitra Mandal </h1>
                </div>
            </div>
        );
    }
}

export default Home