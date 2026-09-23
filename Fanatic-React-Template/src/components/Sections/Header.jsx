import React from "react";
import styled, { keyframes } from "styled-components";
// Assets & Icons
import QuotesIcon from "../../assets/svg/Quotes";
import FullButton from "../Buttons/FullButton";

export default function Header({ darkMode }) {
  return (
    <Wrapper darkMode={darkMode} id="home">
      {/* Animated Background Layer */}
      <BackgroundLayer darkMode={darkMode}>
        {darkMode ? <DarkGlowAnimation /> : <LightWaveAnimation />}
      </BackgroundLayer>

      <Container className="container flexSpaceCenter">
        <LeftSide className="flexCol">
          <TagWrapper className="flexNullCenter">
            <Badge darkMode={darkMode}>
              {darkMode ? "⚙️ Advanced Back-End Engineering" : "✨ Next-Gen Web Development & UI"}
            </Badge>
          </TagWrapper>
          
          <Title darkMode={darkMode}>
            Building {darkMode ? "Robust Systems" : "Digital Excellence"} in <span className="highlight">Midnight Purple</span>.
          </Title>
          
          <SubText darkMode={darkMode}>
            {darkMode 
              ? "We architect scalable, secure server-side solutions and high-performance APIs that power the modern web. Connect with us to build your scalable foundation."
              : "We craft high-performance full-stack web applications, modern React interfaces, and responsive UIs engineered for speed, scale, and stunning aesthetic appeal."
            }
          </SubText>
          
          <BtnWrapper darkMode={darkMode}>
            <FullButton 
              title={darkMode ? "Let's Build Your Backend" : "Start Your Project"} 
              border={true} 
            />
          </BtnWrapper>
        </LeftSide>
        
        <RightSide className="flexCenter">
          <ImageContainer>
            {/* Directly Connected, High-Res Hero Image URL */}
            <StyledImage 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop" 
              alt="Developer Workspace" 
              darkMode={darkMode}
            />
            
            <QuoteWrapper darkMode={darkMode}>
              <QuotesIcon />
              <QuoteText darkMode={darkMode}>
                {darkMode 
                  ? "\"Security and reliability are non-negotiable. We deliver resilient infrastructure.\""
                  : "\"Simplicity is prerequisite for reliability. Great code is clean, modular, and built to scale.\""
                }
              </QuoteText>
              <QuoteAuthor>Leefy Brighton, Lead Architect</QuoteAuthor>
            </QuoteWrapper>
          </ImageContainer>
        </RightSide>
      </Container>
    </Wrapper>
  );
}

// Keyframe Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

const pulseGlow = keyframes`
  0% {
    transform: scale(1) translate(0px, 0px) rotate(0deg);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.25) translate(40px, -30px) rotate(180deg);
    opacity: 0.9;
  }
  100% {
    transform: scale(1) translate(0px, 0px) rotate(360deg);
    opacity: 0.6;
  }
`;

const waveDrift = keyframes`
  0% {
    transform: translate(0px, 0px) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(-40px, 30px) scale(1.15);
    opacity: 0.8;
  }
  100% {
    transform: translate(0px, 0px) scale(1);
    opacity: 0.5;
  }
`;

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  padding: 190px 0 130px 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => (props.darkMode ? "rgba(11, 9, 20, 0.88)" : "rgba(248, 249, 253, 0.90)")};
    transition: background-color 0.4s ease;
    z-index: 2;
  }
`;

const DarkGlowAnimation = styled.div`
  position: absolute;
  top: -30%;
  left: -30%;
  width: 160%;
  height: 160%;
  background: radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.45), transparent 45%),
              radial-gradient(circle at 70% 70%, rgba(236, 72, 153, 0.35), transparent 45%),
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3), transparent 50%);
  animation: ${pulseGlow} 10s ease-in-out infinite;
  z-index: 3;
  pointer-events: none;
`;

const LightWaveAnimation = styled.div`
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: radial-gradient(circle at 30% 30%, rgba(112, 0, 255, 0.2), transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(236, 72, 153, 0.15), transparent 50%),
              radial-gradient(circle at 50% 20%, rgba(14, 165, 233, 0.15), transparent 40%);
  animation: ${waveDrift} 10s ease-in-out infinite;
  z-index: 3;
  pointer-events: none;
