import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Initiatives from "../pages/initiatives/InitiativesComponent";
import Awards from "../pages/awards/Awards";
// import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Media from "../pages/media/Media";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={this.props.theme} />
              ) : (
                <Home {...props} theme={this.props.theme} />
              )
            }
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/awards"
            exact
            render={(props) => <Awards {...props} theme={this.props.theme} />}
          />
          <Route
            path="/initiatives"
            render={(props) => (
              <Initiatives {...props} theme={this.props.theme} />
            )}
          />
          {/* Open Source page removed */}
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={this.props.theme} />}
            />
          )}

          <Route
            path="/media"
            render={(props) => <Media {...props} theme={this.props.theme} />}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
