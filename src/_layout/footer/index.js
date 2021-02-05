import React, { useContext } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Context from '../../_context';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import { Button } from '../../_components/buttons';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Pulse from 'react-reveal/Pulse';
import { ArrowUpOutlined } from '@ant-design/icons';

const Footer = styled.footer`
  //background-color: #007a3d;
`
const MainFooter = styled.div`
  padding: 4rem 0;
`
const FooterRightsCont = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
  color: ${props => props.theme.main.secondaryColor};
  padding: 2rem 0;
  @media(min-width: 768px){
    padding: .5rem 0;
  }  
`
const OfficeInfoCont = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 2rem;
  list-style: none;
`
const OfficeInfo = styled.li`
  color: #979797;
  margin-bottom: .5rem;
`
const FooterRights = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 14px;
  @media(min-width: 768px){
    flex-direction: row;
    align-items: center;
  }    
`
const NavCont = styled.div`
  margin: 2rem 0;
  @media(min-width: 768px){
    margin: 0;
    padding-left: 2rem;
  }      
`
const NavLink = styled(Link)`
  //color: #fff;
  transition: 250ms ease;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 1rem;
  @media(min-width: 768px){
    display: block;
  }
  &:visited{
    color: #000;
  }  
  &:hover{
    color: ${props => props.theme.main.primaryColor} !important;
  }
`
const SvgIcon = styled.svg`
  fill: ${props => props.social ? props.theme.main.primaryColor : "green"};
  margin-right: .5rem;
`
const SocialNav = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  //color: ${props => props.theme.main.primaryColor};
  color: ${props => props.theme.main.primaryColor};
  display: flex;
  align-content: center;
  justify-content: flex-start;
  margin-top: 2rem;
`

const SocialItem = styled.li`
  margin-left: .5rem;
`

const Logo = styled.img`
  object-fit: cover;
  object-position: center;
  max-width: 180px;
`

const HeaderTitle = styled.h1`
  color: ${props => props.theme.main.primaryColor};
  font-size: 1rem;
  font-weight: bold;
`

const DevelopBy = styled.a`
  color: #fff !important;
  font-weight: bold;
  margin-left: .5rem;
`

const LogoCont = styled.div`
  margin-bottom: 2rem;
`
const BackTopCont = styled.div`
  display: flex;
  justify-content: flex-end;
`
const BackTop = styled.button`
  display: flex;
  color: #fff;
  justify-content: center;
  border: none;
  cursor: pointer;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props => props.theme.main.primaryColor};
  margin-bottom: 1rem;
  transition: 250ms ease;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12);
  &:hover{
    filter: brightness(1.1);
  };
  &:active{
    box-shadow: none;
  }
`
 

