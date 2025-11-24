import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <Fade left duration={2000} distance="40px">
          <div className="greeting-text-div">
            <div className="greeting-content">
              <div className="greeting-intro">
                <span className="greeting-hello" style={{ color: theme.text }}>
                  Hello, I'm
                </span>
              </div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <div className="greeting-social-wrapper">
                <SocialMedia theme={theme} />
              </div>
            </div>
          </div>
        </Fade>
        <Fade right duration={2000} distance="40px">
          <div className="greeting-image-div">
            <div className="greeting-image-wrapper">
              <div
                className="greeting-image-background"
                style={{
                  background: `linear-gradient(135deg, ${
                    theme.highlight || theme.text
                  }15 0%, ${theme.highlight || theme.text}05 100%)`,
                }}
              ></div>
              <img
                alt="greeting"
                src={require(`../../assets/images/pmg.jpg`)}
                className="greeting-image"
                loading="lazy"
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
