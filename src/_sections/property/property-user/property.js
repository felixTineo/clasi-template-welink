import React from 'react';
import styled from 'styled-components';
import { Row, Col, Hidden } from 'react-grid-system';
import InteractionButtons from '../interaction-buttons';
import Icons from '../../../_icons';

const MainCont = styled.div`
  padding: 2rem;
  padding-top: 0;
  //border: 1px solid #EBEBEB;
  height: 100%;
  border-right: none;
  //background-color: ${props => props.theme.main.primaryColor};
`
const PublicObs = styled.p`
  font-weight: bold;
  margin: 2rem 0;
`

const CharsCont = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin: 2rem 0;
`
const CharTitle = styled.h2`
  color: ${props => props.theme.main.primaryColor};
`
const CharItemLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
  color: #002438;
`

const CharItem = ({ icon, name, value }) => {
  const Icon = Icons[icon];
  return(
    <CharItemLi>
      <Icon className="clasi-icon" />
      <span style={{ marginLeft: 16 }}>{name}</span>
      <span style={{ marginLeft: 16, fontSize: 12 }}>{value}</span>
    </CharItemLi>
  )
}


export default ({ description })=> {
  //const charsChunk = description.characteristics.length / 2;
  //const charsOthers = description.characteristics.filter(c => c.type !== "GENERAL");
  return(
    <MainCont>
      <Row>
        {console.log("CARACTERISTICAS", description)}
        <p>{description.publicObservations}</p>
        <Col xs={12}>
          <CharTitle>Características</CharTitle>
          <Row>
            <Col xs={12} md={6}>
              <CharsCont>
                {
                  //charsGeneral.slice(0, 7).map((c) => <CharItem key={c.id} {...c} />)
                  description.characteristics.slice(0, description.characteristics.length / 2).map((c) => <CharItem key={c.id} {...c} />)
                }
              </CharsCont>
            </Col>
            <Col xs={12} md={6}>
              <CharsCont>
                {
                  //charsGeneral.slice(7, charsGeneral.length).map((c) => <CharItem key={c.id} {...c} />)
                  description.characteristics.slice(description.characteristics.length / 2, -1).map((c) => <CharItem key={c.id} {...c} />)
                }        
              </CharsCont>      
            </Col>            
          </Row>
        </Col>
        <Col xs={12}>
          {/*<CharTitle>Otros servicios</CharTitle>*/}
          <Row>
            <Col xs={12} md={6}>
              <CharsCont>
                {
                  //charsOthers.slice(0, 7).map((c) => <CharItem  key={c.id} {...c} />)
                  [].map((c) => <CharItem key={c.id} {...c} />)
                }
              </CharsCont>
            </Col>
            <Col xs={12} md={6}>
              <CharsCont>
                {
                  //charsOthers.slice(7, charsOthers.length).map((c) => <CharItem key={c.id} {...c} />)
                  [].map((c) => <CharItem key={c.id} {...c} />)
                }        
              </CharsCont>                    
            </Col>            
          </Row>
        </Col>        
      </Row>
    </MainCont>
  )
}