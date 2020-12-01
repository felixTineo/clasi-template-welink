import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import { useGetIndicators } from '../../_hooks';
import { LoadingOutlined } from '@ant-design/icons';

const MainCont = styled.div`
  //background-color: ${props => props.theme.main.primaryColor};
  color: ${props => props.theme.main.primaryColor};
  padding: 2rem 0;
  font-size: 12px;
  user-select: none;
`
const RatesCont = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #919191;
  @media(min-width: 768px){
    font-weight: normal;
    justify-content: flex-end;
    color: ${props => props.theme.main.primaryColor};
  }
`
const RateItem = styled.li`
  margin-left: .30rem;
  &::after{
    content: " -"
  }
  @media(min-width: 768px){
    margin-left: .5rem;
    &::after{
      content: " /"
    } 
  }
`
const RateItemNoAfter = styled(RateItem)`
  &::after{
    content: ""
  }
  @media(min-width: 768px){
    &::after{
      content: ""
    } 
  }
`

export default ()=> {
  const { loading, error, data } = useGetIndicators();
  
  if(loading) return(
    <MainCont>
      <Container>
        <RatesCont>
          <RateItem>
            UF <span><LoadingOutlined /></span>
          </RateItem>
          <RateItem>
            UTM <span><LoadingOutlined /></span>
          </RateItem>
          <RateItemNoAfter>
            Dólar <span><LoadingOutlined /></span>
          </RateItemNoAfter>                    
        </RatesCont>
      </Container>
    </MainCont>
  );

  if(error) return <span>error de conextión</span>

  return(
    <MainCont>
      <Container>
        <RatesCont>
          <RateItem>
            UF {data.uf}
          </RateItem>
          <RateItem>
            UTM {data.utm}
          </RateItem>
          <RateItemNoAfter>
            Dólar {data.dollar}
          </RateItemNoAfter>                    
        </RatesCont>
      </Container>
    </MainCont>
  )
}