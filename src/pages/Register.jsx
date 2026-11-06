
import { useState } from "react";
import "./Register.css";

function Register() {
  const [student, setStudent] = useState({
    name: "",
    dept: "",
    age: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="register-page">

      <div className="register-container">

        <h1>Student Registration</h1>
        <p>Enter your details to register</p>

        <form onSubmit={handleSubmit}>

          <label>Student Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={student.name}
            onChange={handleChange}
            required
          />

          <label>Department</label>
          <select
            name="dept"
            value={student.dept}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Electronics">Electronics</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
          </select>

          <label>Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            min="1"
            max="120"
            value={student.age}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Register Student
          </button>

        </form>

        {submitted && (
          <div className="success-message">
            <h3>Registration Successful!</h3>
            <p>Name: {student.name}</p>
            <p>Department: {student.dept}</p>
            <p>Age: {student.age}</p>
          </div>
        )}

      </div>

    </div>
  );
}

export default Register;
