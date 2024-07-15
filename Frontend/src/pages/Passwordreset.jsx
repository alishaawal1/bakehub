// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { forgotPassword } from '../apis/Api';
// import { toast } from 'react-toastify';

// const Reset = () => {
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();

//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         forgotPassword({email}).then(res=>{
//             toast.success("Check your email for password reset link")
//         }).catch(err=>{
//             console.log(err)
//             toast.error('Something went wrong')
//         })
   

//     // Validate email or perform necessary checks before sending a reset email
//     if (!email) {
//       // You can display an error message or use toast notifications here
//       console.error('Email is required for password reset.');
//       return;
//     }

//     // Handle password reset logic here
//     console.log('Password reset email sent to:', email);

//     // Clear the form field
//     setEmail('');

//     // Navigate to a confirmation page or display a message
//     navigate('/password_reset_confirmation');
//   };

//   return (
//     <div className='d-flex align-items-center'>
//       <form>
//         <h1>Send Password Reset Email</h1>
//         <label htmlFor="email">Email</label>
//         <input
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           name="email"
//           id="email"
//           className='form-control'
//           value={email}
//         />

//         <button style={{
//             padding: '10px',
//             backgroundColor: '#262828',
//             color: '#fff',
//             border: "5px",
//             cursor: 'pointer',
//             marginTop: '10px', // Add margin-top for spacing
//           }}onClick={handleFormSubmit}>
//           Send Confirmation
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Reset;
