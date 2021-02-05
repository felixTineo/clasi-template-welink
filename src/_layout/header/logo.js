import React, {useContext} from 'react';
import Context from '../../_context';
import Link from '../../_components/link';
import styled from 'styled-components';

const Nav = styled.span`
  text-decoration: none;
  &:hover{
    color: #fff;
  }
  &:visited{
    color: #fff;
  }
`
const LogoImg = styled.img`
    max-width: 100px;
  @media(min-width: 576px){
    max-width: 180px;
  }
`
const LogoText = styled.span`
  font-size: 1.5rem;
`

export default ({ dark })=> {
  const state = useContext(Context);

  return(
    <Link to="/">
      <Nav title="Inicio">
        {
          state.main.logo.isImage
          ?(
            <LogoImg src="/logo.png" alt={"Halabi propiedades"} />
          )
          :(
            <LogoText>
              {state.main.logo.value}
            </LogoText>
          )
        }
      </Nav>
    </Link>
  )
}