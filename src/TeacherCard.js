import React from 'react'

function TeacherCard({firstName, lastName, id, handleTeacherDelete}) {

  

    

  return (
    <div>
       {id} {firstName} {lastName} <button onClick={handleTeacherDelete}>X</button>
    </div>
  )
}

export default TeacherCard