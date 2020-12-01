import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import Logo from './logo';
import Link from '../../_components/link';
import { LinkButton as Button } from '../../_components/buttons';
import RateBar from './rate-bar';

const MainCont = styled.nav`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #212121;
`
const NavBar = styled.ul`
  display: flex;
`
const NavItem = styled.li`
  margin-left: ${props => props.noMargin ? 0 : "1.5rem"};
`
const NavLink = styled.span`
  color: #212121;;
  transition: 250ms ease;
  text-decoration: none !important;
  &:hover{
    color: ${props => props.theme.main.primaryColor};;
  }
  &:visited{
    color: rgba(255, 255, 255, .6);
  }
`
const SvgCont = styled.svg`
  fill: ${props => props.theme.main.primaryColor};
  margin-right: .5rem;
  transition: 250ms ease;
  /*${Button}:hover & {
    fill: ${props => props.theme.main.primaryColor};
  }*/
`

export default ()=> {
  const office = useContext(Context).office;
  return(
    <MainCont>
      <Logo />
      <NavBar>
        <NavItem noMargin>
          <Link to="/about">
            <NavLink>
              Sobre mí
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/properties">
            <NavLink>
              Propiedades
            </NavLink>
          </Link>
        </NavItem>
        {/* <NavItem>
          <Link to="/news">
            <NavLink>
              Noticias
            </NavLink>
          </Link>
        </NavItem> */}
        <NavItem>
          <Link to="/contact">
            <NavLink>
              Contacto
            </NavLink>
          </Link>
        </NavItem>                          
      </NavBar>
      <RateBar />
      <Button>
        <SvgCont width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.8766 9.1894C12.0195 9.1894 11.1779 9.05534 10.3804 8.79178C9.98958 8.65849 9.50917 8.78077 9.27066 9.02573L7.6965 10.2141C5.87092 9.23956 4.7464 8.11541 3.78521 6.30354L4.93857 4.77039C5.23822 4.47114 5.3457 4.03401 5.21693 3.62385C4.95224 2.82213 4.81779 1.98093 4.81779 1.12343C4.81782 0.503963 4.31386 0 3.69443 0H1.12339C0.503964 0 0 0.503964 0 1.12339C0 8.22365 5.77639 14 12.8766 14C13.4961 14 14 13.496 14 12.8766V10.3127C14 9.69336 13.496 9.1894 12.8766 9.1894Z"/>
        </SvgCont>
        {<span>{office.phone}</span>}
      </Button>
  </MainCont>
  )
}