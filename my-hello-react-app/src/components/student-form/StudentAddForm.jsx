function StudentAddForm() {
  return (
    <>
      <div className="container m-5">
        <div className="row m-5">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="card">
              <form>
                <div className="card-header bg-success text-white">
                  ADD STUDENTS
                </div>
                <div className="card-body">
                  <div className="mb-3 mt-3">
                    <label for="sFirstName" className="form-label">
                      Student First Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="sFirstName"
                      placeholder="Enter First Name"
                      name="studFirstName"
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <label for="sLastName" className="form-label">
                      Student Last Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="sLastName"
                      placeholder="Enter Last Name"
                      name="studLastName"
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <label for="sDOB" className="form-label">
                      Student DOB:
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="sDOB"
                      name="studDOB"
                    />
                  </div>
                  <div>
                    <label for="sScore">Student Score:</label>
                    <select id="sScore" className="form-select">
                      <option>10</option>
                      <option>20</option>
                      <option>30</option>
                      <option>40</option>
                      <option>50</option>
                    </select>
                  </div>
                  <div className="mb-3 mt-3">
                    <label for="sImageUrl" className="form-label">
                      Student Image URL:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="sImageUrl"
                      placeholder="Enter Image Url"
                      name="studImageUrl"
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
