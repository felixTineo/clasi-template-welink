import React, { useEffect, useRef, useReducer, useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Input, Select } from '../../_components/inputs';
import { Button } from '../../_components/buttons';
import { FormatCurrency } from '../../_util';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'gatsby';

gsap.registerPlugin(ScrollTrigger);

const MainCont = styled.div`
  padding: 4rem 0;
`
const Title = styled.h2`
  color: ${props => props.theme.main.primaryColor};
  opacity: 0;
  transform: translateY(25px);
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
const FlipCont = styled.div`
  background-color: transparent;
  perspective: 2000px; /* Remove this if you don't want the 3D effect */
`
const FlipContInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`
const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`
const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  transform: rotateY(180deg);
`
const Form = styled.form`
  min-height: 500px;
  width: 100%;
  opacity: 0;
  border-top: 1px solid rgba(0, 0, 0, .070);
  //border: .3px solid #cecece;
  transform: translateX(25vh);
  //background-color: red;
  padding: 2rem 2rem;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12),
              0px 16px 16px rgba(0, 0, 0, .12),
              0px 32px 32px rgba(0, 0, 0, .12);              
`
const Result = styled.div`
  border-top: 1px solid rgba(0, 0, 0, .070);
  background-color: #fff;
  min-height: 563px;
  width: 100%;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
            0px 2px 2px rgba(0, 0, 0, .12),
            0px 4px 4px rgba(0, 0, 0, .12),
            0px 8px 8px rgba(0, 0, 0, .12),
            0px 16px 16px rgba(0, 0, 0, .12),
            0px 32px 32px rgba(0, 0, 0, .12);   
`
const ResultBody = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
`
const BackButton = styled.button`
  border: 5px solid ${props => props.theme.main.primaryColor};
  color: ${props => props.theme.main.primaryColor};
  width: 60px;
  height: 60px;
  padding: 0 !important;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: 2rem;
  z-index: 500;
  outline: none !important;
  transition: 250ms ease;
  &:hover{
    background-color: ${props => props.theme.main.primaryColor};
    color: #fff;
  }
`
const ResultInfo = styled.div`
  p{
    font-size: 1.5rem;
    color: ${props => props.theme.main.primaryColor};
  }
  h4{
    font-size: 2.5rem;
    margin: 0;
  }
  h3{
    margin: 0;
    font-size: 2rem;
  }
`
const ResultFooter = styled.footer`

`

const FormTitle = styled.p`
  font-size: 1.5rem;
  color: ${props => props.theme.main.primaryColor};
  margin-bottom: 3rem;
`

const Alert = styled.span`
  font-size: .8rem;
  color: #DE0729;
  position: absolute;
  top: 84px;
  left: 8px;
`
const Label = styled.p`
  color: ${props => props.theme.main.primaryColor};
  margin-top: 0;
