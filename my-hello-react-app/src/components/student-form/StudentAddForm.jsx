import { useState } from "react";

function StudentAddForm() {

  //let [count, setCount] = useState(0);
  let [student, setStudent] = useState({
    studId: 0,
    studFirstName: '',
    studLastName: '',
    studDOB: '',
    studScore: 0,
    studImageUrl: ''
  });

  let [errors, setErrors] = useState({});

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    // use object destructuring to take out name and value from e.target
    let { name, value } = e.target;
    // above line is equivalent to the below 2 lines
    //let name = e.target.name;
    //let value = e.target.value;
    // now update the state variable student using setStudent
    setStudent({...student , [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // this will prevent the form from being submitted to the server

    // now all the form data is captured in student state variable
    // so perform validations on the student state variable
    // for this we will create a validationErrors object which will store all the validation errors
    const validationErrors = {};

    if(!student.studFirstName.trim()){
      validationErrors.studFirstName = "Student First Name is Required!";
    }
    if(!student.studLastName.trim()){
      validationErrors.studLastName = "Student Last Name is Required!";
    }
    if(!student.studDOB.trim()){
      validationErrors.studDOB = "Student DOB is Required!";
    }
    if(student.studScore == 0){
      validationErrors.studScore = "Student Score is required";
    }

    // now will store the validationErrors object in a state variable errors
    setErrors(validationErrors);

    //if the the state variable errors remains empty with no properties, it means 
       //the validations were sucessful and the form data can be sent/submitted
    if(Object.keys(validationErrors).length === 0){
        alert("form validation succes and form data can be sent...");
    }
  }

  return (
    <>
      <div className="container m-5">
        <div className="row m-5">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="card">
              <form onSubmit={handleSubmit}>
                <div className="card-header bg-success text-white">
                  ADD STUDENTS
                </div>
                <div className="card-body">
                  <div className="mb-3 mt-3">
                    <label htmlFor="sFirstName" className="form-label">
                      Student First Name:*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="sFirstName"
                      placeholder="Enter First Name"
                      name="studFirstName"
                      onChange={handleChange}
                    />
                    {errors.studFirstName && <h6><span className="badge bg-danger">{errors.studFirstName}</span></h6>}
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="sLastName" className="form-label">
                      Student Last Name:*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="sLastName"
                      placeholder="Enter Last Name"
                      name="studLastName"
                      onChange={handleChange}
                    />
                    {errors.studLastName && <h6><span className="badge bg-danger">{errors.studLastName}</span></h6>}
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="sDOB" className="form-label">
                      Student DOB:*
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="sDOB"
                      name="studDOB"
                      onChange={handleChange}
                    />
                    {errors.studDOB && <h6><span className="badge bg-danger">{errors.studDOB}</span></h6>}
                  </div>
                  <div>
                    <label htmlFor="sScore">Student Score:*</label>
                    <select id="sScore" className="form-select" name="studScore" onChange={handleChange}>
                      <option value="0">--select--</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="40">40</option>
                      <option value="50">50</option>
                    </select>
                    {errors.studScore && <h6><span className="badge bg-danger">{errors.studScore}</span></h6>}
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="sImageUrl" className="form-label">
                      Student Image URL:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="sImageUrl"
                      placeholder="Enter Image Url"
                      name="studImageUrl"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="card-footer bg-success">
                  <button
                    type="submit"
                    className="btn btn-primary bg-white text-success mx-5"
                  >
                    ADD
                  </button>
                  <button
                    type="reset"
                    className="btn btn-primary bg-white text-success mx-5"
                  >
                    CLEAR
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
}
export default StudentAddForm;