export default ()=> {
  const office = useContext(Context).office;
  const state = useContext(Context);
  const handleTop = ()=> window.scrollTo(0, 0);
  return(
    <Footer>
      {console.log("STATE footer", state)}
      <MainFooter>
        <Container>
          <Row>
            <Col xs={12} md={2}>
              <GatsbyLink to="/" style={{ textDecoration: 'none' }}>
                <LogoCont>
                  {
                    state.main.logo.isImage
                      ?<Logo src="/logo.png" alt="logo" />
                      :<HeaderTitle>{state.main.logo.value}</HeaderTitle>
                  }
                </LogoCont>                        
              </GatsbyLink>                       
            </Col>
            <Col xs={12} md={4}>
            <p style={{ margin: 0 }}>Somos especialistas en la compra, venta y arriendo de bienes raíces.</p>
            <p>Nuestro equipo de trabajo cuenta con gran experiencia en el mercado. Brindamos asesoría legal a cada uno de nuestros clientes y trabajamos para que su inversión sea de alta rentabilidad.</p>
            </Col>
            <Col xs={12} md={2}>
              <NavCont>
                <Row>
                  <Col xs={6} md={12}>
                    <NavLink to="/properties">
                      Propiedades
                    </NavLink>                  
                  </Col>
                  <Col xs={6} md={12}>
                    <NavLink to="/investments">
                      Inversiones
                    </NavLink>                  
                  </Col>
                  <Col xs={6} md={12}>
                    <NavLink to="/financing">
                      Finaciamiento
                    </NavLink>                  
                  </Col>                                    
                  <Col xs={6} md={12}>
                    <NavLink to="/about">
                      Empresa
                    </NavLink>
                  </Col>                  
                  {/* <Visible md xs xxl lg xl>
                    <Col xs={6} md={12}>
                      <NavLink to="/news">
                        Noticias
                      </NavLink>                  
                    </Col>
                  </Visible> */}
                  <Col xs={6} md={12}>
                    <NavLink to="/contact">
                      Contacto
                    </NavLink>                  
                  </Col>                                          
                </Row>
              </NavCont>
            </Col>         
            <Col xs={12} md={3}>
              <OfficeInfoCont>
                <OfficeInfo>
                  Agustinas #681 OF 606, Santiago
                </OfficeInfo>
                <OfficeInfo>
                  +562 3281 4949
                </OfficeInfo>
                <OfficeInfo>
                  {office.email}
                </OfficeInfo>
              </OfficeInfoCont>     
              <SocialNav>
                    <li>Siguenos en</li>
                    <SocialItem style={{ marginLeft: "1rem" }} rel="noopener">
                    <a href={office.facebook}>
                        <SvgIcon social={true} width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.27373 2.90134C5.87719 2.90134 5.47699 3.28387 5.47699 3.56846V5.47396H8.27186C8.15933 6.93509 7.9283 8.27121 7.9283 8.27121H5.46269V16.5517H1.78855V8.27032H0V5.48389H1.78855V3.20574C1.78855 2.78916 1.69814 0 5.5531 0H8.27586V2.90134H6.27373Z"/>
                        </SvgIcon>
                      </a>
                    </SocialItem>
                    <SocialItem>
                      <a href={office.instagram} rel="noopener">
                        <SvgIcon social={true} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.54187 0H12.1921C15.2523 0 17.734 2.48165 17.734 5.54187V12.1921C17.734 15.2523 15.2523 17.734 12.1921 17.734H5.54187C2.48165 17.734 0 15.2523 0 12.1921V5.54187C0 2.48165 2.48165 0 5.54187 0ZM12.1921 16.0714C14.3313 16.0714 16.0714 14.3313 16.0714 12.1921V5.54187C16.0714 3.40271 14.3313 1.66256 12.1921 1.66256H5.54187C3.40271 1.66256 1.66256 3.40271 1.66256 5.54187V12.1921C1.66256 14.3313 3.40271 16.0714 5.54187 16.0714H12.1921Z"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M4.43359 8.86697C4.43359 6.41857 6.41869 4.43347 8.86709 4.43347C11.3155 4.43347 13.3006 6.41857 13.3006 8.86697C13.3006 11.3154 11.3155 13.3005 8.86709 13.3005C6.41869 13.3005 4.43359 11.3154 4.43359 8.86697ZM6.09616 8.86697C6.09616 10.3943 7.33975 11.6379 8.86709 11.6379C10.3944 11.6379 11.638 10.3943 11.638 8.86697C11.638 7.33852 10.3944 6.09603 8.86709 6.09603C7.33975 6.09603 6.09616 7.33852 6.09616 8.86697Z"/>
                          <circle cx="13.6332" cy="4.10096" r="0.590764" fill="#A05FFF"/>
                        </SvgIcon>
                      </a>
                    </SocialItem>     
                  </SocialNav>                       
            </Col>
            <Col xs={12} md={1}>
              <Row>
                <Col xs={12}>
                </Col>                            
                <Col xs={12}>
                    <Hidden xs>
                      <Pulse forever duration={2000}>
                        <BackTopCont>
                          <BackTop onClick={handleTop} href="#top">
                            <ArrowUpOutlined />
                          </BackTop>
                        </BackTopCont>
                      </Pulse>
                    </Hidden>                   
                </Col>  
              </Row>
            </Col>                          
          </Row>
        </Container>      
      </MainFooter>
      <FooterRightsCont>
        <Container>
          <FooterRights>
            <li>2021 © Todos los derechos reservados</li>
            <li>Desarrollado por <DevelopBy href="https://clasihome.com/" target="_blank" rel="noopener">Clasihome</DevelopBy></li>
          </FooterRights>
        </Container>
      </FooterRightsCont>
      
    </Footer>
  )
}
/*
              <GatsbyLink to="/" style={{ textDecoration: 'none' }}>
                <a href="/">
                    {
                      state.main.logo.isImage
                        ?<Logo src={state.main.logo.value} alt="logo" />
                        :<HeaderTitle>{state.main.logo.value}</HeaderTitle>
                    }
                </a>
              </GatsbyLink>
*/