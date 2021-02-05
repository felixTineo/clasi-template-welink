import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

const MainCont = styled.section`
  //padding-top: 5rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
`
const HistoryCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`
const Title = styled.h2`
  color: ${props => props.theme.main.primaryColor};
`
const Description = styled.div`

`
const Image = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
`


export default ()=> {
  const state = useContext(Context).about;
  return(
    <MainCont>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <HistoryCont>
              <Title>
                Calidad y profesionalismo
              </Title>
              <Description>
              Nuestra constructora Armacima Ltda. es la encargada de levantar los cimientos o llevar a cabo la remodelación de tu casa. Con seguridad y compromiso realizamos cada ejecución y terminación de obra, cumpliendo plazos y presupuestos estipulados con anterioridad.                
              </Description>
            </HistoryCont>
          </Col>
          <Col xs={12} md={6}>
            <Image src="/construction-2.jpg" alt="historia" />
          </Col>                    
        </Row>
      </Container>
    </MainCont>
  )
}