`

export default ()=> {
  let wrapperRef = null;
  let titleRef = null;
  let slideBoxRef = useRef(null);

  const [result, setResult] = useState(null);

  const [data, setData] = useReducer((current, next) => ({ ...current, ...next }),{
    value: '',
    financing: '' ,
    interest: '2.5',
    place: '5',
  });

  const [alert, setAlert] = useReducer((current, next) => ({ ...current, ...next }),{
    value: false,
    financing: false ,
    financingValue: false,
    interest: false,
    place: false,
  });

  const handleAlert = (data)=> {
    
    const valorFinanciar = parseFloat(data.value)
    const capital = parseFloat(data.financing)

    for(let key in data){
      if(!data[key]){
        setAlert({ [key]: true });
        return true;
      } else if(key === "financing" && data[key] && (!(valorFinanciar * 0.1 < capital) && capital < valorFinanciar * 0.9) || valorFinanciar < capital){
        setAlert({ financingValue: true });
        return true;
      }
    }
  }

  const handleFocus = e => {
    if(e.target.id === "financing"){
      return setAlert({ [e.target.id]: false, financingValue: false });
    }
    setAlert({ [e.target.id]: false });
  }

  const onSubmit = e => {
    e.preventDefault();
    const validation = handleAlert(data);
    console.log("VALIDAION", validation);
    if(!validation){
      
      let interesMensual = parseFloat(data.interest);
      const valorFinanciar = parseFloat(data.value);
      const capital = parseFloat(data.financing);

      const pieAprox = valorFinanciar - capital
      const tiempo = data.place * 12
      interesMensual = interesMensual / 12 / 100
      const resultado =
        capital *
        (((1 + interesMensual) ** tiempo * interesMensual) /
          ((1 + interesMensual) ** tiempo - 1))
      setResult({
        dividendo: Math.round(resultado * 100) / 100,
        pie: Math.round(pieAprox * 100) / 100,
      });

      gsap.to(".result", {
        duration: .25,
        rotationY:-180,
        ease: "none"
      })
    }

  }

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
              Estamos comprometidos con ser,<br />
              tu mejor opción.
            </Title>
            <Description className="investments-desc">
              Realizamos una alianza estratégica con MetLife para lograr una gestión eficiente de los créditos hipotecarios, evitando el registro en la Banca con deuda financiera.
            </Description>
            <Hidden xs>
              <Image className="image" src="/financing.jpg">
                <SlideBox className="slide-box" ref={slideBoxRef}>
                  <Logo src="/logo.png" alt="logo" className="logo" />
                </SlideBox>
              </Image>
            </Hidden>
          </Col>
          <Col xs={12} md={6}>
            <FormContainer>
              <FlipCont>
              <FlipContInner className="result">
              <FlipCardFront>
              <Form className="inves-contact" onSubmit={onSubmit}>
                <Row gutterWidth={16}>
                  <Col xs={12}>
                    <FormTitle>
                      Calcule su crédito
                    </FormTitle>
                  </Col>
                  <Col xs={12}>
                    <Label>Valor de propiedad en UF</Label>
                    <Input
                      placeholder="Ej: 1000000"
                      id="value"
                      type="number"
                      vertical
                      primary
                      value={data.value}
                      onChange={e => setData({ [e.target.id]: e.target.value })}
                      onFocus={handleFocus}
                      gray
                    />
                    { alert.value && <Alert>Ingrese el valor de la propiedad</Alert> }
                  </Col>
                  <Col xs={12} >
                    <Label>Monto a financiar en UF</Label>
                    <Input
                      placeholder="Ej: 101000"
                      id="financing"
                      type="number"
                      vertical
                      primary
                      value={data.financing}
                      onChange={e => setData({ [e.target.id]: e.target.value })}
                      onFocus={handleFocus}
                      gray
                    />
                    { alert.financing && <Alert>Ingrese el valor a financiar</Alert> }
                    { alert.financingValue && <Alert>El monto debe estar entre el 10% y el 100% del valor de la propiedad</Alert> }
                  </Col>
                  <Col xs={12} md={8}>
                    <Label>Tasa de Interés</Label>
                    <Input
                      placeholder=""
                      id="interest"
                      type="number"
                      //min="2.5"
                      vertical
                      primary
                      value={data.interest}
                      onChange={e => setData({ [e.target.id]: parseFloat(e.target.value) >= 2.5 ? e.target.value : 2.5 })}
                      onFocus={handleFocus}
                      gray
                    />
                    { alert.interest && <Alert>error interes vacio</Alert> }
                  </Col>
                  <Col xs={12} md={4}>
                    <Label>Plazo</Label>
                    <Select
                      id="place"
                      onChange={e => setData({ [e.target.id]: e.target.value })}
                      value={data.place}
                      options={["5", "8", "12", "15", "20", "25", "30", "35", "40"]}
                      capitalize
                      noAll
                      primary
                    />                    
                    { alert.place && <Alert>error plazo vacio</Alert> }
                  </Col>   
                  <Col xs={12} md={6}>

                  </Col>          
                  <Col xs={12} md={6}>
                    <br />
                    <Button type="submit" block primary>Calcular</Button>
                  </Col>          
                </Row>
              </Form>
              </FlipCardFront>           
              <FlipCardBack>
                {
                  result && (
                    <Result>
                      <BackButton onClick={()=> {
                              gsap.to(".result", {
                                duration: .25,
                                rotationY:-360,
                                ease: "none"
                              })
                      }}>
                        <ArrowLeftOutlined />
                      </BackButton>
                      <ResultBody>
                        <ResultInfo>
                          <p>Pie aproximado</p>
                          <h4>UF {FormatCurrency("UF", result.pie)}</h4>
                        </ResultInfo>
                        <ResultInfo>
                          <p>Dividendo aproximado</p>
                          <h3>UF {result.dividendo}</h3>
                        </ResultInfo>
                      </ResultBody>
                      <ResultFooter>
                        <Link to="/contact" style={{ textDecoration: "none" }}>
                          <Button primary>Contáctanos</Button>
                        </Link>
                      </ResultFooter>
                    </Result>
                  )
                }
              </FlipCardBack>
              </FlipContInner>
              </FlipCont>
            </FormContainer>
          </Col>          
        </Row>
      </Container>
    </MainCont>
  )
}