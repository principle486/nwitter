import { useState } from "react";
import { HashRouter as Router, route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
    const [isLoggedin, setIsLoggedIn] = useState(true);
    return (
        <Router>
            <Switch>
                {isLoggedin ? (
                    <Router exact path = "/">
                        <Home />
                    </Router>
                ) :  (
                    <Router exact path = "/">
                        <Auth />
                    </Router>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;