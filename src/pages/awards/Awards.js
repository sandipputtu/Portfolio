import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import AwardsImg from "./AwardsImg";
import "./Awards.css";
import { Fade } from "react-reveal";

class Awards extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="awards-main">
        <Header theme={this.props.theme} />
        <div className="basic-awards">
          <Fade bottom duration={2000} distance="40px">
            <div className="awards-heading-div">
              {/* <div className="awards-heading-img-div">
                <AwardsImg theme={theme} />
              </div> */}
              <div className="awards-heading-text-div">
                <h1
                  className="awards-heading-text"
                  style={{ color: theme.text }}
                >
                  Awards & Recognition
                </h1>
                <h3
                  className="awards-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  Honoring Sandip Kumar (IAS) for leadership and innovation
                </h3>
              </div>
            </div>
          </Fade>
          <div className="awards-body-div">
            <Fade bottom duration={2000} distance="40px">
              <section id="awards" className="card">
                <h2>Best Sub Collector Award</h2>
                <a
                  className="media-item"
                  href="https://thalassery.truevisionnews.com/news/186405/thalasserikabhimana-the-heritage-citysub-collector-sandeep-kumar-is-the-best-sub-collector-in-the-state"
                  rel="noopener"
                  target="_blank"
                >
                  <img
                    alt="Best Sub Collector Award thumbnail"
                    src="https://thalassery.truevisionnews.com/assets/images/og.jpg"
                    onError={(e) => (e.target.style.display = "none")}
                    style={{ display: "none" }}
                  />
                  <div>
                    <h3>Best Sub Collector Award</h3>
                    <p className="muted">
                      Recognized as the Best Sub Collector in the state for
                      outstanding administrative service and citizen-oriented
                      initiatives.
                    </p>
                  </div>
                </a>
              </section>
              <section id="certificateless" className="card">
                <h2>Certificateless Governance Recognition — MeitY</h2>
                <a
                  className="media-item"
                  href="https://www.facebook.com/meityindia/posts/meity-is-proud-to-felicitate-kerala-for-achieving-large-scale-paperless-governan/1146425821006521/"
                  rel="noopener"
                  target="_blank"
                >
                  <img
                    alt="MeitY logo"
                    src="https://meity.gov.in/sites/upload_files/dit/files/logo_250.jpg"
                    onError={(e) => (e.target.style.display = "none")}
                    style={{ display: "none" }}
                  />
                  <div>
                    <h3>
                      MeitY felicitation for state-wide certificateless
                      governance
                    </h3>
                    <p className="muted">
                      Recognition highlighting Kerala’s leadership in paperless,
                      certificate-less services across departments.
                    </p>
                  </div>
                </a>
              </section>
              <section id="aralamfarm" className="card">
                <h2>Aralam Farm Managing Director (2023-24)</h2>
                <a
                  className="media-item"
                  href="https://aralamfarm.in/about/"
                  rel="noopener"
                  target="_blank"
                >
                  <img
                    alt="Aralam Farm"
                    src="https://aralamfarm.in/assets/images/logo.png"
                    onError={(e) => (e.target.style.display = "none")}
                    style={{ display: "none" }}
                  />
                  <div>
                    <h3>Transformational leadership at Aralam Farm</h3>
                    <ul>
                      <li>
                        Introduced innovative, high-tech farming to enhance
                        yield and sustainability.
                      </li>
                      <li>
                        Established <strong>Mushroom Farming</strong> units and
                        modern <strong>Cashew &amp; Honey Processing</strong>.
                      </li>
                      <li>
                        Implemented <strong>fencing</strong> to mitigate
                        elephant intrusions and crop damage.
                      </li>
                      <li>
                        Commissioned a <strong>high-tech nursery</strong>{" "}
                        enabling diversified cultivation and entrepreneurship.
                      </li>
                    </ul>
                  </div>
                </a>
              </section>
            </Fade>
          </div>
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Awards;
