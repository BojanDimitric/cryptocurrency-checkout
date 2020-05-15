import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getSecond, postSecond } from '../../store';

import './check2.css';

import logo from '../../images/bitpay.png';

const Check2 = ({ page, next, setPage, currency, amount, exchanges, promos, getSecond, postSecond }) => {
    
    useEffect(() => {
        getSecond();
    }, []);

    const [promo, setPromo] = useState([]);

    const onChange = e => {
        if (promo.includes(e.target.value)) {
            setPromo(promo.filter(item => item !== e.target.value));
        } else {
            setPromo([...promo, e.target.value]);
        };
    };

    if (page !== 2) return null;

    const list = promos => {
        return promos.map((item, i) => {
            if (promos.length !== i + 1) {
                return (
                    <>
                        <div key={i} className='promo'>
                            <label>
                                <input type='checkbox' name='free' value={item} onChange={onChange} />
                                <i className='fas fa-check-circle'></i>
                                <p>{item}</p>
                            </label>
                        </div>
                        <div className='divider'></div>
                    </>
                );
            } else {
                return (
                    <div key={i} className='promo'>
                        <label>
                            <input type='checkbox' name='order' value={item} onChange={onChange} />
                            <i className='fas fa-check-circle'></i>
                            <p>{item}</p>
                        </label>
                    </div>
                );
            }
        });
    }; 

    return (
        <div className='page2'>
            <div className='left'>
                <h1 className='title'>Pay with Crypto</h1>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='currency-box'>
                    <div>
                        <i className='fab fa-bitcoin'></i>
                        <p>{currency}</p>
                    </div>
                    <p onClick={() => setPage(1)}>Change</p>
                </div>
                <p className='total-text'>Total</p>
                <div className='total-box'>
                    <h5>{currency ? currency : '$'}</h5>
                    <p>{currency ? (amount * exchanges[currency]).toFixed(6) : '0'}</p>
                </div>
                <p className='select-text'>Select promo</p>
                <div className='select-box'>
                    <form>
                        {promos ? list(promos) : null}
                    </form>
                </div>
                <div className='buttons'>
                    <button onClick={() => {
                        next();
                        postSecond(currency, amount, promo);
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
    promos: state.second.promos
});

const mapDispatch = dispatch => ({
    getSecond: () => dispatch(getSecond()),
    postSecond: (currency, amount, promos) => dispatch(postSecond(currency, amount, promos))
});

export default connect(mapState, mapDispatch)(Check2);