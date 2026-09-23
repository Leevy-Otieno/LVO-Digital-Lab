import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import ClientLogo01 from "../../assets/img/clients/logo01.svg";
import ClientLogo02 from "../../assets/img/clients/logo02.svg";
import ClientLogo03 from "../../assets/img/clients/logo03.svg";
import ClientLogo04 from "../../assets/img/clients/logo04.svg";
import ClientLogo05 from "../../assets/img/clients/logo05.svg";
import ClientLogo06 from "../../assets/img/clients/logo06.svg";

export default function ClientSlider({ darkMode }) {
  const settings = {
    infinite: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const logos = [
    ClientLogo01,
    ClientLogo02,
    ClientLogo03,
    ClientLogo04,
    ClientLogo05,
    ClientLogo06,
    ClientLogo03,
    ClientLogo04,
    ClientLogo01,
    ClientLogo02,
  ];

  return (
    <SliderWrapper $darkMode={darkMode}>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <LogoWrapper key={index} className="flexCenter">
            <ImgStyle src={logo} alt="client logo" $darkMode={darkMode} />
          </LogoWrapper>
        ))}
      </Slider>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  overflow: hidden;
  .slick-track {
    display: flex;
    align-items: center;
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 90px;
  cursor: pointer;
  padding: 0 15px;

  &:focus-visible {
    outline: none;
    border: 0px;
  }
`;

const ImgStyle = styled.img`
  max-width: 120px;
  max-height: 50px;
  width: auto;
  height: auto;
  object-fit: contain;
  opacity: ${(props) => (props.$darkMode ? "0.5" : "0.6")};
  filter: ${(props) => (props.$darkMode ? "brightness(0.8) invert(1)" : "grayscale(100%)")};
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    filter: ${(props) => (props.$darkMode ? "brightness(1) invert(1)" : "grayscale(0%)")};
    transform: scale(1.05);
  }
`;