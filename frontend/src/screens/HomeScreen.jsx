import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsList from "../components/NewsList/NewsList.jsx";

const HomeScreen = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <br/>
            <h1>New York Times Top Stories</h1>
            <hr/>
            <NewsList />
        </div>
    )
}

export default HomeScreen;