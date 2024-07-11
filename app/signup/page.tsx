"use client";
import Link from 'next/link';
import { useState } from 'react';
import ToggleVisibility from '../components/ToggleVisibility';
import { signup } from './actions';

type SignUpFormField = {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  phone_number: string;
  password: string;
};

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<SignUpFormField>({
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    phone_number: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const form = new FormData(e.currentTarget);
      await signup(form);
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-200">
        <div className="text-center mb-6">
          <img src="/logo.png" alt="Bookstore" className="mx-auto h-12 w-auto" />
          <h2 className="text-2xl font-bold mt-4">Sign Up</h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                required
                value={formData.firstname}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                required
                value={formData.lastname}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              required
              value={formData.gender}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phone_number"
              name="phone_number"
              type="tel"
              required
              value={formData.phone_number}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pr-12"
              placeholder="Enter password min. of 8 characters"
            />
            <ToggleVisibility showPassword={showPassword} toggleVisibility={toggleVisibility} />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
