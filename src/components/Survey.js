import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route, useRouteMatch } from "react-router-dom";
// Use of nesting routes from https://reactrouter.com/web/example/nesting

export default function SurveyQuestion() {
    return (
        <Router>
            <header>
                <div className="container">
                    <h1>Coronavirus Personal Survey</h1>
                </div>
            </header>
            <main>
                <div className="container">
                    <p>Welcome! To begin, click on "Begin Survey!," to restart click the button again. This survey is intended to provide resources for you based on how you feel.</p>
                    <Switch>
                        <Route path="/SQ1">
                            <SurveyQuestionOne />
                        </Route>
                    </Switch>
                    <Link to="/SQ1" className="btn" id="resetSurvey">Begin Survey!</Link>
                </div>
            </main>
        </Router>
    );
}

function SurveyQuestionOne() {
    let { path, url } = useRouteMatch();
    return (
        <div className="container">
            <Switch>
                <Route exact path={path}>
                    <p>How are you feeling today?</p>
                    <div className="button">
                        <Link to={`${url}/SE1`} className="btn btn-secondary"><i className="far fa-arrow-alt-circle-right"></i>&nbsp;I feel good</Link>
                    </div>
                    <div className="button">
                        <Link to={`${url}/SQ2`} className="btn btn-secondary"><i className="far fa-arrow-alt-circle-right"></i>&nbsp;I don't feel good</Link>
                    </div>
                </Route>
                <Route path={`${path}/SE1`}>
                    <SurveyEndingOne />
                </Route>
                <Route path={`${path}/SQ2`}>
                    <SurveyQuestionTwo />
                </Route>
            </Switch>
        </div>
    );
}

function SurveyEndingOne() {
    return (
        <div className="container">
            <h2>Staying Healthy</h2>
            <p>A big part of staying health is maintaining a positive frame of mind. Below are some resources to help you continue staying healthy and feeling good!</p>
            <h2>Resources</h2>
            <ul>
                <li className="resource"><a href="https://www.cdc.gov/physicalactivity/index.html">Physcial Activity</a></li>
                <li className="resource"><a href="https://www.cdc.gov/nutrition/">Nutrition</a></li>
                <li className="resource"><a href="https://www.cdc.gov/mentalhealth/">Mental Health</a></li>
            </ul>
            <p>Resources are from the <cite><a href="https://www.cdc.gov/">CDC</a></cite> (Centers for Disease Control and Prevention)</p>
        </div>
    );
}

function SurveyQuestionTwo() {
    let { path, url } = useRouteMatch();
    return (
        <div className="container">
            <Switch>
                <Route exact path={path}>
                    <p>Choose the answer that best describes how you are feeling.</p>
                    <div className="button">
                        <Link to={`${url}/SQ3`} className="btn btn-secondary"><i className="far fa-arrow-alt-circle-right"></i>&nbsp;I am feeling sick.</Link>
                    </div>
                    <div className="button">
                        <Link to={`${url}/SE2`} className="btn btn-secondary"><i className="far fa-arrow-alt-circle-right"></i>&nbsp;I am feeling stressed.</Link>
                    </div>
                    <div className="button">
                        <Link to={`${url}/SE3`} className="btn btn-secondary"><i className="far fa-arrow-alt-circle-right"></i>&nbsp;I am feeling something else.</Link>
                    </div>
                </Route>
                <Route path={`${path}/SQ3`}>
                    <SurveyQuestionThree />
                </Route>
                <Route path={`${path}/SE2`}>
                    <SurveyEndingTwo />
                </Route>
                <Route path={`${path}/SE3`}>
                    <SurveyEndingThree />
                </Route>
            </Switch>
        </div>

    );
}

function SurveyQuestionThree() {
    let { path, url } = useRouteMatch();
    return (
        <div className="container">
            <Switch>
                <Route exact path={path}>
                    <p>Choose the symptoms you feel the most.</p>
                    <div className="button">
                        <Link to={`${url}/SE4`} className="btn btn-secondary"><i className="far fa-arrow-alt-circle-right"></i>&nbsp;Trouble breathing or shortness of breath.</Link>
                    </div>
                    <div className="button">
                        <Link to={`${url}/SE5`} className="btn btn-secondary"><i className="far fa-arrow-alt-circle-right"></i>&nbsp;Fever, cough, or sore throat.</Link>
                    </div>
                    <div className="button">
                        <Link to={`${url}/SE6`} className="btn btn-secondary"><i className="far fa-arrow-alt-circle-right"></i>&nbsp;My symptom is not listed here.</Link>
                    </div>
                </Route>
                <Route path={`${path}/SE4`}>
                    <SurveyEndingFour />
                </Route>
                <Route path={`${path}/SE5`}>
                    <SurveyEndingFive />
                </Route>
                <Route path={`${path}/SE6`}>
                    <SurveyEndingSix />
                </Route>
            </Switch>
        </div>
    );
}


