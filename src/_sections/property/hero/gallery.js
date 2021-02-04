import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styled from 'styled-components';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Image = styled.div`
  width: 100%;
  padding-top: 75%;
  position: relative;
  background-image: url("${props => props.src}");
  background-color: #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  ::before{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    backdrop-filter: blur(6px);
  }
  ::after{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    background-image: url("${props => props.src}");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }  
`

export default ({ images })=> {
  console.log(images);
  const gallery = images.map(item => ({
    original: item.url,
    thumbnail: item.url,
    renderItem: ({ original }) => <Image src={original} />,
  }));
  return(
    <ImageGallery
      items={gallery}
      showPlayButton={false}
    />
  )
}