import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Select, Input } from '../inputs';
import { Button, IconButton } from '../buttons';
import { Visible, Hidden } from 'react-grid-system';

const Form = styled.form`
  height: 85%;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 1rem;
  background-color: #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12),
              0px 16px 16px rgba(0, 0, 0, .12);
  @media(min-width: 768px){
    width: ${props => props.block ? "100%" : "60%"};
    //padding-left: 5px;
    box-shadow: ${props => props.shadow && "0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12)"};
    margin-bottom:0;
  }  
`
const FormType = styled.header`
  padding: 0 2rem;
  border-bottom: 1px solid #ECECEC;
  @media(min-width: 768px){
    padding: 0 4rem;
  }
`
const FormTypeButton = styled.button`
  padding: 4rem 0 2rem;
  width: 50%;
  background: transparent;
  border: none;
  border-bottom: 4px solid #fff;
  transition: 250ms ease;
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.active ? '#212121' : "#B8B8B8"};
  border-color: ${props => props.active ? props => props.theme.main.primaryColor : "#fff"};
  @media(min-width: 768px){
    font-size: 1rem;
  }
`
const FormInputsCont = styled.div`
  padding: 4rem;
`

export default ({ block, shadow })=> {
  const [searchBy, setSearchBy] = useState("PROPERTY");
  return(
    <Form onSubmit={(e) => e.preventDefault()} block={block} shadow={shadow}>
      <Row gutterWidth={32} align="center">
        <Col xs={12}>
          <FormType>
            <FormTypeButton onClick={()=> setSearchBy("PROPERTY")} active={searchBy === "PROPERTY"}>
              Buscar por propiedad
            </FormTypeButton>
            <FormTypeButton onClick={()=> setSearchBy("CODE")} active={searchBy === "CODE"}>
              Buscar por código
            </FormTypeButton>            
          </FormType>
        </Col>
      </Row>
      <FormInputsCont>
        <Row>
          <Col xs={12} md={12}>
            <Select
              default="Propiedad"
              options={["opcion 1", "opcion 2", "opcion 3"]}
              gray
              vertical
            />
          </Col>
          <Col xs={12} md={12}>
            <Select
              default="Operación"
              options={["opcion 1", "opcion 2", "opcion 3"]}
              gray
              vertical
            />
          </Col>    
          <Col xs={12} md={12}>
            <Input
              placeholder="Comuna"
              gray
              vertical
            />
          </Col>        
          <Col xs={12} md={12}>
            <Button primary block>
              Buscar
              <img src="/icons/search.svg" alt="buscar" style={{ marginLeft: "1rem" }} />
            </Button>
          </Col>
        </Row>
      </FormInputsCont>
    </Form>
  )
}