import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Footer({ darkMode }) {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper $darkMode={darkMode}>
      <div className="container">
        <InnerWrapper className="flexSpaceCenter" style={{ padding: "35px 0" }}>
          <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80} style={{ textDecoration: "none" }}>
            <LogoImg />
            <LogoText $darkMode={darkMode} className="font15 extraBold">
              Fanatic
            </LogoText>
          </Link>
          
          <StyleP $darkMode={darkMode} className="font13">
            © {getCurrentYear()} - <span className="purpleColor font13" style={{ color: "#a855f7", fontWeight: "bold" }}>Fanatic</span>. All Rights Reserved.
          </StyleP>

          <BackToTopLink $darkMode={darkMode} className="animate pointer font13" to="home" smooth={true} offset={-80}>
            Back to top ↑
          </BackToTopLink>
        </InnerWrapper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  width: 100%;
  background-color: ${(props) => (props.$darkMode ? "#0a0614" : "#0f172a")};
  border-top: 1px solid ${(props) => (props.$darkMode ? "rgba(139, 92, 246, 0.2)" : "rgba(226, 232, 240, 0.1)")};
  transition: background-color 0.3s ease;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 550px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LogoText = styled.h1`
  margin-left: 15px;
  color: ${(props) => (props.$darkMode ? "#ffffff" : "#ffffff")};
`;

const StyleP = styled.p`
  color: ${(props) => (props.$darkMode ? "#94a3b8" : "#94a3b8")};

  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;

const BackToTopLink = styled(Link)`
  color: ${(props) => (props.$darkMode ? "#cbd5e1" : "#cbd5e1")};
  transition: color 0.2s ease;

  &:hover {
    color: #a855f7;
  }
`;