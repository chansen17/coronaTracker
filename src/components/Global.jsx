import React from 'react';
import Cases from './Cases';
import Deaths from './Deaths';
import Recovered from './Recovered';
import RefreshButton from './RefreshButton';

const Global = ({ cases, deaths, recovered, getData }) => {
    return (
        <>
            <div className="global-data">
            <div className="jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h3>CoronaStatus</h3>
                            <p>Stats represent global active Covid-19 Cases, Recoveries and Deaths.</p>
                        </div>
                        <div className="col-md-4">
                            <RefreshButton getData={getData}/>
                        </div>
                    </div>
                </div>
            </div>
            <Cases cases={cases}/>
            <Recovered recovered={recovered}/>
            <Deaths deaths={deaths}/>
            </div>
        </>
    );
}

export default Global;
