'use client';
import { useState, useRef } from 'react';
// import emailjs from 'emailjs-com';
import ContactInfo from './ContactInfo';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    companySize: '',
    phoneNumber: '',
    state: '',
    comments: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const form = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_bt2iolr',
      'template_67d4p1q',
      form.current,
      '3R0bhVy61UmW0fUQL'
    ).then(
      () => {
        setIsSubmitted(true);
        setError('');
      },
      (error) => {
        console.error('Failed to send message:', error);
        setError('Failed to send message. Please try again later.');
      }
    );
  };

  return (
    <>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 min-w-[250px]">
        <div className="max-w-screen-sm p-4 sm:text-center sm:mx-auto">
          <p className="text-xl font-bold leading-9 tracking-wide text-orange-900 sm:mt-4 md:text-3xl sm:px-4">
            Take your workplace to the next level with quality coffee at any time of the day.
          </p>
          <ContactInfo />
          <hr className="w-full my-4 border-gray-300" />
        </div>

        <div className="max-w-screen-lg p-4 sm:mx-auto shadow-md">
          <div className="transition duration-300 transform rounded shadow-sm">
            {isSubmitted ? (
              <p className="text-center text-green-600">Thank you for contacting us! We&apos;ll get back to you shortly.</p>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="p-4 space-y-4 tracking-widest">
                {/* Email Field */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brown-500 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500 uppercase tracking-widest">Email</label>
                </div>

                {/* First Name Field */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brown-500 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500 uppercase tracking-widest">First Name</label>
                </div>

                {/* Last Name Field */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brown-500 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500 uppercase tracking-widest">Last Name</label>
                </div>

                {/* Company Field */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brown-500 peer"
                    placeholder=" "
                  />
                  <label className="peer-focus:font-medium absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500 uppercase tracking-widest">Company</label>
                </div>

            {/* Company Size dropdown */}
            <div className="relative z-0 w-full mb-5 group">
            <select
            name="companySize"
            value={formData.companySize}
            onChange={handleInputChange}
            className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brown-500 peer"
            required
            >
            <option value="" disabled hidden></option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-500">201-500 employees</option>
            <option value="500+">500+ employees</option>
            </select>
          <label className="peer-focus:font-medium absolute text-lg text-gray-900 duration-300 transform          -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500 uppercase tracking-widest">
           Company Size
          </label>
            </div>


                {/* Phone Number Field */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brown-500 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500 uppercase tracking-widest">Phone Number</label>
                </div>

                {/* State Field */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brown-500 peer"
                    placeholder=" "
                  />
                  <label className="peer-focus:font-medium absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500 uppercase tracking-widest">State</label>
                </div>

            {/* Additional Comments Field */}
<div className="relative z-0 w-full mb-5 group">
<textarea
  name="comments"
  value={formData.comments}
  onChange={handleInputChange}
  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brown-500 peer"
  placeholder=" "
  rows="4" // Adjust rows to control textarea height
  required
/>
<label className="peer-focus:font-medium absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-brown-500 uppercase tracking-widest">
  Additional Comments
</label>
</div>

                <button
                  type="submit"
                  className="w-full text-black duration-200  hover:bg-brown-50 hover:border-orange-800 focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center  uppercase border border-black"
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
