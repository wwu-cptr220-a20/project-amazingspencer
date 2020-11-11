import React, { Component } from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import survey from './survey.json';
import '../style.css';
// Use of survey-react inspired by https://github.com/surveyjs/surveyjs_react_quickstart

export default class SurveyReact extends Component {
    // Use of componentDidMount for Survey.js learned from https://stackoverflow.com/questions/45544026/how-to-render-a-react-component-with-survey-js
    componentDidMount() {
        Survey.Survey.cssType = "bootstrap";
    }

    render() {
        let model = new Survey.Model(survey);
        return (
            <div className="container">
                <main>
                    <Survey.Survey model={model} />
                    <p>Refresh the page to restart the survey.</p>
                </main>
            </div>
        );
    }
}