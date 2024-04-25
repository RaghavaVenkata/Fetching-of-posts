import React, { useState, useEffect } from 'react';

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => { setPosts(data); setLoading(false); })
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div>
            {loading ? (
                <div className="container">
                    <div className="row">
                        <div className="col d-flex justify-content-center my-5">
                            <div className="spinner-grow text-primary m-1" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow text-primary m-1" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow text-primary m-1" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="container">
                        <div className="row m-2">
                            {posts.map(post => (
                                <div key={post.id} className="col-sm-4 my-2">
                                    <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                                        <div className="card-body">
                                            <h5 className="card-title text-center h2">Id: {post.id}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted text-center">{post.title}</h6>
                                            <p className="card-text">{post.body}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                </>
            )}
        </div>
    );
}

export default App;
