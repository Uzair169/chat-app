import React, { useState } from 'react'
import GenderCheckbox from './genderCheckbox.jsx'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js'

function signup() {

  const [input, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const { loading, signup } = useSignup()
  const handleCheckboxChange = (gender) => {
    setInputs({ ...input, gender })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(input)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SignUp
          <span className='text-blue-500'>GhumXHum</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text outline-base-300'>Full Name</span>
            </label>
            <input type='text' placeholder='Uzair Imran' className='w-full input input-bordered h-10' value={setInputs.fullName}
              onChange={(e) => setInputs({ ...input, fullName: e.target.value })}
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='uzairandali412' className='w-full input input-bordered h-10'
              value={input.username} onChange={(e) => setInputs({ ...input, username: e.target.value })}
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Passowrd</span>
            </label>
            <input
              type='password'
              placeholder='Enter password'
              className='w-full input input-bordered h-10'
              value={input.password}
              onChange={(e) => setInputs({ ...input, password: e.target.value })}
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Confirm Passowrd</span>
            </label>
            <input
              type='password'
              placeholder='Confirm password'
              className='w-full input input-bordered h-10'
              value={input.confirmPassword}
              onChange={(e) => setInputs({ ...input, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={input.gender} />

          <Link className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' to='/login'>
            Already have an account?
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'
              disabled={loading}
            >
              {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default signup

// STARTER CODE FOR THIS FILE


// import React from 'react'
// import GenderCheckbox from './genderCheckbox.jsx'

// function signup() {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           SignUp
//           <span className='text-blue-500'>GhumXHum</span>
//         </h1>

//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text outline-base-300'>Full Name</span>
//             </label>
//             <input type='text' placeholder='Uzair Imran' className='w-full input input-bordered h-10' />
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input type='text' placeholder='uzairandali412' className='w-full input input-bordered h-10' />
//           </div>
//           <div>
//             <label className='label'>
//               <span className='text-base label-text'>Passowrd</span>
//             </label>
//             <input
//               type='password'
//               placeholder='Enter password'
//               className='w-full input input-bordered h-10'
//             />
//           </div>
//           <div>
//             <label className='label'>
//               <span className='text-base label-text'>Confirm Passowrd</span>
//             </label>
//             <input
//               type='password'
//               placeholder='Confirm password'
//               className='w-full input input-bordered h-10'
//             />
//           </div>

//           <GenderCheckbox />

//           <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
//             Already have an account?
//           </a>

//           <div>
//             <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default signup