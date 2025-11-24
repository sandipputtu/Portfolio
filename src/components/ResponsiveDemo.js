import React from "react";
import styled from "styled-components";
import { useViewport } from "../hooks/useViewport";
import { media, container, touchTarget } from "../styles/mixins";

// Demo container using responsive utilities
const DemoContainer = styled.div`
  ${container()}
  padding: var(--spacing-md);

  ${media.tablet`
    padding: var(--spacing-lg);
  `}

  ${media.desktop`
    padding: var(--spacing-xl);
  `}
`;

const DemoButton = styled.button`
  ${touchTarget}
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  border: none;
  border-radius: var(--radius-md);
  padding: var(--spacing-sm) var(--spacing-md);
  cursor: pointer;
  transition: opacity var(--transition-base) var(--transition-timing);
  
  &:hover {
    opacity: 0.8;
  }
  
  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;

const InfoBox = styled.div`
  background: ${({ theme }) => theme.text}22;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin-top: var(--spacing-md);

  ${media.tablet`
    padding: var(--spacing-lg);
  `}
`;

/**
 * Demo component to showcase responsive infrastructure
 * This can be removed after verification
 */
const ResponsiveDemo = () => {
  const viewport = useViewport();

  return (
    <DemoContainer>
      <h2>Responsive Infrastructure Demo</h2>

      <InfoBox>
        <h3>Current Viewport Info:</h3>
        <ul>
          <li>Width: {viewport.width}px</li>
          <li>Height: {viewport.height}px</li>
          <li>Breakpoint: {viewport.breakpoint}</li>
          <li>Is Mobile: {viewport.isMobile ? "Yes" : "No"}</li>
          <li>Is Tablet: {viewport.isTablet ? "Yes" : "No"}</li>
          <li>Is Desktop: {viewport.isDesktop ? "Yes" : "No"}</li>
          <li>Is Touch Device: {viewport.isTouch ? "Yes" : "No"}</li>
          <li>Orientation: {viewport.isPortrait ? "Portrait" : "Landscape"}</li>
        </ul>
      </InfoBox>

      <div style={{ marginTop: "var(--spacing-md)" }}>
        <DemoButton>Touch-Friendly Button (44x44px min)</DemoButton>
      </div>

      <p
        style={{
          marginTop: "var(--spacing-md)",
          fontSize: "var(--font-size-sm)",
        }}
      >
        Resize your browser window to see the viewport information update in
        real-time.
      </p>
    </DemoContainer>
  );
};

export default ResponsiveDemo;
