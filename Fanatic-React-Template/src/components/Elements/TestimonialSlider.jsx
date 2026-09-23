import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider({ darkMode }) {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      text: "Leefy built and integrated our full-stack web solutions with incredible precision. The React frontend combined with our Python Flask backend runs seamlessly.",
      author: "Project Stakeholder",
    },
    {
      text: "Exceptional attention to detail in UI/UX architecture and responsive design. The custom Tailwind components and smooth dark mode implementation exceeded expectations.",
      author: "Tech Lead",
    },
    {
      text: "Delivered robust e-commerce solutions with WordPress and WooCommerce, complete with secure payment gateway integrations. Outstanding development standard.",
      author: "E-Commerce Client",
    },
    {
      text: "Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "An innovative developer with a sharp eye for clean code, recursive problem-solving, and efficient component structure across React applications.",
      author: "Collaborator",
    },
    {
      text: "Always professional, detail-oriented, and capable of executing complex web architectures from concept to production-ready deployment on Vercel.",
      author: "Client Partner",
    },
  ];

  return (
    <SliderContainer>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <SlideWrapper key={index}>
            <TestimonialBox
              text={item.text}
              author={item.author}
              darkMode={darkMode}
            />
          </SlideWrapper>
        ))}
      </Slider>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  width: 100%;
  padding: 20px 0;

  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
`;

const SlideWrapper = styled.div`
  outline: none;
  &:focus-visible {
    outline: none;
    border: 0px;
  }
`;