import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Main from './Main';



function App() {
  const [students, setStudents] = useState([])
  useEffect(() => {
    fetch("http://localhost:9292/students")
    .then((response) => response.json())
    .then((data) => setStudents(data))
  }, []
  )
  const [teachers, setTeachers] = useState([])
  useEffect(() => {
    fetch("http://localhost:9292/teachers")
    .then((response) => response.json())
    .then((data) => setTeachers(data))
  },[]
  )


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main students={students} teachers={teachers}/>
        </Route>




      </Switch>
    </div>
  );
}

export default App;
