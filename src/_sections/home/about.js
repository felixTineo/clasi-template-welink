import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Row, Col, Container, Hidden } from 'react-grid-system';
import { Button } from '../../_components/buttons';
import { ServiceCarousel, ReviewCarousel } from '../../_components/carousels';
import { navigate } from 'gatsby';
import { Fade } from 'react-reveal';

const MainCont = styled.section`  
  position: relative;
  //padding-bottom: 6rem;
`
const HeroInfoCont = styled.div`
  background-color: transparent;
  min-height: calc(50vh - 4rem);
`
const DescriptionCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  height: 100%;
  //padding: 4rem 3rem;
`
const Title = styled.h2`
  font-size: 26px;
  color: ${props => props.theme.main.primaryColor};
  @media(min-width: 768px){
    font-size: 36px;
  }    
`
const Description = styled.p`
  margin: 2rem 0 4rem;
`
const HeroImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
const HeroImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  object-fit: center;
`
const TitleService = styled(Title)`
  color: ${props => props.theme.main.primaryColor};
  padding-top: 1rem;
  @media(min-width: 768px){
    font-size: 36px;
  }  
`
const SubTitleService = styled(Description)`
  font-weight: bold;
  margin: 4rem 0 0;
`
const TitleQuoteCont = styled.div`
  padding-top: 4rem;
`
const SvgCont = styled.svg`
  margin: 2rem 0;
  fill: ${props => props.theme.main.primaryColor};
`
const QuoteCarouselCont = styled.div`
  padding-top: 6rem;
  @media(min-width: 768px){
    padding-top: 2rem;
  }
`
const CarouselCont = styled.div`
  position: relative;
  //padding-top: 4rem;
`


export default ()=> {
  const state = useContext(Context).home;
  return(
    <Container>
    <MainCont>
      <HeroInfoCont>
          <Row>
            <Col xs={12} md={6}>
              <HeroImageContainer>
                <HeroImage src={state.about.banner.image} alt="Nuestra historia" />
              </HeroImageContainer>
            </Col>            
            <Col xs={12} md={6}>
              <DescriptionCont>
                <Title>
                  {state.about.banner.title}
                </Title>
                <Description>
                  {state.about.banner.subTitle}
                </Description>
                <Button block outlined onClick={()=> navigate("/about")}>
                  {state.about.banner.buttonText}
                </Button>
              </DescriptionCont>
            </Col>
          </Row>
      </HeroInfoCont>
        <Row gutterWidth={128} style={{ marginTop: 48 }}>
          <Col xs={12} md={6}>
            <TitleService>Ofrecemos un servicio ajustado a las necesidades de cada cliente</TitleService>
          </Col>
          <Col xs={12} md={6}>
            <CarouselCont>
              <ServiceCarousel />
            </CarouselCont>
          </Col>
{/*          <Col xs={12} md={12}>
            <QuoteCarouselCont>
              <ReviewCarousel />
            </QuoteCarouselCont>
  </Col>          */}
        </Row>
    </MainCont>
    </Container>
  )
}