import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage2 from "../../assets/img/add/add2.png";

export default function Projects({ darkMode }) {
  return (
    <Wrapper id="projects" $darkMode={darkMode}>
      <MainSection $darkMode={darkMode}>
        <div className="container">
          <HeaderInfo $darkMode={darkMode}>
            <h1 className="font40 extraBold">Featured Projects</h1>
            <p className="font13">
              Explore a curated selection of full-stack web applications, e-commerce platforms,
              <br />
              and custom interactive UI interfaces built with modern technologies.
            </p>
          </HeaderInfo>

          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" style={{ marginBottom: "30px" }}>
              <ProjectBox
                img={ProjectImg1}
                title="JoycePerfumier E-Commerce"
                text="A custom React and Node.js e-commerce application featuring product catalogs and streamlined checkout."
                action={() => alert("View JoycePerfumier details")}
                darkMode={darkMode}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" style={{ marginBottom: "30px" }}>
              <ProjectBox
                img={ProjectImg2}
                title="MD Fitness Store"
                text="Full-featured WordPress & WooCommerce e-commerce site integrated with Visa payment gateways."
                action={() => alert("View MD Fitness details")}
                darkMode={darkMode}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" style={{ marginBottom: "30px" }}>
              <ProjectBox
                img={ProjectImg3}
                title="PostNexus Workspace"
                text="A productivity platform combining Notion-style project planning with real-time messaging integrations."
                action={() => alert("View PostNexus details")}
                darkMode={darkMode}
              />
            </div>
          </div>

          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" style={{ marginBottom: "30px" }}>
              <ProjectBox
                img={ProjectImg4}
                title="Map My Home Real Estate"
                text="An interactive map-integrated property search platform with responsive UI components."
                action={() => alert("View Map My Home details")}
                darkMode={darkMode}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" style={{ marginBottom: "30px" }}>
              <ProjectBox
                img={ProjectImg5}
                title="CivicRise React Replication"
                text="A modern Framer template replicated in React with smooth routing and glassmorphism styling."
                action={() => alert("View CivicRise details")}
                darkMode={darkMode}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" style={{ marginBottom: "30px" }}>
              <ProjectBox
                img={ProjectImg6}
                title="Developer Portfolio & EmailJS"
                text="A personal portfolio deployed on Vercel featuring custom contact forms and notification triggers."
                action={() => alert("View Portfolio details")}
                darkMode={darkMode}
              />
            </div>
          </div>

          <div className="row flexCenter">
            <div style={{ margin: "30px 0 50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("Loading more projects...")} />
            </div>
          </div>
        </div>
      </MainSection>

      <AdvertisingSection $darkMode={darkMode}>
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddRight>
              <h4 className="font15 semiBold" style={{ color: "#a855f7" }}>Engineering Philosophy</h4>
              <h2 className="font40 extraBold" style={{ color: darkMode ? "#ffffff" : "#0f172a" }}>Crafting Scalable Digital Experiences</h2>
              <p className="font12" style={{ color: darkMode ? "#94a3b8" : "#475569", lineHeight: "1.6" }}>
                Every application is engineered with clean code architecture, optimal state management, and responsive layouts. From high-converting e-commerce checkouts to robust backend APIs, precision and performance drive every build.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="Get Started" action={() => alert("Get Started clicked")} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Contact Us" action={() => alert("Contact Us clicked")} border />
                </div>
              </ButtonsRow>
            </AddRight>
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8 glow-add-img" src={AddImage2} alt="developer workspace" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
          </Advertising>
        </div>
      </AdvertisingSection>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const MainSection = styled.div`
  background-color: ${(props) => (props.$darkMode ? "#0f0a1e" : "#ffffff")};
  padding: 80px 0 40px 0;
  transition: background-color 0.3s ease;
`;

const AdvertisingSection = styled.div`
  background-color: ${(props) => (props.$darkMode ? "#140d2b" : "#f8fafc")};
  transition: background-color 0.3s ease;
`;

const HeaderInfo = styled.div`
  margin-bottom: 50px;
  text-align: center;

  h1 {
    color: ${(props) => (props.$darkMode ? "#ffffff" : "#0f172a")};
    margin-bottom: 15px;
  }

  p {
    color: ${(props) => (props.$darkMode ? "#94a3b8" : "#64748b")};
    line-height: 1.6;
  }

  @media (max-width: 860px) {
    text-align: center;
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

const AddRight = styled.div`
  width: 50%;
  
  p {
    max-width: 475px;
  }

  @media (max-width: 860px) {
    width: 100%;
    order: 1;
    margin-bottom: 40px;
    
    p {
      margin: 0 auto;
    }
  }
`;

const AddLeft = styled.div`
  position: relative;
  width: 50%;

  @media (max-width: 860px) {
    width: 100%;
    order: 2;
  }
`;

const AddLeftInner = styled.div`
  width: 100%;
  position: relative;
`;

const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 10px;

  img {
    width: 100%;
    height: auto;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(139, 92, 246, 0.2);
  }

  @media (max-width: 400px) {
    padding: 0;
  }
`;