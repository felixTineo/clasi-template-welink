import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Context from '../../_context';
import { Fade } from 'react-reveal';

const MainCont = styled.section`
    //background-image: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${props => props.theme.about.hero.background});
    //background-size: cover;
    //background-repeat: no-repeat;
    //padding-top: 4rem;
`
const TitleCont = styled.div`
  position: relative;
  height: calc(100vh - 87px);
  display: flex;
  justify-content: center;
  align-items: center;
  ::before{
    content: " ";
    background-image: url("/about-description.jpg");
    background-size: cover;
    background-position: center;
    width: 60vw;
    height: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    @media(min-width: 576px){
      height: 100%;
      width: 50vw;
      top: 0;
      right: 0;
    }
  }
`
const Title = styled.h1`
  position: relative;
  color: #fff;
  padding: 1rem;
  text-align: left;
  margin: 0;
  width: 90vw;
  font-size: 26px;
  ::before{
    content: " ";
    background-color: ${props => props.theme.main.primaryColor};
    opacity: .7;
    width: 100%;
    height: 60vh;
    position: absolute;
    left: 0;
    top: 0;
    @media(min-width: 576px){
      height: 100%;
    }
  }
  @media(min-width: 576px){
    text-align: left;
    width: 70vw;
    padding: 4rem 2rem;
    font-size: 2rem;
  }
`
const Image = styled.img`
  width: 50vw;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export default ()=> {
  const state = useContext(Context).about;
  return(
    <MainCont>
      <Container>
        <TitleCont>
          <Fade bottom distance="30px" duration={1500}>
            <Title>
              <Fade right distance="15px" duration={2000}>
                <span style={{ zIndex: 5, position: "relative", width: "50%", display:"inline-block" }}>Inversiones</span>
                <p style={{ minHeight: "50vh", width: "30%", fontSize: 20, fontWeight: "400" }}>Deja que te asesore un grupo de expertos.</p>
              </Fade>
            </Title>
          </Fade>
        </TitleCont>        
              {/*<Image src={state.hero.background} alt={state.hero.title} />*/}
      </Container>
    </MainCont>
  )
}