import './App.css';
import React from "react";
import {BaseLayout} from "./layout";
import {Home} from "./pages";
import {Redirect, Route, Switch, useHistory, withRouter} from "react-router-dom";
import {MovieDetails} from "./pages";


function App() {

    const history = useHistory();

    return (
        <div>
            <BaseLayout>
                <Switch>
                    <Route path={"/"} >
                        <Home/>
                    </Route>

                    <Route path="/movie/:id">
                            <MovieDetails/>
                    </Route>


                    <Redirect to={"/"}/>

                    {/*<Route>*/}
                    {/*    <h1>Page not found*/}
                    {/*        <button onClick={() => history.push("/")}>*/}
                    {/*            go home*/}
                    {/*        </button></h1>*/}
                    {/*</Route>*/}
                </Switch>
            </BaseLayout>
        </div>
    );
}

export default withRouter(App);
