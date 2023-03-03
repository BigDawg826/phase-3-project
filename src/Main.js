import React from 'react'
import {useState} from 'react';
import Studentcard from './Studentcard'
import TeacherCard from './TeacherCard'



function Main({students, teachers, handleTeacherDelete, addTeacher}) {

    const [studentId, setStudentId] = useState("")
    const [teacherId, setTeacherId] = useState("")
    const [date, setDate] = useState("")
    const [comment, setComment] = useState("")
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [sex, setSex] = useState("")
    const [showTeacherForm, setShowTeacherForm] = useState(true)

   

    
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

    function teacherHandleSubmit(e){
        e.preventDefault()
        let formData = {
            last_name:lastName,
            first_name:firstName,
            sex_m_or_f: sex
    }
    fetch("http://localhost:9292/teachers", {
            method: "POST", 
            headers: {
                "Content-Type" : "application/json"
            }, 
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) =>{ 
            addTeacher(data)
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
    <br></br>
    {showTeacherForm && <form onSubmit={teacherHandleSubmit}>
    <label><input type="submit" value="Add a teacher" /></label>
    <br></br>
        <label>Last name: <input onChange={(e)=>setLastName(e.target.value)} value={lastName} type="text"/></label>
        <label>First name: <input onChange={(e)=>setFirstName(e.target.value)} value={firstName} type="text"/></label>
        <label>sex: <input onChange={(e)=> setSex(e.target.value)} value={sex} type="text"/></label>
    </form>}
    <div>
        <p>Student Incident Referral</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="student">Student ID: <input onChange={(e)=> setStudentId(e.target.value)} value={studentId} id="student" type="number" name="ID"/>
            </label>
            <label htmlFor='teacher'>Teacher ID: <input onChange={(e)=>setTeacherId(e.target.value)} value={teacherId}type="number" name="ID"/>
            </label>
            <label htmlFor='date'>Date: <input onChange={(e)=>setDate(e.target.value)} value={date} type="datetime-local" date="date" />
            </label>
            <label htmlFor='comment'>Comments <input onChange={(e)=>setComment(e.target.value)} value={comment} type="text" comments="comments"/>
            </label>
            <label><input type="submit" value="Submit" /></label>
        </form>
    </div>
    </>
  )
  }

export default Main