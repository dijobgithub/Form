import React from "react";
import Landing from "./landing.js";
import SurveyContainer from "./survey/surveyContainer.js";
import ResultsContainer from "./results/resultsContainer.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";


export default class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
          <Route path="/survey" component={SurveyContainer} />
          <Route path="/results" component={ResultsContainer} />
          <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>

    );
  }
}
