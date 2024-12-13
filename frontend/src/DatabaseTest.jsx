import React, { useEffect, useState } from "react";
import axios from "axios";

const DatabaseTest = () => {
    const [students, setStudents] = useState([]);
    console.log(students)
    useEffect(() => {
        axios.get("http://localhost:5000/students")
            .then(response => setStudents(response.data))
            .catch(error => console.error(error));
    }, []);
    return (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr >
                <td key={student._id}>{student.name}</td>
                <td key={student._id}>{student.name}</td>
                <td key={student._id}>{student.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    
};

export default DatabaseTest;
