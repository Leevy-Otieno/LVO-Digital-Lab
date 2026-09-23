import React from "react";
import styled from "styled-components";
// Assets
import QuoteIcon from "../../assets/svg/Quotes";

export default function TestimonialBox({ text, author, title, clientImage, darkMode }) {
  return (
    <Wrapper $darkMode={darkMode} className="radius8 shadow animate flexNullCenter flexColumn">
      <TopRow className="flexSpaceCenter">
        <QuoteWrapper $darkMode={darkMode}>
          <QuoteIcon />
        </QuoteWrapper>
        <StarRating>⭐⭐⭐⭐⭐</StarRating>
      </TopRow>

      <TestimonialText $darkMode={darkMode} className="font14">
        "{text}"
      </TestimonialText>

      <ClientInfoRow className="flexNullCenter">
        <ClientAvatar src={clientImage} alt={author} />
        <ClientDetails className="flexCol">
          <AuthorText $darkMode={darkMode} className="font14">
            {author}
          </AuthorText>
          <ClientTitle $darkMode={darkMode} className="font12">
            {title}
          </ClientTitle>
        </ClientDetails>
      </ClientInfoRow>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 30px;
  background-color: ${(props) => (props.$darkMode ? "#140d2b" : "#ffffff")};
  border: 1px solid ${(props) => (props.$darkMode ? "rgba(168, 85, 247, 0.2)" : "#e2e8f0")};
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &:hover {
    transform: translateY(-6px);
    border-color: ${(props) => (props.$darkMode ? "#a855f7" : "#7c3aed")};
    box-shadow: ${(props) => (props.$darkMode ? "0 15px 30px rgba(168, 85, 247, 0.15)" : "0 15px 30px rgba(112, 0, 255, 0.08)")};
  }
`;

const TopRow = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const QuoteWrapper = styled.div`
  svg {
    fill: ${(props) => (props.$darkMode ? "#a855f7" : "#7c3aed")};
    width: 26px;
    height: 26px;
  }
`;

const StarRating = styled.div`
  font-size: 13px;
  letter-spacing: 1px;
`;

const TestimonialText = styled.p`
  color: ${(props) => (props.$darkMode ? "#f1f5f9" : "#334155")};
  padding-bottom: 25px;
  line-height: 1.7;
  width: 100%;
  flex-grow: 1;
`;

const ClientInfoRow = styled.div`
  width: 100%;
  gap: 15px;
  border-top: 1px solid ${(props) => (props.$darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)")};
  padding-top: 18px;
`;

const ClientAvatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #a855f7;
`;

const ClientDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorText = styled.h4`
  color: ${(props) => (props.$darkMode ? "#ffffff" : "#0f172a")};
  font-weight: 700;
  margin: 0;
`;

const ClientTitle = styled.span`
  color: ${(props) => (props.$darkMode ? "#c084fc" : "#7c3aed")};
  font-weight: 600;
  margin-top: 2px;
`;