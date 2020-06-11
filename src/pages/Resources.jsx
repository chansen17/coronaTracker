import React from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
    return (
        <div className="resources">
            <div className="container">
            <div className="jumbotron">
                <h1>Resources</h1>
            </div>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link href="https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/Immunization/ncov2019.aspx">California Department of Public Health</Link>
                </li>
                <li className="list-group-item">
                    <Link href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html">Centers for Disease Control and Prevention</Link>
                </li>
                <li className="list-group-item">
                    <Link href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">World Health Organization</Link>
                </li>

                {/*  */}

                <li className="list-group-item">
                    <Link href="https://asm.org/Press-Releases/2020/COVID-19-Resources">American Society for Microbiology</Link>
                </li>
                <li className="list-group-item">
                    <Link href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/checklist-household-ready.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fcommunity%2Fhome%2Findex.html">CDC prepareness checklist</Link>
                </li>
                <li className="list-group-item">
                    <Link href="https://www.osha.gov/SLTC/covid-19/">Osha</Link>
                </li>
                <li className="list-group-item">
                    <Link href="https://www.google.com/covid19/">Google Covid-19 Information and Resources</Link>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default Resources;
