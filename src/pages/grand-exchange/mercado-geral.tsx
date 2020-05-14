import React, { FormEvent, useState } from 'react';
import {Container, Row, Col} from 'reactstrap';
import RuneContainer from '../../components/rune-container';
import Form from '../../components/form-perfil';
import BabyDragon from '../../assets/img/baby-dragon.png';
import AGS from '../../assets/img/ags.png';
import Figure from '../../components/figure';
import ReactEcharts from 'echarts-for-react';
import Title from '../../components/title';
import ItemDetail from './item-detail';
import ItemDetailModel from '../../model/API/ItemDetailType';
import { getItemDetail, getGraphDetails } from '../../service/grand-exchange.service';
import Graph from '../../model/API/graph';
import Loading from '../../components/loading';

const MercadoGeral: React.FC = () => {
    
    
    const [itemName, setItemName] = useState<string>('');
    const [detail, setDetail]  = useState<ItemDetailModel>();
    const [name, setName] = useState<string> ('');
    const [graph, setGraph] = useState<Graph>();
    const [hidden, setHidden] = useState<boolean>(true);
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        resetState();
        setHidden(false)
        const detailAPI: ItemDetailModel = await getItemDetail(itemName);
        const graphAPI: Graph = await getGraphDetails(detail?.id ?? 1);
        setHidden(true)
        
        setName(detailAPI?.name);
        setDetail(detailAPI);
        setGraph(graphAPI);
    }

    const resetState = () => {
        setDetail(undefined);
        setGraph(undefined);
        setName('');
    };
    const getOptions = () => {
            return {
                tooltip: {
                trigger: 'axis'
            },
            label:{
                color:'yellow'
            },
            legend: {
                data: ['Daily', 'Average'],
                textStyle:{
                    color:'#fff',
                    fontWeight: '700'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {
                        title: 'Baixar como imagem'
                    },
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['6h', '9h', '12h', '15h', '18h', '21h', '00h'],
                axisLabel:{
                    color:'#fff',
                    fontFamily: 'Cinzel, serif'
                }
            },
            yAxis: {
                type: 'value',
                axisLabel:{
                    color:'#fff',
                    fontFamily: 'Cinzel, serif'
                }
            },
            series: [
                {
                    name: 'Daily',
                    type: 'line',
                    data:  [graph?.daily["6h"], graph?.daily["9h"], graph?.daily["12h"], graph?.daily["15h"], graph?.daily["18h"], graph?.daily["21h"], graph?.daily["00h"]],
                    itemStyle: {normal: {color:'#ffde23'}},
                },
                {
                    name: 'Average',
                    type: 'line',
                    data: [graph?.average["6h"], graph?.average["9h"], graph?.average["12h"], graph?.average["15h"], graph?.average["18h"], graph?.average["21h"], graph?.average["00h"]],
                    itemStyle: {normal: {color: '#fff'}},
        
                }
            
            ]
        };
    }

    return(
    <>
    <RuneContainer>
        <Row className="profile-row">
            <Col  xs="12">
                <Form title="Mercado Geral" placeholder="Digite o nome de um item." handleSubmit={(e: FormEvent) => handleSubmit(e) } onChangeInput={(e) => { setItemName(e.currentTarget.value)}}/>
            </Col>
        </Row>
        { !!name && <Title title={name}/>}
        { !!detail && !!graph && <Container className="container-skills">
            <Row>
                <Col className="in-center " xs="12" md="6">
                    <Figure className='figure-size' img={BabyDragon} alt='item' />
                </Col>
                <Col className="in-center" xs="12" md="6">
                    <ItemDetail preco={ (detail?.today?.price) as string} img={AGS} alt={detail?.name} caption={detail?.description}/>
                </Col>
                <Col className="in-center" xs="12">
                {graph && <ReactEcharts
                    option={getOptions()}
                    notMerge={true}
                    lazyUpdate={true}
                    style={{height: '300px', width: '100%', color:'yellow'}}
                    opts={ {renderer: 'svg'} } />}
                </Col>
            </Row>
        </Container>}
    </RuneContainer>
    {!hidden && <Loading />}
    </>
)}

export default MercadoGeral;