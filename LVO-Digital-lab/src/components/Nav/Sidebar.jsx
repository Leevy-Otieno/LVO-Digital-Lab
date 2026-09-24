import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { NavLink } from "react-router-dom";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar, setSidebarOpen, darkMode, setDarkMode }) {
  
  // Safe handler that works whether the parent passes toggleSidebar, setSidebarOpen, or nothing
  const handleToggle = (openState) => {
    if (typeof toggleSidebar === "function") {
      toggleSidebar(openState);
    } else if (typeof setSidebarOpen === "function") {
      setSidebarOpen(openState);
    }
  };

  return (
    <Wrapper $darkMode={darkMode}$sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <BrandContainer className="flexNullCenter" to="home" smooth={true} onClick={() => handleToggle(false)}>
          <LogoBadge $darkMode={darkMode}>
            <LogoIcon />
          </LogoBadge>
          <BrandTextContainer className="flexCol">
            <LogoText $darkMode={darkMode}>
              LVO <span className="highlight">Digital Labs</span>
            </LogoText>
            <SubBrandText $darkMode={darkMode}>Enterprise & Web Agency</SubBrandText>
          </BrandTextContainer>
        </BrandContainer>
        <CloseBtn onClick={() => handleToggle(!sidebarOpen)} className="animate pointer" $darkMode={darkMode}>
          <CloseIcon $darkMode={darkMode} />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <ScrollLink
            onClick={() => handleToggle(false)}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Home
          </ScrollLink>
        </li>
        <li className="semiBold font15 pointer">
          <ScrollLink
            onClick={() => handleToggle(false)}
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Services
          </ScrollLink>
        </li>
        <li className="semiBold font15 pointer">
          <ScrollLink
            onClick={() => handleToggle(false)}
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Projects
          </ScrollLink>
        </li>
        <li className="semiBold font15 pointer">
          <ScrollLink
            onClick={() => handleToggle(false)}
            activeClass="active"
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Testimonials
          </ScrollLink>
        </li>
        <li className="semiBold font15 pointer">
          <ScrollLink
            onClick={() => handleToggle(false)}
            activeClass="active"
            to="blog"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Blog
          </ScrollLink>
        </li>
        <li className="semiBold font15 pointer">
          <ScrollLink
            onClick={() => handleToggle(false)}
            activeClass="active"
            to="pricing"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Pricing
          </ScrollLink>
        </li>
        <li className="semiBold font15 pointer">
          <ScrollLink
            onClick={() => handleToggle(false)}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Contact
          </ScrollLink>
        </li>
      </UlStyle>

      <ActionsContainer $darkMode={darkMode}>
        {/* Mobile Theme Toggle */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 15px", marginBottom: "15px" }}>
          <span style={{ fontSize: "15px", fontWeight: "600" }}>Theme Mode</span>
          <ThemeToggleBtn onClick={() => setDarkMode(!darkMode)} $darkMode={darkMode}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </ThemeToggleBtn>
        </div>

        <UlStyleBottom className="flexSpaceCenter">
          <li className="semiBold font15 pointer">
            <NavLink to="/login" onClick={() => handleToggle(false)} style={{ padding: "10px 15px 10px 0", textDecoration: "none" }}>
              Log in
            </NavLink>
          </li>
          <li className="semiBold font15 pointer flexCenter">
            <NavLink to="/contact" onClick={() => handleToggle(false)} className="radius8" style={{ padding: "10px 20px", background: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)", color: "#ffffff", textDecoration: "none", fontWeight: "700", boxShadow: "0 4px 15px rgba(168, 85, 247, 0.4)" }}>
              Get Started
            </NavLink>
          </li>
        </UlStyleBottom>
      </ActionsContainer>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 380px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.$sidebarOpen ? "0px" : "-380px")};
  z-index: 9999;
  background-color: ${(props) => (props.$darkMode ? "#0F0C1B" : "#FFFFFF")};
  color: ${(props) => (props.$darkMode ? "#cbd5e1" : "#475569")};
  box-shadow: -10px 0 35px rgba(0, 0, 0, ${(props) => (props.$darkMode ? "0.7" : "0.2")});
  transition: right 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    color: ${(props) => (props.$darkMode ? "#C7C4E2" : "#4B4B4B")};
    transition: all 0.2s ease;
    
    &:hover, &.active {
      color: ${(props) => (props.$darkMode ? "#C084FC" : "#7000FF")} !important;
      background: ${(props) => (props.$darkMode ? "rgba(168, 85, 247, 0.12)" : "rgba(112, 0, 255, 0.06)")};
      border-radius: 8px;
    }
  }

  @media (max-width: 400px) {
    width: 100%;
    right: ${(props) => (props.$sidebarOpen ? "0px" : "-100%")};
  }
`;

const SidebarHeader = styled.div`
  padding: 24px 0 16px 0;
  border-bottom: 1px solid ${(props) => (props.$darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)")};
`;

const BrandContainer = styled(ScrollLink)`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`;

const LogoBadge = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.$darkMode ? "rgba(168, 85, 247, 0.2)" : "rgba(112, 0, 255, 0.1)")};
  border-radius: 10px;
  border: 1px solid ${(props) => (props.$darkMode ? "rgba(168, 85, 247, 0.35)" : "rgba(112, 0, 255, 0.25)")};
`;

const BrandTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoText = styled.h2`
  font-size: 17px;
  font-weight: 800;
  color: ${(props) => (props.$darkMode ? "#FFFFFF" : "#1A1A2E")};
  margin: 0;
  letter-spacing: -0.5px;

  .highlight {
    background: linear-gradient(135deg, #A855F7 0%, #EC4899 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SubBrandText = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => (props.$darkMode ? "#C084FC" : "#7000FF")};
  margin-top: -1px;
`;

const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: ${(props) => (props.$darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)")};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  svg {
    stroke: ${(props) => (props.$darkMode ? "#ffffff" : "#0f172a")};
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const UlStyle = styled.ul`
  padding: 15px 5px;
  list-style: none;
  margin: auto 0;
  width: 100%;
  
  li {
    margin: 8px 0;
    width: 100%;
    
    a {
      padding: 12px 16px;
      display: block;
      font-weight: 600;
      border-radius: 8px;
    }
  }
`;

const ActionsContainer = styled.div`
  padding-bottom: 35px;
  border-top: 1px solid ${(props) => (props.$darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)")};
  padding-top: 20px;
`;

const UlStyleBottom = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ThemeToggleBtn = styled.button`
  background: ${(props) => (props.$darkMode ? "rgba(168, 85, 247, 0.15)" : "rgba(112, 0, 255, 0.08)")};
  color: ${(props) => (props.$darkMode ? "#C084FC" : "#7000FF")};
  border: 1px solid ${(props) => (props.$darkMode ? "rgba(168, 85, 247, 0.3)" : "rgba(112, 0, 255, 0.2)")};
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${(props) => (props.$darkMode ? "#7c3aed" : "#7000FF")};
    color: #ffffff;
    box-shadow: 0 0 15px rgba(168, 85, 247, 0.4);
  }
`;