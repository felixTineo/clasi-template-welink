import React, { useContext, Fragment } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Context from '../../_context';
import { Button } from '../../_components/buttons';

const SectionCont = styled.div`
  margin-top: 4rem;
  padding: 2rem 0;
  background-color: ${props => props.theme.main.primaryColor};
  color: #fff;
`
const TextCont = styled.div`
  
`
const SectionText = styled.p`
  text-align: center;
  @media(min-width: 768px){
    font-size: 2rem;
    text-align: center;
    width: 50%;
  }
`

const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export default ()=> {
  const sectionText = useContext(Context).home.contact.title;
  return(
    <Fragment>
        <SectionCont>
            <Row align="center" justify="center">
              <Col xs={12} md={12}>
                <ButtonCont>
                  <SectionText>
                    {sectionText}
                  </SectionText>          
                </ButtonCont>
              </Col>
              <Col xs={12} md={12}>
                <ButtonCont>
                  <Button>
                    Contactanos
                  </Button>
                </ButtonCont>
              </Col>
            </Row>
        </SectionCont>
    </Fragment>
  )
}