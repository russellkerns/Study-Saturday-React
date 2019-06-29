import React from 'react';
import axios from 'axios';
import StudentTable from './Student-Table';


export class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      isSelected: false
    }
  }

  render(){
    return (
      <StudentTable />
    )
  }
}
