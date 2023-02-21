import { useEffect, useState } from 'react';
import './App.css';
import Student from './component/Student';
import { studentData } from './data';


function App() {
  // console.log(studentData);    
  const[students, setStudentData] = useState(studentData);
  return (
    <div className="App">
      {/* <h2>STUDENT DATA</h2>
      <Student students={students} title='List of Students' /> */}
      <h1> List of Students</h1>
      <div>
      {students.map( (student) => (
        <Student key={student.id}
        student={student} />
      ))}
      </div>
    </div>
  );
}

export default App;
