import React, {useState} from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import { SearchForm as FormProperty } from '../../_components/forms';
import { useWindowSize } from '../../_hooks';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Fade } from 'react-reveal';

const SectionCont = styled.div`
  position: relative;
  background-color: ${props => props.theme.main.primaryColor};
  padding: 2rem;
  margin-top: 4rem;
  z-index: 100;
  @media(min-width: 576px){
    margin-top: 0;
  }
`
const Header = styled.header`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h1`
  color: #fff;
  margin: 0;
`
const IconButton = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  color: rgba(255, 255, 255, .5);
  transition: 250ms ease;
  &:hover{
    color: #fff;
  }
`
const ButtonContainer = styled.footer`
 display: flex;
 justify-content: center;
 padding: 1rem;
`



export default ()=> {
  const size = useWindowSize();
  const [filter, setFilter] = useState(false);
  return(
    <Container style={{ zIndex: 100 }}>
      <Fade bottom distance="20px" duration={1500}>
      <SectionCont>
        <Header>
        <Fade right distance="10px" duration={2000}>
          <Title>Propiedades</Title>
        </Fade>
          <Hidden xs>
            {
              filter
              ?(
                <IconButton onClick={()=> setFilter(false)}>
                <MinusCircleOutlined style={{ marginRight: 8 }} />
                  Menos filtros
                </IconButton>
              )
              :(
                <IconButton onClick={()=> setFilter(true)}>
                  <PlusCircleOutlined style={{ marginRight: 8 }} />
                  Más filtros
                </IconButton>              
              )
            }
          </Hidden>
        </Header>
        <Row align="center" style={{ zIndex: 100 }}>
          <Col xs={12} style={{ zIndex: 100 }}>
          <Fade bottom distance="10px" duration={2500}>
            <FormProperty filter={filter} />
          </Fade>
          </Col>
          <Visible xs>
            <Col xs={12}>
              <ButtonContainer>
                {
                  filter
                  ?(
                    <IconButton onClick={()=> setFilter(false)}>
                      <MinusCircleOutlined style={{ marginRight: 8 }} />
                      Menos filtros
                    </IconButton>
                  )
                  :(
                    <IconButton onClick={()=> setFilter(true)}>
                      <PlusCircleOutlined style={{ marginRight: 8 }} />
                      Más filtros
                    </IconButton>              
                  )
                }            
              </ButtonContainer>              
            </Col>            
          </Visible>
        </Row>
      </SectionCont>
      </Fade>
    </Container>
  )
}