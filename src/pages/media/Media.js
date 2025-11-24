import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import MediaImg from "./MediaImg";
import "./Media.css";
import { Fade } from "react-reveal";

class Media extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="media-main">
        <Header theme={theme} />
        <div className="basic-media">
          <Fade bottom duration={2000} distance="40px">
            <div className="media-heading-div">
              {/* <div className="media-heading-img-div">
                <MediaImg theme={theme} />
              </div> */}
              <div className="media-heading-text-div">
                <h1
                  className="media-heading-text"
                  style={{ color: theme.text }}
                >
                  Media & Speaking
                </h1>
                <h3
                  className="media-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  Highlights of Sandip Kumar (IAS) in press, interviews, and
                  events
                </h3>
              </div>
            </div>
          </Fade>
          <div className="media-body-div">
            <Fade bottom duration={2000} distance="40px">
              <section id="media" className="card">
                <h2>Media & Speaking</h2>
                <div className="media-list">
                  <a
                    className="media-item"
                    href="https://www.expresscomputer.in/exclusives/cybersecurity-is-vital-for-protecting-keralas-digital-future-sandip-kumar-director-ksitm/119328/"
                    rel="noopener"
                    target="_blank"
                  >
                    <img
                      alt="Express Computer interview"
                      src="https://www.expresscomputer.in/wp-content/uploads/2024/11/Express_Computer_Sandip_Kumar_KSITM.jpg"
                      onError={(e) => (e.target.style.display = "none")}
                      style={{ display: "none" }}
                    />
                    <div>
                      <h3>Cybersecurity for Kerala’s digital future</h3>
                      <p className="muted">
                        Interview on cyber resilience, IAM, and AI in
                        cybersecurity (Nov 2024).
                      </p>
                    </div>
                  </a>
                  <a
                    className="media-item"
                    href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2073110"
                    rel="noopener"
                    target="_blank"
                  >
                    <img
                      alt="PIB press release"
                      src="https://static.pib.gov.in/WriteReadData/userfiles/image/Press-Information-Bureau-Logo.jpg"
                      onError={(e) => (e.target.style.display = "none")}
                      style={{ display: "none" }}
                    />
                    <div>
                      <h3>PIB: Cyber Security Workshop in Kerala</h3>
                      <p className="muted">
                        NeGD–MeitY workshop underscoring cybersecurity and data
                        privacy (Nov 2024).
                      </p>
                    </div>
                  </a>
                  <a
                    className="media-item"
                    href="https://www.digitalindia.gov.in/photo_gallery/digital-india-state-consultation-workshop-at-kerala/"
                    rel="noopener"
                    target="_blank"
                  >
                    <img
                      alt="Digital India gallery"
                      src="https://www.digitalindia.gov.in/sites/default/files/2025-03/Kerala_workshop_thumb.jpg"
                      onError={(e) => (e.target.style.display = "none")}
                      style={{ display: "none" }}
                    />
                    <div>
                      <h3>
                        Digital India: State Consultation Workshop (Kerala)
                      </h3>
                      <p className="muted">
                        Photo gallery: Workshop inaugurated by Director, KSITM
                        (Mar 2025).
                      </p>
                    </div>
                  </a>
                  <a
                    className="media-item"
                    href="https://www.youtube.com/shorts/BpWGfyPuFFA"
                    rel="noopener"
                    target="_blank"
                  >
                    <img
                      alt="YouTube short"
                      src="https://i.ytimg.com/vi/BpWGfyPuFFA/hqdefault.jpg"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                    <div>
                      <h3>Talk: Digital governance perspectives</h3>
                      <p className="muted">
                        Brief remarks by Sandip Kumar, Director, KSITM (2025).
                      </p>
                    </div>
                  </a>
                </div>
              </section>
            </Fade>
          </div>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Media;
