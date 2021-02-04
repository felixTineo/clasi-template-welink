import React, { useEffect, useRef, useReducer } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Input, Textarea } from '../../_components/inputs';
import { Button } from '../../_components/buttons';

gsap.registerPlugin(ScrollTrigger);

const MainCont = styled.div`
  padding: 4rem 0;
`
const Title = styled.h2`
  color: ${props => props.theme.main.primaryColor};
  opacity: 0;
  transform: translateY(25px);
  font-size: 26px;
  @media(min-width: 768px){
    font-size: 2rem;
  }
`
const Description = styled.p`
  text-align: justify;
  opacity: 0;
  transform: translateY(25px);
`
const Image = styled.div`
  width: 100%;
  padding-top: 75%;
  background-image: url("${props => props.src}");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
`
const SlideBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Logo = styled.img`
  width: 150px;
`
const FormContainer = styled.div`
  min-height: 100%;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  padding-top: 0;
  @media(min-width: 768px){
    padding-top: calc(86px + 27px);
  }
`
const Form = styled.form`
  min-height: 500px;
  width: 100%;
  opacity: 0;
  border-top: 1px solid rgba(0, 0, 0, .070);
  //border: .3px solid #cecece;
  transform: translateX(25vh);
  padding: 3rem 2rem;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12),
              0px 16px 16px rgba(0, 0, 0, .12),
              0px 32px 32px rgba(0, 0, 0, .12);              
`

export default ()=> {
  let wrapperRef = null;
  let titleRef = null;
  let slideBoxRef = useRef(null);

  const [data, setData] = useReducer((current, next) => ({ ...current, ...next }),{
    fullName: '',
    email: '' ,
    phone: '',
    adititional: '',
  })

  useEffect(()=>{
    const slideBox = document.querySelector(".slide-box");
    console.log("SLIDE BOX", slideBox.offsetHeight);
    ScrollTrigger.create({
      trigger: wrapperRef,
      start: "top 80%",
      end: "+=500",
      once: true,
      scrub: .6,
      onEnter: ()=> {
        const tl = gsap.timeline({ defaults: { duration: 1, ease: "back.out" } });
        tl.to(titleRef, { opacity: 1, y: 0 })
          .to(".investments-desc", { opacity: 1, y: 0 }, "-=.5")
          .to(".slide-box", { y: -slideBox.offsetHeight, opacity: 1, ease: "power1.out" })
          .to(".logo", { opacity: 0 }, "-=1")
          //.to(".inves-contact", { opacity: 1 }, "-=.5")
          .to(".inves-contact", { opacity: 1, x: 0, ease: "back.out(1)" }, "-=.5")
      }
    })
  },[])

  return(
    <MainCont className="investments-cont" ref={e => { wrapperRef = e }}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Title className="investments-title" ref={e => { titleRef = e }}>               
              Deja que te asesoren<br />un grupo de expertos.
            </Title>
            <Description className="investments-desc">
              El sector inmobiliario es un negocio más seguro y con mejor rentabilidad en comparación al financiero, que ofrece bajas tasas de rentabilidad. Con más de 25 años de experiencia, nuestro equipo trabaja con cada cliente para que obtenga el mejor de los beneficios posibles.
            </Description>
            <Hidden xs>
              <Image className="image" src="/inv-2.jpg">
                <SlideBox className="slide-box" ref={slideBoxRef}>
                  <Logo src="/logo.png" alt="logo" className="logo" />
                </SlideBox>
              </Image>
            </Hidden>
          </Col>
          <Col xs={12} md={6}>
            <FormContainer>
              <Form className="inves-contact">
                <Row>
                  <Col xs={12}>
                    <Input
                      placeholder="Nombre"
                      id="fullName"
                      vertical
                      primary
                      value={data.fullName}
                      onChange={e => setData({ [e.target.id]: e.target.value })}
                      gray
                    />
                  </Col>
                  <Col xs={12}>
                    <Input
                      placeholder="Teléfono"
                      id="phone"
                      vertical
                      primary
                      value={data.phone}
                      onChange={e => setData({ [e.target.id]: e.target.value })}
                      gray
                    />
                  </Col>
                  <Col xs={12}>
                    <Input
                      placeholder="Email"
                      id="email"
                      vertical
                      primary
                      value={data.email}
                      onChange={e => setData({ [e.target.id]: e.target.value })}
                      gray
                    />
                  </Col>
                  <Col xs={12}>
                    <Textarea
                      placeholder="Denos cualquier información adicional que pueda servir para asesorarlo"
                      id="aditional"
                      vertical
                      primary
                      rows={6}
                      value={data.adtitional}
                      onChange={e => setData({ [e.target.id]: e.target.value })}
                      gray
                    />
                  </Col>   
                  <Col xs={12} md={6}>

                  </Col>          
                  <Col xs={12} md={6}>
                    <br />
                    <Button block primary>Enviar</Button>
                  </Col>          
                  <Col xs={12} md={12}>
{/*                    <IconButton href={`https://api.whatsapp.com/send?phone=${user.phone ? user.phone.countryCode + user.phone.areaCode + user.phone.phoneNumber : user.mobile ? user.mobile.countryCode + user.mobile.areaCode + user.mobile.phoneNumber : ''}&text=${data.data}`} alt="send whatsapp data">
                      <span>¿Deseas contactarme por teléfono o enviarme un whatsapp?</span>
                      <PlusCircleOutlined style={{ marginRight: 8, fontSize: 26 }} />
  </IconButton>*/}
                  </Col>
                </Row>
              </Form>
            </FormContainer>
          </Col>          
        </Row>
      </Container>
    </MainCont>
  )
}