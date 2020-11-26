import React, { useContext, Fragment } from 'react';
import OfficeContext from '../../_context';
import { ReviewCarousel } from '../../_components/carousels'
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import Contact from '../home/contact';

const MainSection = styled.section`
  position: relative;
  min-height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem; 
  @media(min-width: 768px){
    padding: 4rem 0; 
  }
`
const TitleQuoteCont = styled.div`
  //padding-top: 4rem;
`
const SvgCont = styled.svg`
  margin: 2rem 0;
  fill: ${props => props.theme.main.primaryColor};
`
const QuoteCarouselCont = styled.div`
  padding-top: 0rem;
  position: relative;
  @media(min-width: 768px){
    padding-top: 2rem;
  }
`
const CarouselCont = styled.div`
  position: relative;
  width: 100%;
  @media(min-width: 768px){
    width: 50%;
  }
`
const Divider = styled.div`
  border-bottom: 1px solid #DADADA;
`

export default ()=> {
  const reviews = useContext(OfficeContext).home.reviews.items;
  return(
    <Fragment>
      <Container>
        <QuoteCarouselCont>
          <ReviewCarousel />
        </QuoteCarouselCont>
      </Container>
    <Contact />
    </Fragment>
  )
}

