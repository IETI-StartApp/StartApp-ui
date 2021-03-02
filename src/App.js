import React from "react";
import './App.css';
import {AuthProvider} from "./services/Auth";
import {LoginPage, Register, RegisterProjectPage} from "./pages";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
    return (
        <>
            <Router>
                <AuthProvider>
                    <Switch>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/register-project" component={RegisterProjectPage}/>
                        <Route path="/signin" component={Register}/>
                    </Switch>
                </AuthProvider>
            </Router>
        </>
    );
}

export default App;
