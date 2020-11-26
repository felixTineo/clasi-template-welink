import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Row, Col, Visible } from 'react-grid-system';
import InteractionButtons from '../interaction-buttons';
import { EnvironmentOutlined } from '@ant-design/icons';

const MainCont = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
  //min-height: 100%;
  color: #fff;
  padding: 2rem 4rem;
  @media(min-width: 768px){
    padding: 2rem 4rem 0;
  }
`
const OperationCode = styled.p`
  //color: ${props => props.theme.main.primaryColor};
  font-weight: bold;
`
const Title = styled.h1`
  font-weight: 300;
  font-size: 50px;
  //color: ${props => props.theme.main.primaryColor};
`
const Price = styled(Title)`
  //color: ${props => props.theme.main.primaryColor};
`
const UbicationCont = styled.div`
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
  background-color: #F7F7F7;
  color: #5A5A5A;
  @media(min-width: 768px){
    margin: 0;
  }
`
const SvgCont = styled.span`
  font-size: 2rem;
  margin-right: 1rem;
  color: ${props => props.theme.main.primaryColor};
`


export default ({ description })=> {

  return(
    <Fragment>
      <MainCont>
        <Row>
          <Col xs ={12}>
            <OperationCode>
              {`${description.operation}-COD.: ${description.code}`}
            </OperationCode>
            <Title>
              {description.title}
            </Title>
            <Price>
              {`${description.currency} ${description.value}`}
            </Price>
          </Col>
        </Row>
      </MainCont>
      <UbicationCont>
        <SvgCont>
          <EnvironmentOutlined />
        </SvgCont>
        <span>
          {description.ubication.address}
        </span>
      </UbicationCont>      
    </Fragment>
  )
}