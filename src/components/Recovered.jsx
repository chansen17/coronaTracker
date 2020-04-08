import React from 'react';

const Recovered = ({ recovered }) => {
    return (
        <div className="recovered data-panel">
            <div className="row">
                <div className="col-12">
                    <h3>Recovered: <span id="recData">{recovered}</span></h3>
                </div>
            </div>
        </div>
    );
}

export default Recovered;
