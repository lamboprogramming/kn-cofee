'use client';
import { useState } from 'react';
import ContactInfo from './ContactInfo';

export default function Contact() {
  // State for form inputs
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    companySize: '',
    phoneNumber: '',
    state: '',
  });

  // State for submission feedback
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('src/app/api/send-email/route.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Email sent successfully');
        setIsSubmitted(true);
        setError('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="max-w-screen-sm p-4 sm:text-center sm:mx-auto">
          <p className="text-2xl font-bold leading-9 tracking-wide text-blue-900 sm:mt-4 md:text-3xl sm:px-4">
            Take your workplace to the next level with quality coffee at any time of the day.
          </p>
          <ContactInfo />
          <hr className="w-full my-4 border-gray-300" />
        </div>

        <div className="max-w-screen-lg p-4 sm:mx-auto">
          <div className="transition duration-300 transform rounded shadow-sm">
            {isSubmitted ? (
              <p className="text-center text-green-600">Thank you for contacting us! We’ll get back to you shortly.</p>
            ) : (
              <form onSubmit={handleSubmit} className="p-4 space-y-4 tracking-widest">
                {/* Email field */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-brown-500 peer"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="email" className="peer-focus:font-medium absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500 uppercase tracking-widest">Email</label>
                </div>

                {/* First Name field */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-brown-500 peer"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="firstName" className="peer-focus:font-medium absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500 uppercase tracking-widest">First Name</label>
                </div>

                {/* Last Name field */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-brown-500 peer"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="lastName" className="peer-focus:font-medium absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500 uppercase tracking-widest">Last Name</label>
                </div>

                {/* Company field */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-brown-500 peer"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="company" className="peer-focus:font-medium absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500 uppercase tracking-widest">Company Name</label>
                </div>

                {/* Company Size dropdown */}
                <div className="relative z-0 w-full mb-5 group">
                  <select
                    name="companySize"
                    id="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-brown-500 peer"
                    required
                  >
                    <option value="" disabled hidden></option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                  <label htmlFor="companySize" className="peer-focus:font-medium absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500 uppercase tracking-widest">Company Size</label>
                </div>

                {/* Phone Number field */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-brown-500 peer"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="phoneNumber" className="peer-focus:font-medium absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500 uppercase tracking-widest">Phone Number</label>
                </div>

                {/* State field */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-brown-500 peer"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="state" className="peer-focus:font-medium absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500 uppercase tracking-widest">State</label>
                </div>

                <button
                  type="submit"
                  className="w-full text-gray-800 bg-brown-100 hover:bg-brown-200 focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center border uppercase"
                >
                  Submit
                </button>
              </form>
            )}
            {error && <p className="text-center text-red-600">{error}</p>}
          </div>
        </div>
      </div>
    </>
      );
}