`;

const Container = styled.div`
  position: relative;
  z-index: 10;
  animation: ${fadeIn} 0.8s ease-out forwards;
  
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 52%;
  padding-right: 30px;
  
  @media (max-width: 960px) {
    width: 100%;
    padding-right: 0;
    margin-bottom: 60px;
  }
`;

const TagWrapper = styled.div`
  margin-bottom: 20px;
`;

const Badge = styled.span`
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  background: ${(props) => (props.darkMode ? "rgba(168, 85, 247, 0.2)" : "rgba(112, 0, 255, 0.1)")};
  color: ${(props) => (props.darkMode ? "#C084FC" : "#7000FF")};
  padding: 8px 20px;
  border-radius: 40px;
  border: 1px solid ${(props) => (props.darkMode ? "rgba(168, 85, 247, 0.4)" : "rgba(112, 0, 255, 0.2)")};
  box-shadow: 0 4px 20px ${(props) => (props.darkMode ? "rgba(168, 85, 247, 0.15)" : "rgba(112, 0, 255, 0.08)")};
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;

  &:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 6px 25px ${(props) => (props.darkMode ? "rgba(168, 85, 247, 0.3)" : "rgba(112, 0, 255, 0.2)")};
  }
`;

const Title = styled.h1`
  font-size: 52px;
  line-height: 1.2;
  font-weight: 800;
  margin-bottom: 25px;
  color: ${(props) => (props.darkMode ? "#FFFFFF" : "#1A1A2E")};

  .highlight {
    background: linear-gradient(135deg, #A855F7 0%, #EC4899 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 960px) {
    font-size: 40px;
  }
`;

const SubText = styled.p`
  font-size: 19px;
  line-height: 1.7;
  margin-bottom: 40px;
  color: ${(props) => (props.darkMode ? "#C7C4E2" : "#4B4B4B")};
  max-width: 600px;
`;

const BtnWrapper = styled.div`
  width: 100%;
  max-width: 260px;
  font-weight: 700;
  letter-spacing: 0.3px;
  transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  border-radius: 8px;

  /* Target FullButton text elements directly inside wrapper to guarantee visibility */
  button, span, a {
    color: ${(props) => (props.darkMode ? "#FFFFFF !important" : "#1A1A2E !important")};
    font-weight: 700 !important;
  }

  background: ${(props) => (props.darkMode ? "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)" : "linear-gradient(135deg, #7000ff 0%, #a855f7 100%)")};
  padding: 2px; /* Creates clean gradient border frame */
  box-shadow: ${(props) => (props.darkMode ? "0 8px 25px rgba(168, 85, 247, 0.4)" : "0 8px 25px rgba(112, 0, 255, 0.25)")};

  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: ${(props) => (props.darkMode ? "0 12px 35px rgba(168, 85, 247, 0.6)" : "0 12px 35px rgba(112, 0, 255, 0.4)")};
  }
`;

const RightSide = styled.div`
  width: 48%;
  display: flex;
  justify-content: center;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  max-width: 520px;
  width: 100%;
  animation: ${float} 6s ease-in-out infinite;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 380px;
  border-radius: 18px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  object-fit: cover;
  border: 2px solid ${(props) => (props.darkMode ? "rgba(168, 85, 247, 0.3)" : "rgba(112, 0, 255, 0.2)")};
`;

const QuoteWrapper = styled.div`
  position: absolute;
  bottom: -40px;
  left: -45px;
  max-width: 310px;
  padding: 22px;
  border-radius: 14px;
  background: ${(props) => (props.darkMode ? "#18142D" : "#FFFFFF")};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid ${(props) => (props.darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)")};
  z-index: 10;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 480px) {
    left: 10px;
    bottom: -30px;
  }
`;

const QuoteText = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin: 8px 0;
  line-height: 1.5;
  color: ${(props) => (props.darkMode ? "#E2E8F0" : "#2D3748")};
`;

const QuoteAuthor = styled.span`
  font-size: 10px;
  font-weight: 800;
  color: #A855F7;
  display: block;
  text-align: right;
`;