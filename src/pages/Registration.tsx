function SelectRole() {
  return (
    <>
      <label htmlFor="userrole">Choose a role:</label>
      <select name="userrole" id="roles">
        <option value="student">Student</option>
        <option value="trainer">Trainer</option>
      </select>
    </>
  )
}

function FirstName() {
  return (
    <div className="form-outline">
      <label id="firstNameLable" htmlFor="first name" className="Form-label">
        First name
        <span className="form-required">*</span>
      </label>
      <div className="input-container">
        <input
          type="text"
          id="name"
          name="first name"
          // className="form-control"
        />
      </div>
    </div>
  )
}

function LastName() {
  return (
    <div className="form-outline">
      <label id="lastNameLable" htmlFor="last name" className="Form-label">
        Last name
        <span className="form-required">*</span>
      </label>
      <div className="input-container">
        <input
          type="text"
          id="name"
          name="last name"
          // className="form-control"
        />
      </div>
    </div>
  )
}

function SubmitButton() {
  return (
    <div className="form-group">
      <button type="button" className="btn btn-primary btn-block mb-8">
        Submit
      </button>
    </div>
  )
}

export const Registration: React.FC = () => {
  return (
    <>
      <header className="Login-header">
        <p>Registration</p>
        <SelectRole />
        <FirstName />
        <LastName />
        <SubmitButton />
      </header>
    </>
  )
}
