import React from 'react'
import GenderCheckbox from './genderCheckbox.jsx'

function signup() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SignUp
          <span className='text-blue-500'>GhumXHum</span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text outline-base-300'>Full Name</span>
            </label>
            <input type='text' placeholder='Uzair Imran' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='uzairandali412' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Passowrd</span>
            </label>
            <input
              type='password'
              placeholder='Enter password'
              className='w-full input input-bordered h-10'
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
            />
          </div>

          <GenderCheckbox />

          <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
            Already have an account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
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