import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { getThird, postThird } from '../../store';

import './check3.css';

import logo from '../../images/bitpay.png';

const Check3 = ({ page, next, setPage, currency, amount, exchanges, selected, address, id, getThird, postThird }) => {

    useEffect(() => {
        getThird();
    }, []);

    const ref = useRef(null);

    // const selected = ['FREE SHIPPING', '10% OFF NEXT ORDER'];

    // const address = '00000000000000000000000000000000';

    const list = selected => {
        return selected.map((item, i) => (
            <div key={i} className='promo-box'>
                 <div>
                    <i className='fas fa-check-circle'></i>
                    <p>{item}</p>
                </div>
                <p onClick={() => setPage(2)}>Change</p>   
            </div>
        ));
    };

    if (page !== 3) return null; 
    return (
        <div className='page3'>
            <div className='left'>
                <h1 className='title'>Pay with Crypto</h1>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='crypto-box'>
                    <div>
                        <i className='fab fa-bitcoin'></i>
                        <p>{currency}</p>
                    </div>
                    <p onClick={() => setPage(1)}>Change</p>
                </div>
                {selected ? list(selected) : null}
                <p className='total-text'>Total</p>
                <div className='total-box'>
                    <h5>{currency ? currency : '$'}</h5>
                    <p>{currency ? (amount * exchanges[currency]).toFixed(6) : '0'}</p>
                </div>
                <p className='payment-text'>Send your payment to</p>
                <div className='payment-box'>
                    <input type='text' value={address} ref={ref} onChange={() => {}} />
                    <button onClick={() => console.log('clip', ref.current.value)}>COPY</button>
                </div>
                <div className='buttons'>
                    <button onClick={() => {
                        next();
                        postThird();
                    }}>NEXT</button>
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
    currency: state.first.currency,
    amount: state.first.amount,
    exchanges: state.first.exchanges,
    selected: state.third.selected,
    address: state.third.address,
    id: state.third.id
});

const mapDispatch = dispatch => ({
    getThird: () => dispatch(getThird()),
    postThird: () => dispatch(postThird())
});

export default connect(mapState, mapDispatch)(Check3);