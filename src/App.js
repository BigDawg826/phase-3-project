import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Main from './Main';



function App() {
  const [students, setStudents] = useState([])
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/students")
    .then((response) => response.json())
    .then((data) => setStudents(data))
  }, []
  )
  
  useEffect(() => {
    fetch("http://localhost:9292/teachers")
    .then((response) => response.json())
    .then((data) => setTeachers(data))
  },[]
  )

  function handleTeacherDelete(id){
    setTeachers(prev => prev.filter(teacher => id !== teacher.id))
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main students={students} teachers={teachers} handleTeacherDelete={handleTeacherDelete}/>
        </Route>




      </Switch>
    </div>
  );
}

export default App;
