import React from "react";
import styled from "styled-components";

export default function BlogBox({ tag, title, text, action, author, darkMode }) {
  return (
    <WrapperBtn className="animate pointer" onClick={action ? () => action() : null}>
      <Wrapper $darkMode={darkMode} className="whiteBg radius8 shadow">
        <Title $darkMode={darkMode} className="font20 extraBold">{title}</Title>
        <Text $darkMode={darkMode} className="font13">
          {text}
        </Text>
        <Author $darkMode={darkMode} className="font13 extraBold">{author}</Author>
        <div className="flex">
          <Tag $darkMode={darkMode} className="radius6 font13 extraBold">{tag}</Tag>
        </div>
      </Wrapper>
    </WrapperBtn>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 25px 30px;
  margin-top: 30px;
  background-color: ${(props) => (props.$darkMode ? "#140d2b" : "#ffffff")};
  border: 1px solid ${(props) => (props.$darkMode ? "rgba(168, 85, 247, 0.15)" : "#e2e8f0")};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${(props) => (props.$darkMode ? "rgba(168, 85, 247, 0.4)" : "#cbd5e1")};
    transform: translateY(-4px);
  }
`;

const Title = styled.h3`
  color: ${(props) => (props.$darkMode ? "#ffffff" : "#0f172a")};
`;

const Text = styled.p`
  color: ${(props) => (props.$darkMode ? "#94a3b8" : "#475569")};
  padding: 20px 0;
  line-height: 1.6;
`;

const Author = styled.p`
  color: ${(props) => (props.$darkMode ? "#a855f7" : "#7c3aed")};
  margin-bottom: 15px;
`;

const Tag = styled.span`
  display: inline-block;
  padding: 6px 12px;
  background-color: ${(props) => (props.$darkMode ? "rgba(168, 85, 247, 0.15)" : "#f3e8ff")};
  color: ${(props) => (props.$darkMode ? "#c084fc" : "#7c3aed")};
`;

const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 1;
  }
`;