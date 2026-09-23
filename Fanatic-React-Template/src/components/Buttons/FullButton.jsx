import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border, darkMode }) {
  return (
    <Wrapper
      className="animate pointer radius8 font13 semiBold"
      onClick={action ? () => action() : null}
      $border={border}$darkMode={darkMode}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid
    ${(props) =>
      props.$border
        ? props.$darkMode
          ? "rgba(168, 85, 247, 0.4)"
          : "#cbd5e1"
        : "#a855f7"};
  background-color: ${(props) => (props.$border ? "transparent" : "#a855f7")};
  width: 100%;
  padding: 14px 20px;
  outline: none;
  color: ${(props) =>
    props.$border
      ? props.$darkMode
        ? "#f1f5f9"
        : "#334155"
      : "#ffffff"};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.$border ? "rgba(168, 85, 247, 0.1)" : "#9333ea")};
    border-color: #a855f7;
    color: ${(props) => (props.$border ? "#a855f7" : "#ffffff")};
    box-shadow: ${(props) =>
      props.$border ? "none" : "0 8px 20px rgba(168, 85, 247, 0.35)"};
    transform: translateY(-2px);
  }
`;