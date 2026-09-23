import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";

export default function ServiceBox({ icon, title, subtitle, cardImage, darkMode }) {
  let getIcon;
  let defaultImage;

  // Assign tailored images and icons depending on the service category
  switch (icon) {
    case "browser":
      getIcon = <BrowserIcon />;
      defaultImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"; // Analytics / Web Apps
      break;
    case "monitor":
      getIcon = <MonitorIcon />;
      defaultImage = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"; // Coding / Development
      break;
    case "roller":
      getIcon = <RollerIcon />;
      defaultImage = "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop"; // UI/UX Design & Creative
      break;
    case "printer":
      getIcon = <PrinterIcon />;
      defaultImage = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop"; // Infrastructure / Systems
      break;
    default:
      getIcon = <MonitorIcon />;
      defaultImage = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop";
      break;
  }

  const bgImage = cardImage || defaultImage;

  return (
    <Wrapper $darkMode={darkMode} className="flex flexColumn radius8 animate">
      <CardImageContainer>
        <CardImage src={bgImage} alt={title} />
        <ImageOverlay $darkMode={darkMode} />
        
        <GlowEffectBadge $darkMode={darkMode}>
          <IconBadge $darkMode={darkMode}>
            <IconStyle $darkMode={darkMode}>{getIcon}</IconStyle>
          </IconBadge>
        </GlowEffectBadge>
      </CardImageContainer>

      <ContentArea className="flex flexColumn">
        <TitleStyle $darkMode={darkMode} className="font20 extraBold">{title}</TitleStyle>
        <SubtitleStyle $darkMode={darkMode} className="font13">{subtitle}</SubtitleStyle>
        
        <CardFooter className="flexSpaceCenter">
          <ExploreText $darkMode={darkMode}>Explore Service</ExploreText>
          <ArrowIcon $darkMode={darkMode}>→</ArrowIcon>
        </CardFooter>
      </ContentArea>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => (props.$darkMode ? "#140d2b" : "#ffffff")};
  border: 1px solid ${(props) => (props.$darkMode ? "rgba(168, 85, 247, 0.2)" : "#e2e8f0")};
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    border-color: ${(props) => (props.$darkMode ? "#a855f7" : "#7c3aed")};
    box-shadow: ${(props) => (props.$darkMode ? "0 20px 40px rgba(168, 85, 247, 0.25)" : "0 20px 30px rgba(112, 0, 255, 0.12)")};
  }
`;

const CardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 175px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  ${Wrapper}:hover & {
    transform: scale(1.1);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => (props.$darkMode ? "linear-gradient(to bottom, rgba(20, 13, 43, 0.3), rgba(20, 13, 43, 0.95))" : "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.65))")};
`;

const GlowEffectBadge = styled.div`
  position: absolute;
  bottom: -16px;
  left: 24px;
  padding: 4px;
  border-radius: 14px;
  background: ${(props) => (props.$darkMode ? "linear-gradient(135deg, rgba(168, 85, 247, 0.6), rgba(236, 72, 153, 0.6))" : "linear-gradient(135deg, rgba(124, 58, 237, 0.4), rgba(168, 85, 247, 0.4))")};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

const IconBadge = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: ${(props) => (props.$darkMode ? "#181035" : "#ffffff")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  ${Wrapper}:hover & {
    background: ${(props) => (props.$darkMode ? "#241852" : "#f8fafc")};
    transform: scale(1.05);
  }
`;

const IconStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${(props) => (props.$darkMode ? "#c084fc" : "#7c3aed")};
    width: 26px;
    height: 26px;
    transition: transform 0.3s ease;
  }

  ${Wrapper}:hover & svg {
    transform: scale(1.15) rotate(6deg);
  }
`;

const ContentArea = styled.div`
  padding: 32px 24px 24px 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleStyle = styled.h2`
  width: 100%;
  margin: 0 0 12px 0;
  color: ${(props) => (props.$darkMode ? "#ffffff" : "#0f172a")};
  font-size: 1.25rem !important;
  font-weight: 800;
  letter-spacing: -0.5px;
`;

const SubtitleStyle = styled.p`
  width: 100%;
  margin: 0 0 25px 0;
  color: ${(props) => (props.$darkMode ? "#94a3b8" : "#64748b")};
  line-height: 1.6;
  font-size: 14px;
`;

const CardFooter = styled.div`
  border-top: 1px solid ${(props) => (props.$darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)")};
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ExploreText = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: ${(props) => (props.$darkMode ? "#c084fc" : "#7c3aed")};
  transition: color 0.2s ease;

  ${Wrapper}:hover & {
    color: ${(props) => (props.$darkMode ? "#ffffff" : "#7000ff")};
  }
`;

const ArrowIcon = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.$darkMode ? "#c084fc" : "#7c3aed")};
  transition: transform 0.3s ease;

  ${Wrapper}:hover & {
    transform: translateX(6px);
  }
`;