import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import selecaoFilmes from "./pages/selecaoFilmes";
import resultadoCopa from "./pages/resultadoCopa";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={selecaoFilmes} />
            <Route path="/filmes" exact component={selecaoFilmes} />
            <Route path="/resultado" exact component={resultadoCopa} />
            <Route
                path="*"
                component={route => {
                    console.log(route);
                    return <h1>Page not found</h1>;
                }}
            />
        </Switch>
    </BrowserRouter>
);

export default Routes;