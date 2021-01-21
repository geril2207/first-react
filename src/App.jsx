import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header, Home, Todo, Calendar } from './components'
function App() {
  return (
    <Router>
      <div className="App">
        <Header
          items={[
            { name: 'Todo', path: '/todo' },
            { name: 'Calendar', path: '/calendar' },
          ]}
        />

        <Switch>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
