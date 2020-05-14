import React, { FC } from 'react';
import {Row, Col, Container} from 'reactstrap';
import Figure from '../../../components/figure';
import AdventureLogsModel from '../../../model/adventureLog';
import LogSkills from './log-skills';
import LogUps from './log-ups';

const LogAdventure: FC<AdventureLogsModel> = ({img, alt = '', skills, logs = []}) => (
    <Container className="container-skills">
        <Row>
            <Col className="in-center" xs="12" md="6">
                <Figure className='figure-size' img={img} alt={alt} />
            </Col>
            <Col className="log-actives" xs="12" md="6">
                <LogSkills magicExp={skills?.magicExp} meeleExp={skills?.meeleExp} 
                    rangedExp={skills?.rangedExp} totalSkill={skills?.totalSkill}
                />
                <LogUps ups={logs}/>
            </Col>
        </Row>
    </Container>
);

export default LogAdventure;