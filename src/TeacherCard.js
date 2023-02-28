import React from 'react'

function TeacherCard({firstName, lastName, id}) {
  return (
    <div>
       {id} {firstName} {lastName} 
    </div>
  )
}

export default TeacherCard