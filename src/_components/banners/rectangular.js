import React from 'react';
import styled from 'styled-components';
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import { Button } from '../buttons';

const BannerCont = styled.div`
  margin-top: 2rem;
  padding: 2rem 0;
  background-color: transparent;
  background-image: ${props => props.image ? `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(${props.image})` : ""};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${props => props.theme.main.primaryColor};
`
const Title = styled.p`
  text-align: center;
  font-size: 26px;
  margin: 0;
  margin-bottom: 2rem;
  @media(min-width: 768px){
    text-align: left;
    margin-bottom: 0;
  }
`
const ImageCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default ({ title, image, onClick, buttonText, icon }) => {

  return(
    <BannerCont image={image}>
      <Row align="center">
        <Col xs={12} md={9}>
          <Title>
            {title}
          </Title>
        </Col>
        <Col xs={12} md={3}>
          <Button onClick={onClick} block primary>
            {buttonText}
          </Button>
        </Col>        
      </Row>
    </BannerCont>
  )
}