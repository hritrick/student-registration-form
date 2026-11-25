import { useState } from 'react';

function App() {
  // 1. One state object for all form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    isTermsAccepted: false,
  });

  // State to store and display submitted details
  const [submittedData, setSubmittedData] = useState(null);

  // 2. One common handleChange for text inputs and checkbox
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // 3. Validation rule: all fields filled and checkbox checked
  const isFormValid =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.isTermsAccepted;

  // 4. Handle submit with preventDefault
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="container">
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
          />
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="isTermsAccepted"
              checked={formData.isTermsAccepted}
              onChange={handleChange}
            />
            I accept the terms
          </label>
        </div>

        {/* 5. Submit button disabled until validation passes */}
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>

      {/* 6. Display submitted details below the form */}
      {submittedData && (
        <div className="result-card">
          <h3>Submitted Details</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Terms Accepted:</strong> {submittedData.isTermsAccepted ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default App;
