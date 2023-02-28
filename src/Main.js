import React from 'react'
import {useState} from 'react';
import Studentcard from './Studentcard'
import TeacherCard from './TeacherCard'



function Main({students, teachers, handleTeacherDelete}) {

    const [studentId, setStudentId] = useState("")
    const [teacherId, setTeacherId] = useState("")
    const [date, setDate] = useState("")
    const [comment, setComment] = useState("")

    function handleSetStudentId(e) {
        setStudentId(e.target.value)
    }
    function handleSetTeacherId(e) {
        setTeacherId(e.target.value)
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
    
    

    function handleSubmit(e){
        e.preventDefault()
        let formData = {
            student_id:studentId,
            teacher_id:teacherId,
            date,
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
        <p>Students</p>
        {studentName}
        <br></br>
        <p>Taskmasters</p>
        {teacherName}
    </div>
    <div>
        <p>Student Incident Referral</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="student">Student ID: <input onChange={handleSetStudentId} value={studentId} id="student" type="number" name="ID"/>
            </label>
            <label htmlFor='teacher'>Teacher ID: <input onChange={handleSetTeacherId}value={teacherId}type="number" name="ID"/>
            </label>
            <label htmlFor='date'>Date: <input onChange={handleSetDate}value={date}type="datetime-local" date="date" />
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