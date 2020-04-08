import React from 'react';

const Deaths = ({ deaths }) => {
    return (
        <div className="deaths data-panel">
            <div className="row">
                <div className="col-12">
                    <h3>Deaths: <span id="deathsData">{deaths}</span></h3>
                </div>
            </div>
        </div>
    );
}

export default Deaths;
