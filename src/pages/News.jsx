import React, {useState, useEffect} from 'react';
import axios from 'axios';

const newsApiUrl = "http://newsapi.org/v2/everything?q=covid-19&apiKey=41880d36e3e047c79e4e3b1112d94153";

const News = () => {
    const [state, setState] = useState({
        articles: []
    })
    const getNews = () => {
        axios.get(newsApiUrl)
            .then(({data}) => {
                let articles = data.articles;

                setState(prevState => {
                    return {...prevState, articles: articles}
                });
                // response test
                console.log(articles);
            })
    }

    useEffect(() => {
        getNews();
    }, [])
    // news api req

    return (
        <section className="about">
                <div className="container">
                    <h1>News Page</h1>
                    <div className="row">
                        {
                            state.articles.map(article => (
                                <div key={article.id} className="col-md-4">
                                    <div className="card">
                                        <img src={article.urlToImage} alt="article source image" className="card-img-top"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{article.title}</h5>
                                            <small>{article.source.name}</small>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
        </section>
    );
}

export default News;
