import React from 'react';
import axios from 'axios'
import StudentRow from './Student-Row'

export class StudentTable extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <StudentRow />
    )
  }

}
