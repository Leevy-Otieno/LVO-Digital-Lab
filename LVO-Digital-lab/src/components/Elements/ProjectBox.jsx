import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, title, text, tag, liveUrl, githubUrl, darkMode }) {
  // Fallback image options
  let resolvedImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80";
  const textCheck = `${title || ""} ${tag || ""}`.toLowerCase();

  if (textCheck.includes("perfumier") || textCheck.includes("shop") || textCheck.includes("ecommerce")) {
    resolvedImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";
  } else if (textCheck.includes("postnexus") || textCheck.includes("ai") || textCheck.includes("saas")) {
    resolvedImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80";
  } else if (textCheck.includes("map") || textCheck.includes("real estate")) {
    resolvedImage = "https://images.unsplash.com/photo-1524813686514-a57563d77840?auto=format&fit=crop&w=800&q=80";
  }

  // Check if img is empty or contains the placeholder string like "376 x 309"
  const isPlaceholder = !img || img.trim() === "" || img.includes("376") || img.includes("placeholder");
  const finalImage = isPlaceholder ? resolvedImage : img;

  return (
    <Wrapper $darkMode={darkMode} className="radius8 animate">
      <CardImageContainer>
        <CardImage src={finalImage} alt={title || "Project Preview"} />
        <ImageOverlay $darkMode={darkMode} />
        <TagBadge $darkMode={darkMode}>{tag || "Full-Stack Web App"}</TagBadge>
      </CardImageContainer>

      <ContentArea>
        <TextSection>
          <TitleStyle $darkMode={darkMode}>{title}</TitleStyle>
          <SubtitleStyle $darkMode={darkMode}>{text}</SubtitleStyle>
        </TextSection>

        <CardFooter $darkMode={darkMode}>
          {liveUrl ? (
            <ProjectLink href={liveUrl} target="_blank" rel="noopener noreferrer" $darkMode={darkMode}>
              Live Preview <span>→</span>
            </ProjectLink>
          ) : (
            <ProjectLink as="span" $darkMode={darkMode} style={{ opacity: 0.5, cursor: "default" }}>
              Case Study
            </ProjectLink>
          )}

          {githubUrl && (
            <GithubLink href={githubUrl} target="_blank" rel="noopener noreferrer" $darkMode={darkMode}>
              GitHub Code
            </GithubLink>
          )}
        </CardFooter>
      </ContentArea>
    </Wrapper>
  );
}

/* --- Styled Components --- */

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => (props.$darkMode ? "#140d2b" : "#ffffff")};
  border: 1px solid ${(props) => (props.$darkMode ? "rgba(168, 85, 247, 0.25)" : "#e2e8f0")};
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    transform: translateY(-8px);
    border-color: ${(props) => (props.$darkMode ? "#a855f7" : "#7c3aed")};
    box-shadow: ${(props) =>
      props.$darkMode
        ? "0 20px 40px rgba(168, 85, 247, 0.25)"
        : "0 20px 30px rgba(112, 0, 255, 0.12)"};
  }
`;

const CardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 210px;
  overflow: hidden;
  background-color: #1e143f;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;

  ${Wrapper}:hover & {
    transform: scale(1.08);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.$darkMode
      ? "linear-gradient(to bottom, rgba(20, 13, 43, 0.1), rgba(20, 13, 43, 0.85))"
      : "linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.5))"};
`;

const TagBadge = styled.span`
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: ${(props) => (props.$darkMode ? "rgba(168, 85, 247, 0.3)" : "rgba(112, 0, 255, 0.15)")};
  color: ${(props) => (props.$darkMode ? "#f3e8ff" : "#7000ff")};
  border: 1px solid ${(props) => (props.$darkMode ? "rgba(168, 85, 247, 0.5)" : "rgba(112, 0, 255, 0.3)")};
  backdrop-filter: blur(8px);
  z-index: 2;
`;

const ContentArea = styled.div`
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleStyle = styled.h3`
  width: 100%;
  margin: 0 0 8px 0;
  color: ${(props) => (props.$darkMode ? "#ffffff" : "#0f172a")};
  font-size: 1.15rem !important;
  font-weight: 800;
  letter-spacing: -0.3px;
`;

const SubtitleStyle = styled.p`
  width: 100%;
  margin: 0 0 20px 0;
  color: ${(props) => (props.$darkMode ? "#94a3b8" : "#64748b")};
  line-height: 1.5;
  font-size: 13.5px;
`;

const CardFooter = styled.div`
  border-top: 1px solid ${(props) => (props.$darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)")};
  padding-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  font-size: 13px;
  font-weight: 700;
  color: ${(props) => (props.$darkMode ? "#c084fc" : "#7c3aed")};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s ease;

  span {
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${(props) => (props.$darkMode ? "#ffffff" : "#7000ff")};

    span {
      transform: translateX(4px);
    }
  }
`;

const GithubLink = styled.a`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => (props.$darkMode ? "#94a3b8" : "#64748b")};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => (props.$darkMode ? "#ffffff" : "#0f172a")};
  }
`;