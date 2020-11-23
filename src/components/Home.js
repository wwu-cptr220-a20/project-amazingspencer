import React, { Component } from 'react';
import covidImage from '../img/covid-19.jpg';
import washingHands from '../img/washing-hands.jpg';
import flags from '../img/flags.jpg';

// Use of Parallax class from https://www.npmjs.com/package/react-parallax
export default class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <main>
                    <div className="container">
                        <Overview />
                    </div>
                    <div className="container">
                        <Origin />
                    </div>
                    <div className="container">
                        <Symptoms />
                    </div>
                    <div className="container">
                        <Care />
                    </div>
                    <div className="container">
                        <Timeline />
                    </div>
                </main>
            </>
        );
    }
}

export function Header() {
    return (
        <header>
            <div className="parallax-section">
                <div className="container">

                    <h1>Welcome to CovidHub!</h1>
                    <h2>Your personal hub for all things COVID-19.</h2>
                </div>
            </div>
        </header>
    );
}

export function Overview() {
    return (
        <section id="overview">
            <h2 className="mt-5">Overview</h2>

            <p>Image Above: <cite><a href="https://www.dreamstime.com/">Copyright: (c) Wektorygrafika | Dreamstime.com</a></cite></p>
            <p>
                Around February 2020, rumors began to spread of a certain virus that could have
                devastading consequences. In March 2020, the coronavirus made its debut and had
                spread to the United States. In an attempt to slow the spread, the country was
                shut down for months and preventative measures were put into place to slow the
                spread. Now after being shut down, the country is beginning to reopen and
                businesses are opening their doors with preventative measures still in place.
                These preventive measures include wearing face masks and social distancing. As
                Americans are getting back into the office and perhaps going to the grocery store
                for the first time in months, Americans need to know the extent of this virus and
                what the stats of the coronavirus are.
            </p>

            <p>
                Currently, the <cite><a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">
                    CDC recommends</a></cite> that you wash your hands often, avoid close contact, cover your mouth and nose with a
            mask when around others, cover coughs and sneezes, clean and disinfect, and monitor your health daily to prevent
            contracting the coronavirus. <cite><a href="https://coronavirus.jhu.edu/map.html">John Hopkins University</a></cite> provides a global map of
            coronavirus hotspots and known locations. This site also includes number of cases, number of deaths, and trends
            for the virus.
            </p>

            <figure>
                <img src={covidImage} alt="Spray-paint of a mask and the words COVID-19." />
                <figcaption>Photo by <cite><a href="https://unsplash.com/@adamsky1973">Adam Nieścioruk</a></cite>.</figcaption>
            </figure>
        </section>
    );
}

export function Origin() {
    return (
        <section id="origin">
            <h2>Origin</h2>
            <p>
                The coronavirus originated in Wuhan, China. According to <cite><a
                    href="https://www.webmd.com/lung/coronavirus-history">WebMD</a></cite>, the coronavirus began in what is called
            a "wet-market," where fresh meat and fish is sold daily and some animals sold are killed on the spot.
            "Some wet markets sell wild or banned species like cobras, wild boars, and raccoon dogs. Crowded
            conditions can let viruses from different animals swap genes. Sometimes the virus changes so much it can
            start to infect and spread among people. Still, the Wuhan market didn't sell bats at the time of the
            outbreak. That’s why early suspicion also fell on pangolins, also called scaly anteaters, which are sold
            illegally in some markets in China. Some coronaviruses that infect pangolins are similar to SARS-CoV-2 (a coronavirus).
            As SARS-CoV-2 spread both inside and outside China, it infected people who have had no direct contact
            with animals. That meant the virus is transmitted from one human to another. It’s now spreading in the
            U.S. and around the globe, meaning that people are unwittingly catching and passing on the coronavirus."
            </p>
        </section>
    );
}

export function Symptoms() {
    return (
        <section id="symptoms">
            <h2>Symptoms</h2>
            <p>
                The coronavirus causes symptoms of shortness of breath or difficulty breathing, fever or chills, cough,
                fatigue, muscle or body aches, headache, new loss of taste or smell, sore throat, congestion or runny nose,
            nausea or vomiting, and diarrhea. Symptoms listed here are from the <cite><a
                    href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">CDC</a></cite>.
            </p>
            <p>
                Should you experience these symptoms, it is important to visit your doctor to get tested. The <cite><a
                    href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">CDC</a></cite> also
            highlights certain symtpoms that if experienced should be treated as soon as possible:
            </p>
            <ul>
                <li>Trouble breathing</li>
                <li>Persistent pain or pressure in the chest</li>
                <li>New confusion</li>
                <li>Inability to wake or stay awake</li>
                <li>Bluish lips or face</li>
            </ul>
        </section>
    );
}

