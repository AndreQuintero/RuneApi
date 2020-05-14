import React, { FC } from 'react';
import { Row, Col } from 'reactstrap';

const Title: FC<{title: string}> = ({title}) => (
    <Row>
        <Col xs="12" className="profile-character in-center">
            <h1>{ title }</h1> 
        </Col>
    </Row>
);

export default Title;