import React from 'react';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="jumbotron">
                        <h1>About CoronaStatus</h1>
                        <p>CoronaStatus aims to be a <strong className="strong">secondary</strong> one stop source for all things corona virus.</p>
                        <p>Including Corona virus statistics, headline news and additional resources.</p>
                    <div className="api-source">
                        <h1>API provided by: <a target="_blank" href="https://github.com/javieraviles/covidAPI">javieraviles</a></h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
