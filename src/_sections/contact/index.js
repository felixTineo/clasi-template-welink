import React, { useContext } from 'react';
import context from '../../_context/';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { Input, Textarea } from '../../_components/inputs';
import { Button } from '../../_components/buttons';
import Map from '../../_components/map';
import { Fade } from 'react-reveal';

const MainCont = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 96.67px;
  @media(min-width: 768px){
    margin-top: 0;
  }    
`
const TitleCont = styled.div`
  padding: 2rem;
  background-color: ${props => props.theme.main.primaryColor};
  color: #fff;
  @media(min-width: 768px){
    padding: 4rem;
  }    
`
const Title = styled.h1`
  margin: 0;
  font-size: 30px;
  margin: 0;
`
const SubTitle = styled.p`

`
const Form = styled.form`
  padding: 2rem;
  //border-radius: 8px;
  width: 100%;
  margin: 0;
  background-color: ${props => props.theme.main.primaryColor};
  /*box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12);*/
  @media(min-width: 768px){
    padding: 4rem;
    padding-top: 0;
    margin: 0;
  }
`
const ImgCaptcha = styled.img`
  //width: 100%;
  margin-bottom: 1rem;
`
const MailSpan = styled.span`
  color: ${props => props.theme.main.primaryColor};
  text-decoration: underline;
`
const SubTitleFooter = styled(SubTitle)`
  margin-top: 4rem;
`
const ButtonContainer = styled.div`
   //margin-top: 32px;
   display:flex;
   //justify-content: flex-start;
   align-items: center;
   @media(min-width: 768px){
    justify-content: flex-end;
  }   
`

export default ()=> {
  const { lat, lng } = useContext(context).office;
  return(
    <Fade bottom distance="30px" duration={1000}>
    <Container>
      <MainCont>
        <Row nogutter>
          <Col xs={12} md={6}>
            <TitleCont>
              <Title>
                Contáctanos
              </Title>
              <span>No dudes en escribirnos para obtener más información.</span>
            </TitleCont>
            <Form onSubmit={e=> e.preventDefault()}>
              <Row align="center">
                <Col xs={12}>
                  <Input
                    placeholder="Nombre"
                    id="name"
                    vertical  
                  />
                </Col>
                <Col xs={12}>
                  <Input
                    placeholder="Email"
                    id="email"
                    vertical  
                  />                                            
                </Col>
                <Col xs={12}>
                  <Input
                    placeholder="Teléfono"
                    id="phone"
                    vertical  
                  />                                    
                </Col>
                <Col xs={12}>
                  <Textarea
                    placeholder="Mensaje"
                    id="message"
                    rows={7}
                    vertical  
                  />                  
                </Col>
                <Col xs={12}>
                  {/*<ImgCaptcha src="/captcha.png" alt="no soy un robot" />*/}
                </Col>
                <Col xs={12}>
                  <ButtonContainer>
                    <Button block rounded>Enviar</Button>
                  </ButtonContainer>                  
                </Col>                                                                          
              </Row>
            </Form >        
            <SubTitleFooter>
              También puede escribirnos a <MailSpan>propiedades@flussmosel.cl</MailSpan>
            </SubTitleFooter>                                        
          </Col>
          <Col xs={12} md={6}>
          {
            lat && (
              <Map
              lat={parseFloat(lat)}
              lng={parseFloat(lng)}
              height={"calc(100% - (5rem + 19px))"}
              zoom={16}
            />         
            )
          } 
          </Col>
        </Row>
      </MainCont>
    </Container>
    </Fade>
  )
}