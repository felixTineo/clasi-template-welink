import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../../_context';
import { FormProperty } from '../../_components/forms'
import { Container, Row, Col, Hidden } from 'react-grid-system';

const MainCont = styled.section`
  position: relative;
  min-height: 100vh;
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7) ), url(${props => props.theme.home.hero.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  @media(min-width: 768px){
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
  }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  padding-top: 6rem;
  @media(min-width: 768px){
    padding-top: 0;
    min-height: 90vh;
    justify-content: center;
    align-items: flex-start;
  }
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  bottom: -25vh;
  left: 0;
  width: 100%;
  padding: 0 3.5%;
  z-index: 500;
  @media(min-width: 768px){
    position: relative;
    bottom: auto;
    min-height: 85vh;
  }
`
const ButtonContainer = styled.div`

`
const Title = styled.h1`
  font-weight: 300;
  max-width: 95%;
  font-size: 32px;
  text-align: center;
  @media(min-width: 768px){
    max-width: 100%;
    font-size: 60px;
    text-align: left;
  }
`
const DownButton = styled.a`
  text-decoration: none;
  position: absolute;
  bottom: 48px;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  transition: 250ms ease;
  &:hover{
    color: ${props => props.theme.main.primaryColor};
  }
`
const SvgCont = styled.svg`
  stroke: #fff;
  transition: 250ms ease;
  margin-right: 1rem; 
  ${DownButton}:hover & {
    stroke: ${props => props.theme.main.primaryColor};
  }
`

export default ()=> {
  const state = useContext(Context);

  return(
    <MainCont>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <TitleContainer>
              <Title>
                {state.home.hero.title}
              </Title>
              <Hidden xs>
                <ButtonContainer>
                  <DownButton href="#properties">
                    <SvgCont width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="15" cy="15" r="14.5"/>
                      <path d="M19.2426 14L15 18.2427L10.7574 14" strokeLinecap="round" strokeLinejoin="round"/>
                    </SvgCont>
                    Mira lo que tenemos para ofrecerte
                  </DownButton>
                </ButtonContainer>
              </Hidden>
            </TitleContainer>
          </Col>
          <Col xs={12} md={6}>
            <FormContainer>
              <FormProperty block />            
            </FormContainer>
          </Col>          
        </Row>
      </Container>
    </MainCont>
  )
}