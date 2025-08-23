import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";

const DatabaseTest = () => {
    const [students, setStudents] = useState([]);
    console.log(students)
    useEffect(() => {
        axios.get("http://localhost:5000/students")
            .then(response => setStudents(response.data))
            .catch(error => console.error(error));
    }, []);
    return (
        <div>
        <h1 class="custom-h1">Members</h1>
        <div style={{ display: "flex", justifyContent: "center", minHeight: "20vh" }}>
            <table className="table center-table">
            <thead>
                <tr>
                <th>Name</th>
                <th>Major</th>
                <th>Year</th>
                <th>Socials</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => (
                <tr key={student._id}>
                    <td >{student.name}</td>
                    <td >{student.major}</td>
                    <td >{student.year}</td>
                    <td> <a href={student.linkedin} target="_blank">
                        <FaLinkedin size={30} />
                      </a> <a href="https://discord.gg/Hhb4paWq" target="_blank">
                <FaDiscord size={30} />
                </a> <a href="https://github.com/colorstacksu" target="_blank">
                <FaGithub size={30} />
              </a></td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
      );
    
};

export default DatabaseTest;
