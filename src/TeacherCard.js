import React from 'react'

function TeacherCard({firstName, lastName, id, handleTeacherDelete}) {

  function onDelete(id){
    fetch(`http://localhost:9292/teacher/${id}`, {
    method: "DELETE", 
})
.then(() => handleTeacherDelete(id)) 
}

  return (
    <div>
       {id} {firstName} {lastName} <button onClick={()=>onDelete(id)}>X</button>
    </div>
  )
}

export default TeacherCard