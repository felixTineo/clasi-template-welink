import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../../../_context';
import { Container, Row, Col } from 'react-grid-system';

import Gallery from './gallery';
import Description from './description';

const MainCont = styled.div`
  margin-top: 96.67px;
  margin-bottom: 3rem;
  @media(min-width: 768px){
    margin-top: 0;
  }
`
export default ({ state })=> {
  //const state = useContext(Context).singleProperty;
  return(
    <MainCont>
      <Container>
        <Row gutterWidth={0} style={{ backgroundColor: "#1a1f63" }}>
          <Col xs={12} md={6} push={{ md:6 }}>
            <Gallery images={state.images} />                   
          </Col>
          <Col xs={12} md={6} pull={{ md: 6 }}>     
            <Description description={state} />
          </Col>
        </Row>
      </Container>
    </MainCont>    
  )
}