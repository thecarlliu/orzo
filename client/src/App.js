import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery1 from "./pages/Gallery1";
import Gallery2 from "./pages/Gallery2";
import Gallery3 from "./pages/Gallery3";


const App = () => (

    <Router>
        <div>
            <Header />

                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/medium1" component={Gallery1} />

                    <Route exact path="/medium2" component={Gallery2} />

                    <Route exact path="/medium3" component={Gallery3} />
                </Switch>

            <Footer />
        </div>
    </Router>

);

export default App;
