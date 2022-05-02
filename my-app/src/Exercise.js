import React from 'react'
//an exercise is a name(ID) and number and weight or nonweight and workoutID (A or B)

export default function Exercise(props) {
  return (
    <div>
      {props.name}
      {props.workoutId}
      {props.type}
      {props.value}
    </div>
  )
}
