import React, {useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = "6a7e68e6fdb14bf0a20989a4bd63ef2d";

const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const Headlines = () => {
const [state, setState] = useState({
    trending: []
})
const trending = () => {
    axios.get(newsApiUrl)
        .then(({data}) => {
        let trending = data.articles;

        setState(prevState => {
            return {...prevState, trending: trending}
        })
        console.log(trending);
        })
    }

    useEffect(() => {
        trending();
    }, []);

    return (
        <div className="headlines">
            <div className="container">
                <div className="jumbotron">
                    <h1>Headlines</h1>
                    <p>Covid-19 topics and other trending news</p>
                </div>
                <div className="row">
                    {
                        state.trending.map(article => (
                            <div key={article.title} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="card">
                                    <img src={article.urlToImage} alt={`${article.title}`} className="card-img-top"/>
                                    <div className="card-body">
                                        <a href={article.url}><h6 className="card-title">{article.title}</h6></a>
                                        <hr/>
                                        <footer>
                                            <span className="badge badge-primary badge-pill">Author</span>
                                            {
                                                article.author ? <div><small>{article.author}</small></div> : <div><small>author unknown</small></div>
                                            }
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Headlines;
