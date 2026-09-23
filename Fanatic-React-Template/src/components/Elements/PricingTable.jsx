import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import CheckMark from "../../assets/svg/Checkmark";

export default function PricingTable({ icon, price, title, text, offers, action, darkMode }) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <RollerIcon />;
      break;
    case "monitor":
      getIcon = <MonitorIcon />;
      break;
    case "browser":
      getIcon = <BrowserIcon />;
      break;
    case "printer":
      getIcon = <PrinterIcon />;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }

  return (
    <Wrapper $darkMode={darkMode} className="radius8 shadow animate">
      <div className="flexSpaceCenter">
        <IconWrapper $darkMode={darkMode}>{getIcon}</IconWrapper>
        <PriceText $darkMode={darkMode} className="font30 extraBold">{price}</PriceText>
      </div>
      <div style={{ margin: "30px 0" }}>
        <Title $darkMode={darkMode} className="font30 extraBold">{title}</Title>
        <DescText $darkMode={darkMode} className="font13">{text}</DescText>
      </div>
      <div>
        {offers
          ? offers.map((item, index) => (
              <div className="flexNullCenter" style={{ margin: "15px 0" }} key={index}>
                <div style={{ position: "relative", top: "-1px", marginRight: "15px" }}>
                  {item.cheked ? (
                    <div style={{ minWidth: "20px" }}>
                      <CheckMark />
                    </div>
                  ) : (
                    <div style={{ minWidth: "20px" }}></div>
                  )}
                </div>
                <OfferText $darkMode={darkMode} className="font20 extraBold">{item.name}</OfferText>
              </div>
            ))
          : null}
      </div>
      <div style={{ maxWidth: "140px", margin: "30px auto 0 auto" }}>
        <FullButton title="Get Started" action={action} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 35px 30px;
  margin-top: 30px;
  background-color: ${(props) => (props.$darkMode ? "#140d2b" : "#ffffff")};
  border: 1px solid ${(props) => (props.$darkMode ? "rgba(168, 85, 247, 0.15)" : "#e2e8f0")};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: ${(props) => (props.$darkMode ? "rgba(168, 85, 247, 0.4)" : "#cbd5e1")};
    box-shadow: ${(props) => (props.$darkMode ? "0 15px 30px rgba(0, 0, 0, 0.5)" : "0 15px 30px rgba(0, 0, 0, 0.1)")};
  }
`;

const IconWrapper = styled.div`
  svg {
    fill: ${(props) => (props.$darkMode ? "#a855f7" : "#7c3aed")};
    width: 40px;
    height: 40px;
  }
`;

const PriceText = styled.p`
  color: ${(props) => (props.$darkMode ? "#ffffff" : "#0f172a")};
`;

const Title = styled.h4`
  color: ${(props) => (props.$darkMode ? "#ffffff" : "#0f172a")};
  margin-bottom: 10px;
`;

const DescText = styled.p`
  color: ${(props) => (props.$darkMode ? "#94a3b8" : "#64748b")};
  line-height: 1.6;
`;

const OfferText = styled.p`
  color: ${(props) => (props.$darkMode ? "#f1f5f9" : "#334155")};
  font-size: 1rem !important;
  font-weight: 600 !important;
`;