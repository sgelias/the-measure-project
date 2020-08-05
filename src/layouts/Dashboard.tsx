import React from 'react';
import { Container } from 'reactstrap';

import { CustomFeatureBuilder } from '../modules/custom-features-builder';


interface Props { };


export default (props: Props) => {


    return (
        <>
            <Container>
                <h2>The measure project</h2>
                <CustomFeatureBuilder />
            </Container>
        </>
    )
};