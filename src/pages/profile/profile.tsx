import React, { useState, FormEvent } from 'react';
import RuneContainer from '../../components/rune-container';
import {Row, Col} from 'reactstrap';
import Fire from '../../assets/img/fire.png'
import Goblin from '../../assets/img/goblin.png'
import Form from '../../components/form-perfil';
import LogAdventure from './AdventureLog/log-adventure';
import Quests from './Quests/quests';
import { getProfile, getQuests } from '../../service/player.service';
import ProfileAPI from '../../model/API/profile';
import ExpSkills from '../../model/expSkills';
import QuestApi from '../../model/quest-api';
import Title from '../../components/title';
import Loading from '../../components/loading';

const Profile: React.FC = () => {
    const [playerName, setPlayerName] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [skills, setSkills] = useState<ExpSkills>();
    const [logs, setLogs] = useState<string[]>([]);
    const [quests, setQuests] = useState<QuestApi[]>([]);
    const [hidden, setHidden] = useState<boolean>(true);

    const SIX = 6;

    const getQuestsMock = (player: string) => getQuests(player);

    const getPlayerStatus = async (e: FormEvent) => {
        e.preventDefault();
        resetState();
        setHidden(false);
        const profile: ProfileAPI = await getProfile(playerName, SIX);
        const questsService: QuestApi[] = await getQuestsMock(playerName);
        setHidden(true);
        setName(profile?.name);
        setSkills({
            magicExp: profile?.magic,
            meeleExp: profile?.melee,
            rangedExp: profile?.ranged,
            totalSkill: profile?.totalskill
        });
        setLogs( profile?.activities.map( item => item.details) );
        
        setQuests(questsService);
        
    }
    
    const resetState = () => {
        setSkills(undefined);
        setLogs([]);
        setQuests([]);
        setName('');
    }
    
    return(
    <>
    <RuneContainer>
        <Row className="profile-row">
            <Col  xs="12">
               <Form title="Perfil" placeholder="Digite o nome de um jogador." handleSubmit={(e: FormEvent) => getPlayerStatus(e)} onChangeInput={(e) => setPlayerName(e.currentTarget.value)}/>
            </Col>
        </Row>
        {!!name && <Title title = {name}/>}
        { !!skills && !!logs.length && <LogAdventure img= {Fire} alt='status' skills={ skills } logs ={ logs } />}

        { !!quests.length && <Quests img={Goblin} alt='missoes' 
            quests={ quests }/> }
    </RuneContainer>
    { !hidden && <Loading />}
    </>
)}

export default Profile;