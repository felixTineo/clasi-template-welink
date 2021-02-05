import React from 'react';
import styled from 'styled-components';
import { v1 as uuid } from 'uuid';
import { Container, Visible, Hidden } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

const data = [
  {
    id: uuid(),
    icon: "/calculator.svg",
    title: "Pago de cuentas",
    description: "Nos encargamos de que los servicios y gastos comunes estén al día."
  },
  {
    id: uuid(),
    icon: "/money-bill-alt.svg",
    title: "Cobranza",
    description: "Realizamos la recaudación de sus arriendos, transfiriéndola inmediatamente a su cuenta."
  },
  {
    id: uuid(),
    icon: "/wrench.svg",
    title: "Reparaciones",
    description: "Gestionamos el arreglo ante imprevistos."
  },
  {
    id: uuid(),
    icon: "/check-square.svg",
    title: "Entrega",
    description: "Nos hacemos cargo de la limpieza y pintura de su inmueble cuando el inquilino deja la propiedad, asegurándoles un perfecto estado del inmueble."
  },
  {
    id: uuid(),
    icon: "/users.svg",
    title: "Arrendatarios",
    description: "Gestionamos garantizando tu tranquilidad. Cuidamos tus ganancias, en caso de que un arrendatario entregue el inmueble antes de la fecha consensuada, nosotros nos encargamos de encontrar los próximos candidatos para que no pierdas el arriendo."
  },        
]

const MainSection = styled.section`
  display: flex;
  //min-height: 100vh;
  //align-items: center;
  //padding-bottom: 6rem;
  padding-top: 3rem;
`

const Title = styled.h2`
  //color: ${props => props.theme.main.primaryColor};
  color: #fff;
  padding: 1rem 0;
  width: 100%;
  text-align: center;
  background-color: ${props => props.theme.main.primaryColor};
`

const Card = styled.div`
  flex: 1;
  display: flex;
  min-height: 328px; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: .5px solid rgba(0, 0, 0, .1);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12);
  padding: 2rem 1rem;
  font-size: 14px;
  border-radius: 1px;
  margin: 0 1rem;
  @media(min-width: 768px){
    margin-left: ${props => props.first ? "0" : "1.5rem"};
    margin-right: 0;
  }
`
const CardIcon = styled.img`
  width: 60px;
  height: 60px;
`
const CardTitle = styled.p`
  margin: 1.5rem;
  font-weight: 600;
  font-size: 1.8rem;
  @media(min-width: 768px){
    font-size: inherit;
    margin: .5rem;
  }
`
const CardDescription = styled.p`
  margin: 0;
  text-align: center;
  @media(min-width: 768px){
    flex: 1;
    flex-shrink: 0;
  }
`

const Service = ({ icon, title, description, first }) => (
  <Card first={first}>
    <CardIcon src={icon} alt={title} />
    <CardTitle>
      {title}
    </CardTitle>
    <CardDescription>
      {description}
    </CardDescription>
  </Card>
);

export default ()=> {

  return(
    <Container>
      <Title>Aministración de Propiedades</Title>
      <Hidden xs>
        <MainSection>
          {
            data.map((item, index) => <Service first={index === 0 ? true : false}  key={item.id} {...item} />)
          }
        </MainSection>
      </Hidden>
      <Visible xs>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={88}
          //isIntrinsicHeight={true}
          totalSlides={data.length}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              data.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Service first={index === 0 ? true : false}  key={item.id} {...item} />
                </Slide>
              ))
            }
          </Slider>
          <ButtonBack className="carousel-back-button carousel-service-back-button">
            <LeftCircleOutlined style={{ color: "#1a1f63", fontSize: 26 }} />
          </ButtonBack>
          <ButtonNext className="carousel-next-button carousel-service-next-button">
            <RightCircleOutlined style={{ color: "#1a1f63", fontSize: 26 }} />
          </ButtonNext>
        </CarouselProvider>        
      </Visible>      
    </Container>
  )
}