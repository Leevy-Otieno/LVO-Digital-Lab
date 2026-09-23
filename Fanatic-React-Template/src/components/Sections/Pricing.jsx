import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing({ darkMode }) {
  return (
    <Wrapper id="pricing" $darkMode={darkMode}>
      <div className="container">
        <HeaderInfo $darkMode={darkMode}>
          <h1 className="font40 extraBold">Transparent Pricing</h1>
          <p className="font13">
            Choose the ideal plan for your project scale. Upgrade, scale, or cancel anytime
            <br />
            with zero hidden fees and full developer support included.
          </p>
        </HeaderInfo>
        
        <TablesWrapper className="flexSpaceNull">
          <TableBox>
            <PricingTable
              icon="roller"
              price="$29.99/mo"
              title="Starter"
              text="Perfect for personal portfolios, landing pages, and small starter applications."
              offers={[
                { name: "Responsive UI Layouts", cheked: true },
                { name: "Dark & Light Mode Toggle", cheked: true },
                { name: "React Router Integration", cheked: false },
                { name: "Custom Domain Setup", cheked: false },
                { name: "Priority Support (24/7)", cheked: false },
              ]}
              action={() => alert("Selected Starter Plan!")}
              darkMode={darkMode}
            />
          </TableBox>
          
          <TableBox>
            <PricingTable
              icon="monitor"
              price="$49.99/mo"
              title="Professional"
              text="Ideal for growing businesses and full-stack web applications requiring robust performance."
              offers={[
                { name: "Responsive UI Layouts", cheked: true },
                { name: "Dark & Light Mode Toggle", cheked: true },
                { name: "React Router Integration", cheked: true },
                { name: "Custom Domain Setup", cheked: true },
                { name: "Priority Support (24/7)", cheked: false },
              ]}
              action={() => alert("Selected Professional Plan!")}
              darkMode={darkMode}
              popular={true}
            />
          </TableBox>
          
          <TableBox>
            <PricingTable
              icon="browser"
              price="$89.99/mo"
              title="Enterprise"
              text="Comprehensive e-commerce, custom APIs, and advanced scalable web architecture."
              offers={[
                { name: "Responsive UI Layouts", cheked: true },
                { name: "Dark & Light Mode Toggle", cheked: true },
                { name: "React Router Integration", cheked: true },
                { name: "Custom Domain Setup", cheked: true },
                { name: "Priority Support (24/7)", cheked: true },
              ]}
              action={() => alert("Selected Enterprise Plan!")}
              darkMode={darkMode}
            />
          </TableBox>
        </TablesWrapper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 80px 0;
  background-color: ${(props) => (props.$darkMode ? "#0f0a1e" : "#f8fafc")};
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

const TablesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 20px;

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const TableBox = styled.div`
  width: 31%;
  
  @media (max-width: 860px) {
    width: 100%;
    max-width: 380px;
  }
`;