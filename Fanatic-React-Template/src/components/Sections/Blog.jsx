import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog({ darkMode }) {
  return (
    <Wrapper id="blog" $darkMode={darkMode}>
      <MainSection $darkMode={darkMode}>
        <div className="container">
          <HeaderInfo $darkMode={darkMode}>
            <h1 className="font40 extraBold">Our Blog Stories</h1>
            <p className="font13">
              Explore our latest insights, company announcements, and developer updates,
              <br />
              crafted to keep you ahead of the digital curve.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Scaling React Apps"
                text="Discover advanced patterns for modular architecture and optimized state management in Vite & React."
                tag="engineering"
                author="Leefy Ochieng, 2 days ago"
                action={() => alert("Opening blog post...")}
                darkMode={darkMode}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Midnight Purple UI"
                text="Why dark neon and deep purple aesthetics are dominating modern developer tools and SaaS platforms."
                tag="design"
                author="Sarah Jenkins, 4 days ago"
                action={() => alert("Opening blog post...")}
                darkMode={darkMode}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="AI & Workflow Automation"
                text="Integrating intelligent agents and context-aware tools into your daily coding pipelines."
                tag="artificial intelligence"
                author="Alex Rivera, 1 week ago"
                action={() => alert("Opening blog post...")}
                darkMode={darkMode}
              />
            </div>
          </div>
          <div className="row textCenter" style={{ marginTop: "30px" }}>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Tailwind vs Styled-Components"
                text="Comparing styling methodologies for scalable React web applications in 2026."
                tag="frontend"
                author="David Kim, 1 week ago"
                action={() => alert("Opening blog post...")}
                darkMode={darkMode}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Securing Express APIs"
                text="Best security practices for token authentication, rate limiting, and database hardening."
                tag="backend"
                author="Leefy Ochieng, 2 weeks ago"
                action={() => alert("Opening blog post...")}
                darkMode={darkMode}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="The Future of E-Commerce"
                text="Headless architectures and instant payment gateways transforming online storefronts."
                tag="e-commerce"
                author="Elena Rostova, 3 weeks ago"
                action={() => alert("Opening blog post...")}
                darkMode={darkMode}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("Loading more articles...")} />
            </div>
          </div>
        </div>
      </MainSection>
      
      <TestimonialSection $darkMode={darkMode}>
        <div className="container">
          <HeaderInfo $darkMode={darkMode}>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Hear from clients and developers who transformed their digital footprint
              <br />
              using our custom components and midnight purple design systems.
            </p>
          </HeaderInfo>
          <TestimonialSlider darkMode={darkMode} />
        </div>
      </TestimonialSection>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
  background-color: ${(props) => (props.$darkMode ? "#0f0a1e" : "#ffffff")};
  color: ${(props) => (props.$darkMode ? "#cbd5e1" : "#475569")};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const MainSection = styled.div`
  background-color: ${(props) => (props.$darkMode ? "#0f0a1e" : "#ffffff")};
  padding: 40px 0;
  transition: background-color 0.3s ease;
`;

const TestimonialSection = styled.div`
  background-color: ${(props) => (props.$darkMode ? "#140d2b" : "#f8fafc")};
  padding: 60px 0;
  border-top: 1px solid ${(props) => (props.$darkMode ? "rgba(139, 92, 246, 0.15)" : "#e2e8f0")};
  border-bottom: 1px solid ${(props) => (props.$darkMode ? "rgba(139, 92, 246, 0.15)" : "#e2e8f0")};
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const HeaderInfo = styled.div`
  margin-bottom: 40px;
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