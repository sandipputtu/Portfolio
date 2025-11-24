import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import InitiativesImg from "./InitiativesImg";
import "./InitiativesComponent.css";
import { Fade } from "react-reveal";

class Initiatives extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="initiatives-main">
        <Header theme={this.props.theme} />
        <div className="basic-initiatives">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              {/* <div className="heading-img-div">
                <InitiativesImg theme={theme} />
              </div> */}
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Initiatives
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Key Initiatives & Highlights of Sandip Kumar (IAS), Director
                  of Kerala State IT Mission (KSITM)
                </h3>
              </div>
            </div>
          </Fade>
          <div className="initiatives-body-div">
            <Fade bottom duration={2000} distance="40px">
              <ul className="initiatives-list">
                <li>
                  <strong>Cybersecurity Workshop (Nov 2024):</strong>{" "}
                  Inaugurated a three-day workshop for 100+
                  CISO/Deputy-CISO/technical officers, focusing on
                  cyber-resilience, IAM, AI in cyber-security, and crisis
                  management plans.
                </li>
                <li>
                  <strong>IAM Frameworks:</strong> Emphasized role-based access
                  control, multi-factor authentication, and single sign-on for
                  secure citizen, business, and government services in Kerala’s
                  digital architecture.
                </li>
                <li>
                  <strong>Responsible AI in Governance:</strong> Convened
                  inter-departmental consultations with Kerala Startup Mission
                  (KSUM) and ICT Academy to pilot AI-enabled public-service
                  use-cases.
                </li>
                <li>
                  <strong>Showcasing Kerala’s Digital Model:</strong> Presented
                  Kerala’s unified services portal and citizen-friendly digital
                  infrastructure at national forums (e.g., Digital India State
                  Consultation Workshop).
                </li>
              </ul>
            </Fade>
          </div>
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Initiatives;
