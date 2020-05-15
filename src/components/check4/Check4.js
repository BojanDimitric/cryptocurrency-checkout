import React from 'react';
import { connect } from 'react-redux';

import { getFourth } from '../../store';

import './check4.css';

import logo from '../../images/bitpay.png';

const Check4 = ({ page, next, id, getFourth }) => {
    if (page !== 4) return null; 
    return (
        <div className='page4'>
            <div className='left'>
                <h1 className='title'>Pay with Crypto</h1>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="transaction-box">
                    <i class="fas fa-redo-alt"></i>
                    <h1>Transaction pending</h1>
                    <p>Transaction ID</p>
                    <span>{id}</span>
                    <p>Nostrud occaecat consequat nostrud veniam exercitation voluptate adipisicing ad adipisicing exercitation duis.</p>
                </div>
                <button onClick={() => {
                    next();
                    getFourth();
                }} style={{ alignSelf: 'center' }}><i class="fas fa-redo-alt"></i>REFRESH</button>
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
    id: state.third.id
});

const mapDispatch = dispatch => ({
    getFourth: () => dispatch(getFourth())
});

export default connect(mapState, mapDispatch)(Check4);