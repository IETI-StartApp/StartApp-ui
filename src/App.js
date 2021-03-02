import React from "react";
import './App.css';
import {AuthProvider} from "./services/Auth";
import RegisterForm from "./components/Register/RegisterForm";
import {LoginPage, RegisterForm, UserSelect, RegisterProjectPage} from "./pages";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
    return (
        <>
            <Router>
                <AuthProvider>
                    <Switch>  
                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/register-project" component={RegisterProjectPage}/>
                        <Route exact path="/signup" component = {RegisterForm}/>
                        <Route exact path="/userselect" component = {UserSelect}/>
                    </Switch>
                </AuthProvider>
            </Router>
        </>
    );
}

export default App;
