import React, { useContext, Fragment } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Visible, Hidden } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const chunkArray = (myArray, chunk) =>{
  var results = [];
  while (myArray.length) {
      results.push(myArray.splice(0, chunk));
  }
  return results;
};

const ServiceCont = styled.div`
  padding: 2rem;
`
const ServiceTitle = styled.p`
  color: ${props => props.theme.main.primaryColor};
`
const ServiceDescription = styled.p`

`
const ServiceContainer = styled.div`
  display: flex;
`
const DotsCont = styled.div`
  position: absolute;
  left: 2.5rem;
  bottom: .4rem;
`

const SvgCont = styled.svg`
  fill: ${props => props.theme.main.primaryColor};
`

const Service = ({ id, title, description }) => {
  return(
    <ServiceCont>
      <ServiceTitle>
        {title}
      </ServiceTitle>
      <ServiceDescription>
        {description}
      </ServiceDescription>
    </ServiceCont>    
  )
}


export default ()=> {
  const state = useContext(Context);
  const color = state.main.primaryColor;
  const itemsMovil = state.home.services.items;
  const itemsToChunk = state.home.services.items.map(item => item);
  const itemsDesk = chunkArray(itemsToChunk, 2);
  return(
    <Fragment>
      <Hidden xs>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          //isIntrinsicHeight={true}
          totalSlides={itemsDesk.length}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              itemsDesk.map((mainItem, index) => (
                <Slide key={mainItem[0].id} index={index}>
                  <ServiceContainer>
                  {
                    mainItem.map(item => (
                        <Service key={item.id} {...item} />
                    ))
                  }
                  </ServiceContainer>
                </Slide>
              ))
            }
          </Slider>
          <ButtonBack className="carousel-back-button carousel-text-back-button">
            <SvgCont width="8" height="14" fill="none" version="1.1" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
              <path d="m0.28783 6.3069 6.0345-6.0196c0.38387-0.38312 1.0062-0.38312 1.3899 0 0.38371 0.38278 0.38371 1.0036 0 1.3863l-5.3396 5.3264 5.3394 5.3262c0.38371 0.383 0.38371 1.0037 0 1.3865-0.38371 0.3829-1.006 0.3829-1.3899 0l-6.0345-6.0197c-0.19186-0.19148-0.28767-0.44217-0.28767-0.69299 0-0.25094 0.096005-0.50181 0.28783-0.6932z"/>
            </SvgCont>
          </ButtonBack>
          <ButtonNext className="carousel-next-button carousel-text-next-button">
            <SvgCont width="8" height="14" fill="none" version="1.1" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
              <path d="m7.7122 7.6931-6.0345 6.0196c-0.38387 0.3831-1.0062 0.3831-1.3899 0-0.38371-0.3828-0.38371-1.0036 0-1.3864l5.3396-5.3264-5.3394-5.3262c-0.38371-0.38293-0.38371-1.0037 0-1.3865 0.38371-0.38293 1.0061-0.38293 1.3899 0l6.0345 6.0197c0.19185 0.19148 0.28767 0.44217 0.28767 0.69299 0 0.25094-0.096 0.50181-0.28783 0.6932z"/>
            </SvgCont>
          </ButtonNext>
          <DotsCont>
            {
              Array(itemsDesk.length).fill(0).map((_,i) => <Dot style={{ backgroundColor: color }} className="carousel-text-dot" key={i} slide={i} />)
            }
          </DotsCont>
        </CarouselProvider>
      </Hidden>
      <Visible xs>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          //isIntrinsicHeight={true}
          totalSlides={itemsMovil.length}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              itemsMovil.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Service {...item} />
                </Slide>
              ))
            }
          </Slider>
            {
              Array(itemsMovil.length).fill(0).map((_,i) => <Dot style={{ backgroundColor: color }} className="carousel-text-dot" key={i} slide={i} />)
            }          
          </CarouselProvider>
      </Visible>
    </Fragment>
  )
}