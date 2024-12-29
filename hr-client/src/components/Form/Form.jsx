// import React, { useState } from 'react';
// import "./Form.css";
// import InputOutline from '../InputOutline/InputOutline';
// import Checkbox from '../Checkbox/Checkbox';

// const Form = ({ type = "candidate", onSave }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [resume, setResume] = useState(null);
//   const [isChecked, setIsChecked] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleNameChange = (e) => setName(e.target.value);
//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handlePhoneChange = (e) => setPhone(e.target.value);
//   const handleResumeChange = (e) => setResume(e.target.files[0]);
//   const handleCheckboxChange = (e) => setIsChecked(e.target.checked);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name || !email || !phone || (type === 'candidate' && !resume)) {
//       setError('All fields are required');
//       return;
//     }

//     const formData = { name, email, phone, resume };

//     // Pass form data back to the parent component (Candidates page)
//     onSave(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className='formBox'>
//         <InputOutline
//           label
//           labelText="Full Name"
//           id="name"
//           type="text"
//           value={name}
//           onChange={handleNameChange}
//           placeholder="Enter your name"
//           required
//         />
//         <InputOutline
//           label
//           labelText="Email Address"
//           id="email"
//           type="email"
//           value={email}
//           onChange={handleEmailChange}
//           placeholder="Enter your email"
//           required
//         />
//         <InputOutline
//           label
//           labelText="Phone Number"
//           id="phone"
//           type="tel"
//           value={phone}
//           onChange={handlePhoneChange}
//           placeholder="Enter your phone number"
//           required
//         />
//         {type === 'candidate' && (
//           <InputOutline
//             label
//             labelText="Resume"
//             id="resume"
//             type="file"
//             onChange={handleResumeChange}
//             required
//           />
//         )}

//         {type === 'candidate' && resume && <p>Uploaded File: {resume.name}</p>}
//       </div>

//       {type === 'candidate' && (
//         <Checkbox
//           id="agree"
//           labelText="I agree to the terms and conditions"
//           checked={isChecked}
//           onChange={handleCheckboxChange}
//         />
//       )}

//       <button type="submit" className='candidatesSaveButton' disabled={loading}>
//         {loading ? 'Saving...' : 'Save'}
//       </button>

//       {error && <p className="error">{error}</p>}
//     </form>
//   );
// };

// export default Form;
