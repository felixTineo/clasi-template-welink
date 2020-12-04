import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

const MainCont = styled.section`
margin-top: 4rem;
  @media(min-width: 768px){
    margin-top: 1rem;
  }
`

const Title = styled.h2`
  color: ${props => props.theme.main.primaryColor};
  font-weight: 300;
  margin-bottom: 2rem;
  text-align: left;
  @media(min-width: 768px){
    padding: 2rem 0;
    font-size: 50px;
  }
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //margin-bottom: 4rem;
  @media(min-width: 768px){
    //margin: 0;
    //width: 50%;
  }
`
const Avatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
`
const Name = styled.p`
  //color: ${props => props.theme.main.primaryColor};
  margin-top: 2rem;
  font-weight: bold;
  font-size: 1.5rem;
`
const Description = styled.p`
  //height: 100px;
  //padding-bottom: 1rem;
  overflow: hidden;
  text-align: center;
  @media(min-width: 768px){
    //margin: 0;
    width: 50%;
  }
`
const ContactCont = styled.ul`
  //color: ${props => props.theme.main.primaryColor};
  list-style: none;
  padding: 0;
  margin: 0;
`
const ContactInfo = styled.li`
  font-weight: bold;
  text-align: center;
`

export default ()=> {
  const state = useContext(Context).about.team;
  return(
    <MainCont>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>
              Mi Persona
            </Title>
          </Col>
          {
            state.items.map(m => (
              <Col xs={12} md={12} key={m.id}>
                <Card>
                  <Avatar src={m.avatar} alt={m.lastName} />
                  <Name>{m.fullName}</Name>
                  <Description>
                    {m.cv}
                  </Description>
                  <ContactCont>
                    <ContactInfo>
                      {m.email}
                    </ContactInfo>
                    <ContactInfo>
                      {m.phone}                      
                    </ContactInfo>
                  </ContactCont>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </MainCont>
  )
}