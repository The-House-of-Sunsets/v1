import React, {Component} from 'react';
import Btn from '../../../components/Button'
import './style.css';
const DonateBtn = () => {
    return (
        <>
            <Btn btnDiv ={`donate`} btnColor={``} className={'yellow btn-lg'}>
            Donate
            </Btn>
        </>
    );
}
export default DonateBtn;