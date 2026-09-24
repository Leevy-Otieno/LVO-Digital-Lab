import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Services({ darkMode }) {
  return (
    <Wrapper id="services" $darkMode={darkMode}>
      <ClientsSection $darkMode={darkMode}>
        <div className="container">
          <ClientSlider darkMode={darkMode} />
        </div>
      </ClientsSection>
      
      <ServicesSection $darkMode={darkMode}>
        <div className="container">
          <HeaderInfo $darkMode={darkMode}>
            <h1 className="font40 extraBold">Our Core Services</h1>
            <p className="font13">
              We deliver cutting-edge digital solutions tailored to elevate your brand, optimize performance,
              <br />
              and drive business growth through modern web technologies.
            </p>
          </HeaderInfo>
          
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Frontend & UI/UX"
                subtitle="Crafting responsive, high-performance interfaces using React, Vite, and Tailwind CSS with smooth animations and dark mode support."
                darkMode={darkMode}
              />
            </ServiceBoxWrapper>
            
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Full-Stack Web Apps"
                subtitle="Building robust, scalable applications combining React frontends with Python, Flask, and secure RESTful backend APIs."
                darkMode={darkMode}
              />
            </ServiceBoxWrapper>
            
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="E-Commerce Solutions"
                subtitle="Developing customized online stores via WordPress, WooCommerce, and custom React checkouts integrated with secure payment gateways."
                darkMode={darkMode}
              />
            </ServiceBoxWrapper>
            
            <ServiceBoxWrapper>
              <ServiceBox
                icon="printer"
                title="API & Integrations"
                subtitle="Connecting third-party services, messaging platforms like WhatsApp, email notifications via EmailJS, and secure payment integrations."
                darkMode={darkMode}
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        
        <AdvertisingSection $darkMode={darkMode}>
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft $darkMode={darkMode}>
                <h4 className="font15 semiBold" style={{ color: "#a855f7" }}>Technical Expertise</h4>
                <h2 className="font40 extraBold">Engineered for Peak Performance</h2>
                <p className="font12">
                  Every project follows rigorous development standards—from clean architectural patterns and modular component design to optimized production builds deployed seamlessly on Vercel and cloud servers.
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Get Started" action={() => alert("Get Started clicked")} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("Contact Us clicked")} border />
                  </div>
                </ButtonsRow>
              </AddLeft>
              
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="workspace" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="workspace" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="workspace" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="workspace" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </AdvertisingSection>
      </ServicesSection>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const ClientsSection = styled.div`
  background-color: ${(props) => (props.$darkMode ? "#0a0614" : "#f1f5f9")};
  padding: 50px 0;
  transition: background-color 0.3s ease;
  border-bottom: 1px solid ${(props) => (props.$darkMode ? "rgba(139, 92, 246, 0.15)" : "#e2e8f0")};
`;

const ServicesSection = styled.div`
  background-color: ${(props) => (props.$darkMode ? "#0f0a1e" : "#ffffff")};
  padding: 80px 0 0 0;
  transition: background-color 0.3s ease;
`;

const AdvertisingSection = styled.div`
  background-color: ${(props) => (props.$darkMode ? "#140d2b" : "#f8fafc")};
  margin-top: 80px;
  border-top: 1px solid ${(props) => (props.$darkMode ? "rgba(139, 92, 246, 0.15)" : "#e2e8f0")};
  transition: background-color 0.3s ease;
`;

const ServiceBoxRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const ServiceBoxWrapper = styled.div`
  width: 23%;
  padding: 40px 0;

  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 20px 0;
  }
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    color: ${(props) => (props.$darkMode ? "#ffffff" : "#0f172a")};
    margin-bottom: 15px;
  }

  p {
    color: ${(props) => (props.$darkMode ? "#94a3b8" : "#64748b")};
    line-height: 1.6;
  }
`;

const Advertising = styled.div`
  padding: 80px 0;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 1160px) {
    padding: 60px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 40px 0;
    text-align: center;
  }
`;

const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: center;
  }
`;

const AddLeft = styled.div`
  width: 50%;
  
  h2 {
    color: ${(props) => (props.$darkMode ? "#ffffff" : "#0f172a")};
    margin: 15px 0;
  }

  p {
    max-width: 475px;
    color: ${(props) => (props.$darkMode ? "#94a3b8" : "#475569")};
    line-height: 1.6;
  }

  @media (max-width: 860px) {
    width: 100%;
    order: 2;
    margin-top: 30px;

    p {
      margin: 0 auto;
    }
  }
`;

const AddRight = styled.div`
  width: 50%;
  position: relative;

  @media (max-width: 860px) {
    width: 100%;
    order: 1;
  }
`;

const AddRightInner = styled.div`
  width: 100%;
`;

const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(139, 92, 246, 0.2);
  }
`;

const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(139, 92, 246, 0.2);
  }
`;

const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(139, 92, 246, 0.2);
  }
`;

const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5% auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(139, 92, 246, 0.2);
  }
`;