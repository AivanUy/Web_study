import React from 'react'
import { HashRouter, Redirect, Route, Switch,useHistory } from 'react-router-dom'
import Films from './Films'
import Cinemas from './Cinemas'
import Center from './Center'
import NoFound from './NoFound'

export default function Filmapp(props) {
  return (
    <div>
      <button onClick={() => {
      window.location.href = "#/films"
      }}>Films</button>
      <button onClick={() => {
      window.location.href = "#/cinemas"
      }}>Cinemas</button>
      <button onClick={() => {
       window.location.href = "#/center"
      }}>Center</button>
      <HashRouter>
        <Switch>
          <Route path="/films:myid" component={Films} />
          <Route path="/cinemas" component={Cinemas} />
          <Route path="/center" component={Center} />

          <Redirect from="/" to="/films" exact />

          <Route component={NoFound} />
        </Switch>
      </HashRouter>
    </div>
  )
}
