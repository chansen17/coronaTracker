import React from 'react';

const Cases = ({ cases }) => {
    return (
        <div className="cases data-panel">
            <div className="row">
                <div className="col-12">
                    <h3>Cases: <span id="casesData">{cases}</span></h3>
                </div>
            </div>
        </div>
    );
}

export default Cases;
