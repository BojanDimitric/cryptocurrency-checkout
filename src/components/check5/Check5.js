import React from 'react';
import { connect } from 'react-redux';

import './check5.css';

import logo from '../../images/bitpay.png';

const Check5 = ({ page, setPage, message }) => {
    if (page !== 5) return null; 
    return (
        <div className='page5'>
            <div className='left'>
                <h1 className='title'>Pay with Crypto</h1>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="payment-box">
                    <i class="fas fa-check"></i>
                    <h1>{message}</h1>
                    <p>Nostrud occaecat consequat nostrud veniam exercitation voluptate adipisicing ad adipisicing exercitation duis.</p>
                    <button onClick={() => setPage(1)}>HOME</button>
                </div>
            </div>
            <div className='right'>
                <h3>Easy, fast and serure payments</h3>
                <p>Ea do mollit exercitation est culpa elit qui. Ipsum quis do ut nulla ex minim sint.</p>
                <span style={{ alignSelf: 'center' }}>Powered by</span>
                <img src={logo} alt='logo' style={{ alignSelf: 'center' }} />
            </div>
        </div>
    );
};

const mapState = state => ({
    message: state.fourth.message
});

export default connect(mapState)(Check5);