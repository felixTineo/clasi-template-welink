import React, { useContext, Fragment } from 'react';
import OfficeContext from '../../_context';
import { ReviewCarousel } from '../../_components/carousels'
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import Contact from '../home/contact';

const MainSection = styled.section`
  min-height: 25vh;
  padding: 4rem 0; 
  display: flex;
  justify-content: center;
  align-items: center;
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
      <MainSection>
        <CarouselCont>
          <TitleQuoteCont>
            <SvgCont width="84" height="101" viewBox="0 0 84 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M56 48.3737L56 0H84L84 48.3737L72.6923 101H58.1538L66.2308 48.3737H56ZM0 48.3737L0 0L28 0L28 48.3737L16.6923 101H2.15385L10.2308 48.3737H0Z"/>
            </SvgCont>
          </TitleQuoteCont>
          <QuoteCarouselCont>
            <ReviewCarousel />
          </QuoteCarouselCont>
        </CarouselCont>
      </MainSection>
    </Container>
    <Divider />
    <Contact />
    </Fragment>
  )
}

