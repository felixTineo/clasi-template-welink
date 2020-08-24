import React, { useContext, Fragment } from 'react';
import Context from '../../_context';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { DescCarousel } from '../../_components/carousels';

const Image = styled.img`
  object-position: center;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const Carousel = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
  padding: 4rem;
  padding-top: 20%;
  height: 100%;
`
const CarouselInnerCont = styled.div`
  position: relative;
`

export default ()=> {
  const state = useContext(Context).about;
  return(
    <Fragment>
      <Row nogutter>
        <Col xs={12} md={6}>
          <Image src={state.description.background} alt="nuestra empresa" />
        </Col>
        <Col xs={12} md={6}>
          <Carousel>
            <CarouselInnerCont>
              <DescCarousel />
            </CarouselInnerCont>
          </Carousel>
        </Col>        
      </Row>
    </Fragment>
  )
}