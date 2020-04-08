import React from 'react';

const RefreshButton = ({ getData}) => {
    return (
        <button id="refreshBtn" className="btn btn-warning" onClick={getData}>
            Refresh Global Cases
        </button>
    );
}

export default RefreshButton;
