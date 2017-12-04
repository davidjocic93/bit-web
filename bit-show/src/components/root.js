import React from "react";
import { Switch, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import MainPage from "./mainPage";
import SingleShowPage from "./singleShowPage";
import Header from "../components/common/header";

class Root extends React.Component {
    // constructor(props) {
    //     super(props);

    // }


    render() {

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/:id" component={SingleShowPage} />
                </Switch>
            </div>
        );
    }
}

export default Root;