function SurveyEndingTwo() {
    return (
        <div className="container">
            <h3>Feeling Stressed?</h3>
            <p>That's okay! Feeling stressed happens to all of us at one point or another. The key, however, is learning how to manage that stress. Below are some resources for managing stress.</p>
            <h3>Resources</h3>
            <ul>
                <li className="resource"><a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/managing-stress-anxiety.html">Mental Health and Coping during COVID-19</a></li>
                <li className="resource"><a href="https://www.cdc.gov/violenceprevention/suicide/copingwith-stresstips.html">Coping with Stress</a></li>
                <li className="resource"><a href="https://www.health.harvard.edu/mind-and-mood/best-ways-to-manage-stress">Best ways to manage stress <cite>(Harvard University)</cite></a></li>
                <li className="resource"><a href="https://www.heart.org/en/healthy-living/healthy-lifestyle/stress-management">Stress Management <cite>(American Heart Association)</cite></a></li>
            </ul>
            <p>Resources are from the <cite><a href="www.cdc.gov">CDC</a></cite> unless otherwise specified.</p>
        </div>
    );
}

function SurveyEndingThree() {
    return (
        <div className="container">
            <h3>Not feeling right?</h3>
            <p>This survey is by no means comprehensive, if are feeling something else, reach out to appropriate services. Resources provided below are intended to guide you in the right direction.</p>
            <h3>Resources</h3>
            <ul>
                <li className="resource"><a href="www.cdc.gov"><cite>CDC (Centers for Disease Control and Prevention)</cite></a></li>
                <li className="resource"><a href="https://www.apa.org/"><cite>APA (American Psychological Association)</cite></a></li>
                <li className="resource"><a href="https://www.heart.org/"><cite>AHA (American Heart Association)</cite></a></li>
                <li className="resource"><a href="https://www.youtube.com/watch?v=PEIzWz-3q6s">Classical Music for People who hate Classical Music</a></li>
            </ul>
        </div>
    );
}

function SurveyEndingFour() {
    return (
        <div className="container">
            <h3>Coronavirus</h3>
            <p>You may be experiencing a symptom of COVID-19. However, symptoms of COVID-19 and the flu are similar. Please consult these resources below and if you are experiencing other COVID-19 related symptoms, be sure to get tested.</p>
            <h3>Resources</h3>
            <ul>
                <li className="resource"><a href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html">CDC Information about Coronavirus</a></li>
                <li className="resource"><a href="https://www.who.int/health-topics/coronavirus#tab=tab_1">WHO (World Health Organization) Coronavirus Information</a></li>
                <li className="resource"><a href="https://coronavirus.jhu.edu/">Addition Coronavirus Resources from John Hopkins University</a></li>
            </ul>
        </div>
    );
}

function SurveyEndingFive() {
    return (
        <div className="container">
            <h3>Flu (Influenza)</h3>
            <p>You may be experiencing a symptom of the flu. However, symptoms of the flu and COVID-19 are similar. Please consult these resources below and if you are experiencing other flu-related symptoms, take appropriate steps for treatment.</p>
            <h3>Resources</h3>
            <ul>
                <li className="resource"><a href="https://www.cdc.gov/flu/index.htm">CDC Influenza Information</a></li>
                <li className="resource"><a href="https://www.cdc.gov/flu/treatment/index.html">CDC Influenza Treatment Information</a></li>
            </ul>
        </div>
    );
}

function SurveyEndingSix() {
    return (
        <div className="container">
            <h3>Experiencing other symptoms?</h3>
            <p>If your symptom was not listed here, you are likely experiencing another illness. While this survey is by no means comprehensive, resources are provided below to guide you in the right direction to getting the help you need.</p>
            <h3>Resources</h3>
            <ul>
                <li className="resource"><a href="https://www.cdc.gov/DiseasesConditions/">Diseases and Conditions Listing by the <cite>CDC</cite></a></li>
                <li className="resource"><a href="https://symptoms.webmd.com/">WebMD Symptom Checker</a></li>
            </ul>
            <p><em>Note:</em> WebMd's Symptom Checker should not be taken with the same weight as a doctor's diagnosis. Please consult your doctor for a proper diagnosis.</p>
        </div>
    );
}