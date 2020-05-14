import React from 'react';
import RuneContainer from '../../components/rune-container'
import { Row } from 'reactstrap';
import Saradomin from '../../assets/img/saradomin.png';
import Zamorak from '../../assets/img/zamorak-general.png';
import Menu from './menu';

const Home: React.FC = () => (
    <RuneContainer>
        <Row>
            <Menu link="/profile" image={Saradomin} alt="perfil" caption="Perfil" /> 
            <Menu link="/grand-exchange" image={Zamorak} alt="mercado geral" caption="Mercado Geral" />
        </Row>
    </RuneContainer>
)

export default Home;