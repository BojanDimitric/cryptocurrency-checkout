import React, { useState } from 'react';

import Check1 from '../check1/Check1';
import Check2 from '../check2/Check2';
import Check3 from '../check3/Check3';
import Check4 from '../check4/Check4';
import Check5 from '../check5/Check5';

import '../../fontawesome/css/all.css';

const Crypto = () => {
    const [page, setPage] = useState(1);

    const next = () => {
        if (page >= 5) {
            setPage(5);
        } else {
            setPage(page + 1);
        };
    };

    return (
        <>
            <Check1 page={page} next={next} />
            <Check2 page={page} next={next} setPage={setPage} />
            <Check3 page={page} next={next} setPage={setPage} />
            <Check4 page={page} next={next} />
            <Check5 page={page} setPage={setPage} />
        </>
    );
}

export default Crypto;
