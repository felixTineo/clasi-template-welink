import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Row, Col, Visible } from 'react-grid-system';
import InteractionButtons from '../interaction-buttons';
import { EnvironmentOutlined } from '@ant-design/icons';
import { priceFormat } from '../../../_util';

const MainCont = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
  min-height: 100%;
  color: #fff;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
              {`${description.currency} ${priceFormat(description.value)}`}
            </Price>
          </Col>
        </Row>
      </MainCont>    
    </Fragment>
  )
}