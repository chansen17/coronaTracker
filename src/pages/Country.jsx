import React from 'react';

const Country = ( { countryData }) => {
    return (
        <div className="country-data">
            <div className="container">
            <div className="jumbotron">
                <h1>Covid-19 by country</h1>
            </div>
            <div className="row">
                {
                    countryData.map(country => (
                        <div key={country.country} className="col-lg-6 col-md-12 text-center">
                            <h4 className="country-title">{country.country}</h4>
                            <ul className="list-group-flush">
                                <li className="list-group-item">cases - {country.cases}</li>
                                <li className="list-group-item">todays cases - {country.todayCases}</li>
                                <li className="list-group-item">total deaths - {country.deaths}</li>
                                <li className="list-group-item">todays deaths - {country.todayDeaths}</li>                            
                                <li className="list-group-item">recovered - {country.recovered}</li>
                                <li className="list-group-item">active - {country.active}</li>
                                <li className="list-group-item">critical - {country.critical}</li>
                                <li className="list-group-item">cases / 1m - {country.casesPerOneMillion}</li>
                                <li className="list-group-item">deaths / 1m - {country.deathsPerOneMillion}</li>
                                <li className="list-group-item">first case - {country.firstCase}</li>
                            </ul>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    );
}

export default Country;
