import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar({ darkMode, setDarkMode, sidebarOpen, setSidebarOpen }) {
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Wrapper 
        darkMode={darkMode} 
        style={
          y > 50 
            ? { 
                height: "70px", 
                boxShadow: darkMode ? "0px 10px 30px rgba(0, 0, 0, 0.6)" : "0px 10px 30px rgba(112, 0, 255, 0.1)",
                backdropFilter: "blur(12px)",
                background: darkMode ? "rgba(15, 12, 27, 0.88)" : "rgba(255, 255, 255, 0.9)"
              } 
            : { height: "90px" }
        }
      >
        <NavInner className="container flexSpaceCenter">
          <BrandLink className="pointer flexNullCenter" to="home" smooth={true} duration={500}>
            <LogoWrapper darkMode={darkMode}>
              <LogoIcon />
            </LogoWrapper>
            <BrandTextContainer className="flexCol">
              <LogoText darkMode={darkMode}>
                LVO <span className="highlight">Digital Labs</span>
              </LogoText>
              <SubBrandText darkMode={darkMode}>Leevy Otieno</SubBrandText>
            </BrandTextContainer>
          </BrandLink>

          <BurgerStyle className="pointer" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <BurgerIcon />
          </BurgerStyle>

          <UlWrapper className="flexNullCenter">
            <li>
              <StyledLink darkMode={darkMode} activeClass="active" to="home" spy={true} smooth={true} offset={-90} duration={500}>
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink darkMode={darkMode} activeClass="active" to="services" spy={true} smooth={true} offset={-90} duration={500}>
                Services
              </StyledLink>
            </li>
            <li>
              <StyledLink darkMode={darkMode} activeClass="active" to="projects" spy={true} smooth={true} offset={-90} duration={500}>
                Projects
              </StyledLink>
            </li>
            <li>
              <StyledLink darkMode={darkMode} activeClass="active" to="testimonials" spy={true} smooth={true} offset={-90} duration={500}>
                Testimonials
              </StyledLink>
            </li>
            <li>
              <StyledLink darkMode={darkMode} activeClass="active" to="blog" spy={true} smooth={true} offset={-90} duration={500}>
                Blog
              </StyledLink>
            </li>
            <li>
              <StyledLink darkMode={darkMode} activeClass="active" to="pricing" spy={true} smooth={true} offset={-90} duration={500}>
                Pricing
              </StyledLink>
            </li>
            <li>
              <StyledLink darkMode={darkMode} activeClass="active" to="contact" spy={true} smooth={true} offset={-90} duration={500}>
                Contact
              </StyledLink>
            </li>
          </UlWrapper>

          <UlWrapperRight className="flexNullCenter">
            <ThemeToggle 
              darkMode={darkMode} 
              className="pointer flexCenter" 
              onClick={() => setDarkMode(!darkMode)} 
              title="Toggle Theme"
            >
              {darkMode ? "☀️" : "🌙"}
            </ThemeToggle>
            
            <LoginItem className="semi-bold font15 pointer">
              <a href="/" style={{ color: darkMode ? "#E2E8F0" : "#1A1A2E" }}>
                Log in
              </a>
            </LoginItem>
            
            <ListItem className="semi-bold font15 pointer">
              <CtaLink to="contact" spy={true} smooth={true} offset={-90} duration={500} darkMode={darkMode}>
                Get Started
              </CtaLink>
            </ListItem>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

// Keyframes & Animations
const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(168, 85, 247, 0); }
  100% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0); }
`;

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  background-color: ${(props) => (props.darkMode ? "#0F0C1B" : "#FFFFFF")};
  border-bottom: ${(props) => (props.darkMode ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(0, 0, 0, 0.08)")};
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
  width: 100%;
  padding: 0 30px;
`;

const BrandLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoWrapper = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.darkMode ? "rgba(168, 85, 247, 0.15)" : "rgba(112, 0, 255, 0.1)")};
  border-radius: 12px;
  border: 1px solid ${(props) => (props.darkMode ? "rgba(168, 85, 247, 0.3)" : "rgba(112, 0, 255, 0.2)")};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(5deg);
  }
`;

const BrandTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoText = styled.h2`
  font-size: 18px;
  font-weight: 800;
  color: ${(props) => (props.darkMode ? "#FFFFFF" : "#1A1A2E")};
  margin: 0;
  letter-spacing: -0.5px;

  .highlight {
    background: linear-gradient(135deg, #A855F7 0%, #EC4899 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SubBrandText = styled.span`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => (props.darkMode ? "#A855F7" : "#7000FF")};
  margin-top: -2px;
`;

const UlWrapper = styled.ul`
  display: flex;
  list-style: none;
  gap: 8px;
  @media (max-width: 960px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  padding: 8px 16px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  border-radius: 20px;
  color: ${(props) => (props.darkMode ? "#C7C4E2" : "#4B4B4B")};
  transition: all 0.25s ease;

  &:hover {
    color: ${(props) => (props.darkMode ? "#FFFFFF" : "#7000FF")};
    background: ${(props) => (props.darkMode ? "rgba(168, 85, 247, 0.1)" : "rgba(112, 0, 255, 0.05)")};
  }

  &.active {
    color: ${(props) => (props.darkMode ? "#C084FC" : "#7000FF")};
    background: ${(props) => (props.darkMode ? "rgba(168, 85, 247, 0.18)" : "rgba(112, 0, 255, 0.1)")};
    font-weight: 700;
  }
`;

const UlWrapperRight = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 15px;
  @media (max-width: 960px) {
    display: none;
  }
`;

const ThemeToggle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) => (props.darkMode ? "rgba(168, 85, 247, 0.15)" : "rgba(112, 0, 255, 0.1)")};
  border: 1px solid ${(props) => (props.darkMode ? "rgba(168, 85, 247, 0.3)" : "rgba(112, 0, 255, 0.2)")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    animation: ${pulseGlow} 1.5s infinite;
  }
`;

const LoginItem = styled.li`
  a {
    padding: 8px 16px;
    font-weight: 600;
    transition: opacity 0.2s ease;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const ListItem = styled.li`
  margin-left: 5px;
`;

const CtaLink = styled(Link)`
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  display: inline-block;
  background: ${(props) => (props.darkMode ? "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)" : "linear-gradient(135deg, #7000ff 0%, #a855f7 100%)")};
  color: #FFFFFF !important;
  box-shadow: ${(props) => (props.darkMode ? "0 4px 15px rgba(168, 85, 247, 0.4)" : "0 4px 15px rgba(112, 0, 255, 0.3)")};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => (props.darkMode ? "0 6px 20px rgba(168, 85, 247, 0.6)" : "0 6px 20px rgba(112, 0, 255, 0.5)")};
  }
`;

const BurgerStyle = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`;