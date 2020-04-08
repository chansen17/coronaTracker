import React from 'react';

const Resources = () => {
    return (
        <div className="resources">
            <ul className="list-group">
                <li className="list-group-item">
                    <a rel="noopener noreferrer" target="_blank" href="https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/Immunization/ncov2019.aspx">California Department of Public Health</a>
                </li>
                <li rel="noopener noreferrer" className="list-group-item">
                    <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html">Centers for Disease Control and Prevention</a>
                </li>
                <li rel="noopener noreferrer" className="list-group-item">
                    <a target="_blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">World Health Organization</a>
                </li>
            </ul>
        </div>
    );
}

export default Resources;
