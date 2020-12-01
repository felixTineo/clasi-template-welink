import React, { useContext, useReducer } from 'react';
import Context from '../../../_context';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Input, Textarea } from '../../../_components/inputs';
import { Button } from '../../../_components/buttons';
import { PlusCircleOutlined } from '@ant-design/icons';

const MainCont = styled.div`
  //padding: 4rem;
  background-color: #F7F7F7;
  //border: 1px solid #EBEBEB;
  //height: 100%;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12),
              0px 16px 16px rgba(0, 0, 0, .12);
`
const UserCont = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.main.primaryColor};
  padding: 4rem;
  //height: 100%;
`
const Avatar = styled.img`
  object-fit: cover;
  object-position: center;
  min-height: 48px;
  min-width: 48px;
  height: 60px;
  width: 60px;
  flex-grow: 1;
  flex-shrink: 0;
  border-radius: 50%;
  margin-bottom: 2rem;
  @media(min-width: 768px){
    min-height: 76px;
    min-width: 76px;
    height: 120px;
    width: 120px;
    flex-grow: 0;
    flex-shrink: 1;
  }
`
const NoAvatar = styled.div`
  min-height: 60px;
  min-width: 60px;
  flex-grow: 1;
  flex-shrink: 0;
  border-radius: 50%;
  margin-bottom: 2rem;
  background-color: transparent;
  color: #fff;
  border: 4px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  @media(min-width: 768px){
    font-size: 3rem;
    min-height: 76px;
    min-width: 76px;
    height: 120px;
    width: 120px;
  }
`
const UserInfoCont = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 1rem;
`
const UserInfoItem = styled.li`
  text-align: center;
  color: #fff;
`
const FullName = styled.p`
  font-size: 2rem;        
  margin: 0;
`
const ContactForm = styled.form`
  margin-top: 3rem;
  height: 100%;
  padding: 4rem;
`
const ContactFormButtons = styled.div`
  margin-top: 1rem;
`
const IconButton = styled.a`
  color: #5A5A5A;
  transition: 250ms ease;
  display: flex;
  align-items: center;
  text-align: left;
  margin-top: 2rem;
  cursor: pointer;
  &:visited{
    color: #5A5A5A;
  }  
  &:hover{
    color: ${props => props.theme.main.primaryColor};
  }
`

export default ({ description })=> {
  //const description = useContext(Context).singleProperty;
  const user = { ...description._comercialUser[0], ...description._comercialUser_person[0] };
  const [message, setMessage] = useReducer((current, next) => ({ ...current, ...next }),{
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  return(
    <MainCont>
      {console.log(user)}
      <UserCont>
        {
          user.Avatar?(
            <Avatar src={user.avatar} alt={user.lastName} />
          )
          :(
            <NoAvatar>
              <span>{user.firstName.charAt(0).toUpperCase()}</span>
              <span>{user.lastName.charAt(0).toUpperCase()}</span>
            </NoAvatar>
          )
        }
        <UserInfoCont>
          <UserInfoItem>
            <FullName>
              {`${user.firstName} ${user.lastName}`}
            </FullName>
          </UserInfoItem>
          <UserInfoItem>
            {user.position}
          </UserInfoItem>
          <UserInfoItem>
          {user.phone && user.phone.countryCode + " " + user.phone.areaCode + " " + user.phone.phoneNumber}
          {user.mobile && user.mobile.countryCode + " " + user.mobile.areaCode + " " + user.mobile.phoneNumber}
          </UserInfoItem>
        </UserInfoCont>
      </UserCont>
      <ContactForm
        onSubmit={(e)=> e.preventDefault() }
      >
        <Row>
          <Col xs={12}>
            <Input
              placeholder="Nombre"
              id="name"
              vertical
              primary
              value={message.name}
              onChange={e => setMessage({ [e.target.id]: e.target.value })}
            />
          </Col>
          <Col xs={12}>
            <Input
              placeholder="Teléfono"
              id="phone"
              vertical
              primary
              value={message.phone}
              onChange={e => setMessage({ [e.target.id]: e.target.value })}
            />
          </Col>
          <Col xs={12}>
            <Input
              placeholder="Email"
              id="email"
              vertical
              primary
              value={message.email}
              onChange={e => setMessage({ [e.target.id]: e.target.value })}
            />
          </Col>
          <Col xs={12}>
            <Textarea
              placeholder="Mensaje"
              id="message"
              vertical
              primary
              rows={6}
              value={message.message}
              onChange={e => setMessage({ [e.target.id]: e.target.value })}
            />
          </Col>   
          <Col xs={12} md={12}>
            <ContactFormButtons>
              <Button primary block>
                Enviar
              </Button>
            </ContactFormButtons>
          </Col>          
          <Col xs={12} md={12}>
            <IconButton href={`https://api.whatsapp.com/send?phone=${user.phone ? user.phone.countryCode + user.phone.areaCode + user.phone.phoneNumber : user.mobile ? user.mobile.countryCode + user.mobile.areaCode + user.mobile.phoneNumber : ''}&text=${message.message}`} alt="send whatsapp message">
              <span>¿Deseas contactarme por teléfono o enviarme un whatsapp?</span>
              <PlusCircleOutlined style={{ marginRight: 8, fontSize: 26 }} />
            </IconButton>
          </Col>
        </Row>
      </ContactForm>
    </MainCont>
  )
}