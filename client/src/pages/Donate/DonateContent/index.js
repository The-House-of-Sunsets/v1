import React from 'react';
import { Row, Col } from 'reactstrap';
import Header from '../../../components/Header';
import FormElement from '../../../components/Form';
const DonateContent = () => {
    return (
        <>
            {/* 
            - Header text
            - Paragraph text
            - Form
            - Button
            - Share
            */}
            <Header 
                text="Support the Sunset"
                subtext="We need your help to bring Sunsets to the masses.">
                {/*<Image src={hosLogo} height="auto" width="35%" alt="The House of Sunsets Logo" />*/}
            </Header>

            <FormElement />
            {/*<Share />*/}
        </>
    );
}
export default DonateContent;