

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [studentName, setStudentName] = useState("");
//   const [grade, setGrade] = useState("");
//   const [subject, setSubject] = useState("");
//   const [date, setDate] = useState("");
//   const [studentDB, setStudentDB] = useState([]);

//   const API_URL = "https://irc-mern-project.onrender.com/api/students";

//   // Create student
//   const create = async () => {
//     try {
//       const res = await axios.post(API_URL, {
//         studentName,
//         grade,
//         subject,
//         createAt: date,
//       });

//       setStudentDB([...studentDB, res.data.data]);

//       // Clear input fields
//       setStudentName("");
//       setGrade("");
//       setSubject("");
//       setDate("");
//     } catch (err) {
//       console.error("Error creating:", err.message);
//     }
//   };

//   // Get all students
//   const get = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       setStudentDB(res.data);
//     } catch (err) {
//       console.error("Error fetching:", err.message);
//     }
//   };

//   // Delete student
//   const deleted = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       setStudentDB(studentDB.filter((s) => s._id !== id));
//     } catch (err) {
//       console.error("Error deleting:", err.message);
//     }
//   };

//   useEffect(() => {
//     get();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Student Portal</h2>

//       <input
//         type="text"
//         placeholder="Student Name"
//         value={studentName}
//         onChange={(e) => setStudentName(e.target.value)}
//       />
//       <br />

//       <input
//         type="text"
//         placeholder="Grade"
//         value={grade}
//         onChange={(e) => setGrade(e.target.value)}
//       />
//       <br />

//       <input
//         type="text"
//         placeholder="Subject"
//         value={subject}
//         onChange={(e) => setSubject(e.target.value)}
//       />
//       <br />

//       <input
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//       />
//       <br /><br />

//       <button onClick={create}>Add</button>

//       <h3>All Students</h3>

//       <ul>
//         {studentDB.map((s) => (
//           <li key={s._id}>
//             {s.studentName} - {s.grade} - {s.subject} -{" "}
//             {s.createAt?.slice(0, 10)}
//             <button onClick={() => deleted(s._id)} style={{ marginLeft: "10px" }}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [studentName, setStudentName] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [studentDB, setStudentDB] = useState([]);

  const API_URL = "https://irc-mern-project.onrender.com/api/students";

  const create = async () => {
    try {
      const res = await axios.post(API_URL, {
        studentName,
        grade,
        subject,
        createAt: date,
      });

      setStudentDB([...studentDB, res.data.data]);

      setStudentName("");
      setGrade("");
      setSubject("");
      setDate("");
    } catch (err) {
      console.error("Error creating:", err.message);
    }
  };

  const get = async () => {
    try {
      const res = await axios.get(API_URL);
      setStudentDB(res.data);
    } catch (err) {
      console.error("Error fetching:", err.message);
    }
  };

  const deleted = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setStudentDB(studentDB.filter((s) => s._id !== id));
    } catch (err) {
      console.error("Error deleting:", err.message);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="container">
      <h2>Student Portal</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        className="input-box"
      />

      <input
        type="text"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        className="input-box"
      />

      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="input-box"
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="input-box"
      />

      <button onClick={create} className="btn-add">Add</button>

      <h3>All Students</h3>

      <ul style={{ paddingLeft: 0 }}>
        {studentDB.map((s) => (
          <li key={s._id} className="student-item">
            <span>
              {s.studentName} - {s.grade} - {s.subject} - {s.createAt?.slice(0, 10)}
            </span>

            <button onClick={() => deleted(s._id)} className="btn-delete">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
