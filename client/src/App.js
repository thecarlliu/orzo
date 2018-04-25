import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

const App = () => (

    <Router>
        <div>
            <Header />

                <Switch>
                    <Route exact path="/" component={Home}/>

                    <Route exact path="/medium1" component={Gallery}/>

                    <Route exact path="/medium2" component={Gallery}/>

                    <Route exact path="/medium3" component={Gallery}/>
                </Switch>

            <Footer />
        </div>
    </Router>

);

export default App;
