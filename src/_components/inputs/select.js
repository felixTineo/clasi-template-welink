import React from 'react';
import styled from 'styled-components';

const DefaultOption = styled.option`
  color: #212121;
`
const Option = styled.option`
  color: #212121;
  font-size: 1rem;
`

const Select = styled.select`
  border: none;
  outline: none;
  font-size: 1rem;
  color: ${props => props.primary ? props.theme.main.primaryColor : "#212121"};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; 
  background-color: #fff;
  border-radius: 6px;
  padding: 5px;
  height: 44px;
  width: 100%;
  background-image: url('/icons/chevron-select.svg');
  background-repeat: no-repeat;
  background-position: right center;
  margin-bottom: 1rem;
  color: #878787;
  cursor: pointer;
  //box-shadow: 0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12);
  border: ${props => props.gray ? "1px solid #EBEBEB" : "none" };
  &::-ms-expand{
    background: transparent;
  }  
  @media(min-width: 768px){
    margin-bottom: ${props => props.vertical ? "2rem" : "0"};
    box-shadow: ${props => props.shadow ? "0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12)" : "none"};
  }
`

export default (props)=> {
  return(
      <Select
        defaultChecked="propiedad"
        {...props}
      >
        <DefaultOption value="">{props.default}</DefaultOption>
        {
          props.options.map((o, index) => <Option key={index}>{o}</Option>)
        }       
      </Select>    
  )
}