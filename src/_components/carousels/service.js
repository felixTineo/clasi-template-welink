import React, { useContext, Fragment } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Visible, Hidden } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
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
  width: 100%;
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
const StyledDot = styled(Dot)`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: none;
  transition: 250ms ease;
  background-color: #e4e4e4;
  &:nth-child(2n - 1){
    margin: 0 1rem;
  }
  &:disabled{
    background-color: ${props => props.theme.main.primaryColor};
    height: 14px;
    width: 14px;
  }
`

const Service = ({ id, title, description }) => {
  if(title)  return(
    <ServiceCont>
      <ServiceTitle>
        {title}
      </ServiceTitle>
      <ServiceDescription>
        {description}
      </ServiceDescription>
    </ServiceCont>    
  )
  return null;
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
          //naturalSlideHeight={50}
          isIntrinsicHeight={true}
          totalSlides={3}
          visibleSlides={1}
          orientation="horizontal"
        >
          {console.log("ITEMS DESK", itemsDesk)}
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
            <LeftCircleOutlined style={{ color, fontSize: 26 }} />
          </ButtonBack>
          <ButtonNext className="carousel-next-button carousel-text-next-button">
            <RightCircleOutlined style={{ color, fontSize: 26 }} />
          </ButtonNext>
        </CarouselProvider>
      </Hidden>
      <Visible xs>
        <CarouselProvider
          naturalSlideWidth={100}
          //naturalSlideHeight={50}
          isIntrinsicHeight={true}
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
            <ButtonBack className="carousel-back-button carousel-text-back-button">
              <LeftCircleOutlined style={{ color, fontSize: 26 }} />
            </ButtonBack>
            <ButtonNext className="carousel-next-button carousel-text-next-button">
              <RightCircleOutlined style={{ color, fontSize: 26 }} />
            </ButtonNext>
          </CarouselProvider>
      </Visible>
    </Fragment>
  )
}