import React, { useContext, useState, useEffect } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { PropertyCarousel } from '../../_components/carousels';
import { Rectangular } from '../../_components/banners';
import { navigate } from 'gatsby';
import { Fade } from 'react-reveal';

const MainCont = styled.section`
  min-height: 100vh;
  //margin-top: ${props => props.noMargin ? "4rem" : "13rem"};
  padding-top: 8rem;
  @media(min-width:768px){
    padding: 4rem 0;
  }
`
const Title = styled.h2`
  color: ${props => props.theme.main.primaryColor};
  margin: 0;
  margin-bottom: 4rem;
  font-weight: 300;
  width: 70%;
  font-size: 26px;
  @media(min-width:768px){
    width: 60%;
  }
`

export default ({ noMargin })=> {
  const state = useContext(Context).home.properties;
  const office = useContext(Context).office;
  const [items, setItems] = useState([]);

  useEffect(()=>{
    (async()=>{
      try{
        //const data = await fetch(`https://api.clasihome.com/rest/properties?id=${office.id}&typeId=${office.typeId}&status=PUBLICADA&limit=9&integration=WEB&featured=true`);
        const data = await fetch(`https://api.clasihome.com/rest/properties?id=${office.id}&typeId=${office.typeId}&status=PUBLICADA&limit=9&integration=WEB&featured=true`);
        //const data = await fetch(`https://api.clasihome.com/rest/properties?id=5e8e36b31c9d440000d35090&typeId=office&status=PUBLICADA&limit=9&integration=WEB&featured=true`);
        const result = await data.json();
        console.log("ITEMS ITEMS ITEMS", result.properties);
        setItems(result.properties);
      }catch(e){
        console.log(e);
      }
    })()
  },[]);

  return(
    <MainCont id="properties" noMargin={noMargin}>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>
              {state.title}
            </Title>                 
          </Col>
          <Col xs={12}>
            <PropertyCarousel items={items} />
          </Col>
          <Col xs={12}>
            <Rectangular
              image={state.bannerImage}
              buttonText={state.buttonText}
              title={state.footer}
              icon="/icons/marker.svg"
              onClick={()=> navigate("/properties")}
            />
          </Col>
        </Row>
      </Container>
    </MainCont>
  )
}