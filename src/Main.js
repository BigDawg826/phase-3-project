import React from 'react'
import {useState} from 'react';
import Studentcard from './Studentcard'
import TeacherCard from './TeacherCard'



function Main({students, teachers}) {

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
        return <TeacherCard key={teacher.id} id={teacher.id} firstName={teacher.first_name} lastName={teacher.last_name}/>
        }
    )
    
    
  return (
    <>
    <div>
        <p>Inmates</p>
        {studentName}
        <br></br>
        <p>Taskmasters</p>
        {teacherName}
    </div>
    <div>
        <p>Student Referral</p>
        <form>
            <label>Student ID: <input onChange={handleSetStudent_id} value={student_id} type="text" name="ID"/>
            </label>
            <label>Teacher ID: <input onChange={handleSetTeacher_id}value={teacher_id}type="text" name="ID"/>
            </label>
            <label>Date: <input onChange={handleSetDate}value={date}type="text" date="date" />
            </label>
            <label>Comments <input onChange={handleSetComment}value={comment}type="text" comments="comments" />
            </label>
            <label><input type="submit" value="Submit" /></label>
        </form>
    </div>
    </>
  )
  }

export default Main