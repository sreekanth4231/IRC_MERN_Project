// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [studentName, setStudentName] = useState("");
//   const [grade, setGrade] = useState("");
//   const [subject, setSubject] = useState("");
//   const [date, setDate] = useState("");
//   const [studentDB, setStudentDB] = useState([]);

//   const API_URL = "https://irc-mern-project.onrender.com/api/students";




//   // This is for Create 
//   const create = async () => {
//     try {
//       const res = await axios.post(API_URL, {
//         studentName,
//         grade,
//         subject,
//         createAt: date,
//       });
//       setStudentDB([...studentDB, res.data.data]);
//       setStudentName("");
//       setGrade("");
//       setSubject("");
//       setDate("");
//     } catch (err) {
//       console.error("Error creating:", err.message);
//     }
//   };

//   //This is to get all the student
//   const get = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       setStudentDB(res.data); 
//     } catch (err) {
//       console.error("Error fetching:", err.message);
//     }
//   };

//   //The following code is for Deleting

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
//       <input
//         type="text"
//         placeholder="Grade"
//         value={grade}
//         onChange={(e) => setGrade(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Subject"
//         value={subject}
//         onChange={(e) => setSubject(e.target.value)}
//       />
//       <input
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//       />

      
//         <button onClick={create}>Add</button>
      

//       <h3>All Students</h3>
//       <ul>
//         {studentDB.map((s) => (
//           <li key={s._id}>
//             {s.studentName} - {s.grade} - {s.subject} - {s.createAt?.slice(0,10)}
//             <button
//               onClick={() => {
//                 setEdit(s._id);
//                 setStudentName(s.studentName);
//                 setGrade(s.grade);
//                 setSubject(s.subject);
//                 setDate(s.createAt?.slice(0,10));
//               }}
//             >
              
//             </button>
//             <button onClick={() => deleted(s._id)}>Delete</button>
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

  // Create student
  const create = async () => {
    try {
      const res = await axios.post(API_URL, {
        studentName,
        grade,
        subject,
        createAt: date,
      });

      setStudentDB([...studentDB, res.data.data]);

      // Clear input fields
      setStudentName("");
      setGrade("");
      setSubject("");
      setDate("");
    } catch (err) {
      console.error("Error creating:", err.message);
    }
  };

  // Get all students
  const get = async () => {
    try {
      const res = await axios.get(API_URL);
      setStudentDB(res.data);
    } catch (err) {
      console.error("Error fetching:", err.message);
    }
  };

  // Delete student
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
    <div style={{ padding: "20px" }}>
      <h2>Student Portal</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <br /><br />

      <button onClick={create}>Add</button>

      <h3>All Students</h3>

      <ul>
        {studentDB.map((s) => (
          <li key={s._id}>
            {s.studentName} - {s.grade} - {s.subject} -{" "}
            {s.createAt?.slice(0, 10)}
            <button onClick={() => deleted(s._id)} style={{ marginLeft: "10px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
