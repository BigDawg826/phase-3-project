import React from 'react'
import {useState} from 'react';
import Studentcard from './Studentcard'
import TeacherCard from './TeacherCard'



function Main({students, teachers, setTeachers}) {

    const [student_id, setStudent_id] = useState("")
    const [teacher_id, setTeacher_id] = useState("")
    const [date, setDate] = useState("")
    const [comment, setComment] = useState("")

    function handleSetStudent_id(e) {
        setStudent_id(e.target.value)
    }
    function handleSetTeacher_id(e) {
        setTeacher_id(e.target.value)
    }
    function handleSetDate(e) {
        setDate(e.target.value)
    }
    function handleSetComment(e) {
        setComment(e.target.value)
    }

    
    let studentName = students.map(student => {
        return <Studentcard key={student.id} id={student.id} firstName={student.first_name} lastName={student.last_name}/>
        }
    )
    let teacherName = teachers.map(teacher => {
        return <TeacherCard key={teacher.id} id={teacher.id} firstName={teacher.first_name} lastName={teacher.last_name} handleTeacherDelete={handleTeacherDelete}/>
        }
    )
    
    function handleTeacherDelete(id){
        fetch(`http://localhost:9292/teacher/${id}`, {
        method: "DELETE", 
    }
    .then(function handleDelete(id) {
        setTeachers(prev => prev.filter(user => id !== user.id))
    })
    )}

    function handleSubmit(e){
        e.preventDefault()
        let formData = {
            student_id,
            teacher_id,
            comment
        }
        fetch("http://localhost:9292/teacher_referrals", {
            method: "POST", 
            headers: {
                "Content-Type" : "application/json"
            }, 
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
        } )
    }



  return (
    <>
    <div>
        <h1>SCF/FlatIron Last Chance School</h1>
        <br></br>
        <p>Inmates</p>
        {studentName}
        <br></br>
        <p>Taskmasters</p>
        {teacherName}
    </div>
    <div>
        <p>Student Incident Referral</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="student">Student ID: <input onChange={handleSetStudent_id} value={student_id} id="student" type="text" name="ID"/>
            </label>
            <label htmlFor='teacher'>Teacher ID: <input onChange={handleSetTeacher_id}value={teacher_id}type="text" name="ID"/>
            </label>
            <label htmlFor='date'>Date: <input onChange={handleSetDate}value={date}type="text" date="date" />
            </label>
            <label htmlFor='comment'>Comments <input onChange={handleSetComment}value={comment}type="text" comments="comments" />
            </label>
            <label><input type="submit" value="Submit" /></label>
        </form>
    </div>
    </>
  )
  }

export default Main