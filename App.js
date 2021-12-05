import React from 'react';
import Login from "./Login";
import './App.css';
import { Switch, Route } from "react-router-dom";
import Layout from './Layout';

function App() {
    return (
        <Layout>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Login />
            )}
          />
        </Switch>
        </Layout>
    );
}
export default App;