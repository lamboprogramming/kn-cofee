'use client';
import { useState } from 'react';

export default function Contact() {
  // State for form inputs
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    phoneNumber: '',
    state: '',
  });

// Handle input changes
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form Data:', formData);
  // Add form submission logic here
};

  return (
    <>
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
    <div className="max-w-screen-sm p-4 mt-4 sm:text-center sm:mx-auto ">
  
    <p className="text-xl text-gray-700 md:text-2xl sm:px-4">
    Take your workplace to the next level with café-quality coffee at no risk, with a <span className='text-orange-800'>free</span> two-week trial.
    </p>
    <hr className="w-full my-8 border-gray-300" />
  </div>
      <div className="max-w-screen-lg p-4 sm:mx-auto">
        <div className="transition duration-300 transform rounded shadow-sm ">
        
          <form onSubmit={handleSubmit} className="p-4 space-y-4 ">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-brown-500 peer"
                placeholder=" "
                required
              />
              <label htmlFor="email" className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500">Email</label>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-brown-500 peer"
                  placeholder=" "
                  required
                />
                <label htmlFor="firstName" className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500">First Name</label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-brown-500 peer"
                  placeholder=" "
                  required
                />
                <label htmlFor="lastName" className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500">Last Name</label>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-brown-500 peer"
                  placeholder=" "
                  required
                />
                <label htmlFor="company" className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500">Company</label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-brown-500 peer"
                  placeholder=" "
                  required
                />
                <label htmlFor="phoneNumber" className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500">Phone Number</label>
              </div>
            </div>

    

            <button
              type="submit"
              className="w-full text-gray-800 bg-brown-100 hover:bg-brown-200 focus:ring-4 focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center border"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      
    </div>
    </>
  );
};
