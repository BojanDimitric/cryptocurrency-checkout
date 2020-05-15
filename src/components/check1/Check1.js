import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getFirst, postFirst } from '../../store'

import './check1.css';

import logo from '../../images/bitpay.png';

const Check1 = ({ page, next, currencies, amount, exchanges, getFirst, postFirst }) => {
    
    useEffect(() => {
        getFirst();
    }, []);

    const [currency, setCurrency] = useState('');

    const list = currencies => {
        return currencies.map((currency, i) => {
            if (currencies.length !== i + 1) {
                return (
                    <>
                        <div key={i} className='currency'>
                            <label>
                                <input type='radio' name='currency' value={currency} onChange={e => setCurrency(e.target.value)} />
                                <i className='fas fa-check-circle'></i>
                                <p>{currency}</p>
                            </label>
                        </div>
                        <div className='divider'></div>
                    </>
                );
            } else {
                return (
                    <div key={i} className='currency'>
                        <label>
                            <input type='radio' name='currency' value={currency} onChange={e => setCurrency(e.target.value)} />
                            <i className='fas fa-check-circle'></i>
                            <p>{currency}</p>
                        </label>
                    </div>
                );
            }
        });
    };

    if (page !== 1) return null; 

    return (
        <div className='page1'>
            <div className='left'>
                <h1 className='title'>Pay with Crypto</h1>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='crypto-box'>
                    <div>
                        <i className='fab fa-bitcoin'></i>
                        <p>Crypto currency</p>
                    </div>
                    <p>Change</p>
                </div>
                <p className='select-text'>Select your crypto currency</p>
                <div className='select-box'>
                    <form>
                        {currencies ? list(currencies) : null}
                    </form>
                </div>
                <p className='total-text'>Total</p>
                <div className='total-box'>
                    <h5>{currency ? currency : '$'}</h5>
                    <p>{currency ? (amount * exchanges[currency]).toFixed(6) : '0'}</p>
                </div>
                <div className='buttons'>
                    <button onClick={() => {
                        next();
                        postFirst(currency);
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
    currencies: state.first.currencies,
    amount: state.first.amount,
    exchanges: state.first.exchanges
});

const mapDispatch = dispatch => ({
    getFirst: () => dispatch(getFirst()),
    postFirst: currency => dispatch(postFirst(currency))
});

export default connect(mapState, mapDispatch)(Check1);