import React, { FC } from 'react';
import {Row, Col, Container} from 'reactstrap';
import Figure from '../../../components/figure';
import TypeOfQuest from './typeOfQuest';
import QuestsModel from '../../../model/quests';
import QuestApi from '../../../model/quest-api';
import { StatusQuest } from  '../../../enum/statusQuest';

const Quests: FC<QuestsModel> = ({ quests = [], img, alt=''}) => {
    const filterQuest = (questsArr: QuestApi[], status: StatusQuest ): QuestApi[] => 
        questsArr.filter( item => item.status === status)

    const getTitleQuests = (questsArr: QuestApi[] , status: StatusQuest ): string[] => 
        filterQuest(questsArr, status).map( item => item.title)
    return (
    <Container>
        <Row>
            <Col className="in-center" xs="12" md="6">
                <div className="profile-quest">
                    <Container>
                        <Row>
                            <Col className="in-center" xs='12'>
                                <h4>Missões</h4>
                            </Col>
                            <Col className="in-center" xs='12'>
                                <div className = "quests-name">
                                    <TypeOfQuest className="concluida" missoes={ getTitleQuests(quests, StatusQuest.COMPLETED) }/>
                                    <TypeOfQuest className="progresso" missoes={ getTitleQuests(quests, StatusQuest.STARTED) }/>
                                    <TypeOfQuest className="nao-concluida" missoes={ getTitleQuests(quests, StatusQuest.NOT_STARTED) }/>
                                </div>
                            </Col>
                        </Row>  
                    </Container>  
                </div>
            </Col>
            <Col className="in-center" xs="12" md="6">
                <Figure className='figure-size' img={img} alt={alt} />
            </Col>
        </Row>
    </Container>
)};

export default Quests;