import React from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ChartContex from './components/ChartContex';
import ChartLinks from './components/ChartLinks';
import Overview from './components/Overview';
import StudentData from './components/StudentData'
import data from './components/StudentData';

console.log(data)

const ChartDashboard = (myData, filter) => {
  return myData.filter(item => {
    return item.assignment.includes(filter)
  })
}

const StudentDashboard = (myData) => {
  const profiles = []
  myData.forEach(item => {
    if (!profiles.includes(item.name)) {
      profiles.push(item.name)
    }
  })
  return profiles
}
function App() {
  const myData = ChartDashboard(StudentData, "")
  const profiles = StudentDashboard(StudentData)
  return (
    <Router>
      <header className="Header">
        <h1>React Student Dashboard</h1>
      </header>
      
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Profiles">Profiles</Link>
          </li>
        </ul>
      </nav>
    
      <main>
        <Switch>
          <Route path="/Profiles/Student/:name"
          render={(props) => <ChartContex {...props} myData={myData} />}
          />
          <Route path="/Profiles/">
            <ChartLinks profiles={profiles} />
          </Route>
          <Route path="/">
            <Overview
              myData={myData}
              profiles={profiles} />
          </Route>
        </Switch>
      </main>
    </Router>

  );
}
export default App;
