import React from 'react'

function Studentcard({firstName, lastName, id}) {
  return (
    <div>
       {id} {firstName} {lastName}
    </div>
  )
}

export default Studentcard