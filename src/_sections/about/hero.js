import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Context from '../../_context';

const MainCont = styled.section`
  //background-image: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${props => props.theme.about.hero.background});
  //background-size: cover;
  //background-repeat: no-repeat;
    padding-top: 4rem;
`
const InnerCont = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(min-width: 768px){
    justify-content: flex-start;
  }
`;
const Title = styled.h1`
  height: 50vh;
  color: ${props => props.theme.main.primaryColor};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(min-width: 768px){
    text-align: left;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export default ()=> {
  const state = useContext(Context).about;
  return(
    <MainCont>
      <Container>
          <Row>
            <Col xs={12} md={6}>
              <Title>
                {state.hero.title}
              </Title>
            </Col>
            <Col xs={12} md={6}>
              <Image src={state.hero.background} alt={state.hero.title} />
            </Col>            
          </Row>
      </Container>
    </MainCont>
  )
}