export function Care() {
    return (
        <section id="care">
            <h2>Taking Care of Yourself</h2>
            <figure>
                <img src={washingHands} alt="A pair of hands being washed in the sink." />
                <figcaption>Photo by <cite><a href="https://unsplash.com/@fran_">Fran Jacquier</a></cite>.</figcaption>
            </figure>
            <p>
                The <cite><a
                    href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">CDC </a></cite>
            has recommendations for staying healthy and preventing people from contracting COVID-19.
            </p>
            <ul>
                <li>Know and Understand how COVID-19 spreads</li>
                <li>Wash your hands often</li>
                <li>Avoid close contact</li>
                <li>Cover your mouth and nose with a mask when around others</li>
                <li>Cover coughs and sneezes</li>
                <li>Clean and disinfect</li>
                <li>Monitor Your Health Daily</li>
            </ul>
            <p>
                According to the <cite><a
                    href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">CDC</a></cite>,
            the virus is thought to be spread primarily from person-to-person. This means that to spread from
            person to person, individuals are likely within 6 feet of each other, close to someone who is coughing
            or sneezing. When a person coughs or sneezes, respiratory droplets are produced and can travel through
            the air and into the mouths or noses of nearby people. Recent studies also suggest that COVID-19 may
            also be spread between people not showing symptoms.
            </p>
        </section>
    );
}

export function Timeline() {
    return (
        <section id="timeline">
            <h2>Timeline of the Coronavirus</h2>
            <figure>
                <img src={flags} alt="Flags of countries" />
                <figcaption>Photo by <cite><a href="https://unsplash.com/@kaung_myat_min">Kaung Myat Min</a></cite>.</figcaption>
            </figure>
            <p>
                The coronavirus began in Wuhan, China during late 2019. Since then, the virus has turned into a global
            pandemic that has ravaged the world. To put the extent of the virus into perspective, <cite><a
                    href="https://www.businessinsider.com/coronavirus-pandemic-timeline-history-major-events-2020-3?op=1">Business
            Insider</a></cite> has put together a timeline showing how the virus has spread since its
            beginning in Wuhan, China. Excerpts of the timeline are reproduced here:
            </p>
            <table className="table table-bordered table-striped">
                <caption>Timeline of Coronavirus events.</caption>
                <thead id="tableHead2">
                    <tr>
                        <th>Date</th>
                        <th>Event</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>December 31, 2019</td>
                        <td>
                            Chinese Health officials inform the WHO about a cluster of 41 patients with a
                            mysterious pneumonia. Most are connected to Huanan Seafood Wholesale Market.
                        </td>
                        </tr>
                        <tr>
                        <td>January 7, 2020</td>
                        <td>
                            Chinese authorities identify the virus that caused the pneumonia-like illness as a
                            new type of coronavirus (called novel coronavirus or nCoV).
                        </td>
                        </tr>
                        <tr>
                        <td>January 11, 2020</td>
                        <td>
                            China records its first death linked to the novel coronavirus.
                        </td>
                        </tr>
                        <tr>
                        <td>January 20, 2020</td>
                        <td>
                            The first US case is reported: a 35-year-old man in Snohomish County, Washington.
                        </td>
                        </tr>
                        <tr>
                        <td>January 30, 2020</td>
                        <td>
                            WHO declares a global public-health emergency.
                        </td>
                        </tr>
                        <tr>
                        <td>February 6, 2020</td>
                        <td>
                            A person in California dies from the coronavirus, the first known American death.
                        </td>
                        </tr>
                        <tr>
                        <td>March 8, 2020</td>
                        <td>
                            Italy places all 60 million of its residents on lockdown.
                        </td>
                        </tr>
                        <tr>
                        <td>March 11, 2020</td>
                        <td>
                            WHO declares the outbreak a pandemic.
                        </td>
                        </tr>
                        <tr>
                        <td>March 13, 2020</td>
                        <td>
                            Trump declares a national emergency.
                        </td>
                        </tr>
                        <tr>
                        <td>March 26, 2020</td>
                        <td>
                            Total confirmed cases in the US reach 82,404-the highest in the world-surpassing China's 81,782 and Italy's 80,589.
                        </td>
                        </tr>
                        <tr>
                        <td>April 10, 2020</td>
                        <td>
                            The global death toll surpasses 100,000.
                        </td>
                        </tr>
                        <tr>
                        <td>May 21, 2020</td>
                        <td>
                            The number of global COVID-19 cases surpasses 5 million.
                        </td>
                        </tr>
                        <tr>
                        <td>June 28, 2020</td>
                        <td>
                            The number of global COVID-19 cases surpasses 10 million, and global deaths surpass 500,000.
                        </td>
                        </tr>
                        <tr>
                        <td>September 22, 2020</td>
                        <td>
                            US deaths from COVID-19 top 200,000.
                        </td>
                        </tr>
                        <tr>
                        <td>September 28, 2020</td>
                        <td>
                            Global COVID-19 deaths surpass 1 million.
                        </td>
                        </tr>
                </tbody>
            </table>
        </section>
    );
}