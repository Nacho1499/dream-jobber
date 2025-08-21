"use client";
import { div } from "framer-motion/m";
import { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    dob: "",
    language: "",
    fluency: "Beginner",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // First & Last Name must be letters only
    if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      newErrors.firstName = "First name should contain only letters";
    }
    if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last name should contain only letters";
    }

    // Address
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    // Country
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    // Date of Birth must be in the past
    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
    } else if (new Date(formData.dob) > new Date()) {
      newErrors.dob = "Date of birth must be in the past";
    }

    // Language
    if (!formData.language.trim()) {
      newErrors.language = "Language is required";
    }

    // Fluency
    if (!formData.fluency) {
      newErrors.fluency = "Fluency is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("✅ Form Submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        address: "",
        country: "",
        dob: "",
        language: "",
        fluency: "Beginner",
      });
    }
  };

  return (
    
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-5 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Application Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Enter first name"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Enter last name"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>

        {/* Current Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Current Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Enter your current address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>

        {/* Country of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Country of Birth
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Enter country of birth"
          />
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">{errors.country}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          {errors.dob && (
            <p className="text-red-500 text-sm mt-1">{errors.dob}</p>
          )}
        </div>

        {/* Language */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Language
          </label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Enter a language"
          />
          {errors.language && (
            <p className="text-red-500 text-sm mt-1">{errors.language}</p>
          )}
        </div>

        {/* Fluency */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Fluency
          </label>
          <select
            name="fluency"
            value={formData.fluency}
            onChange={handleChange}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Fluent</option>
            <option>Native Speaker</option>
          </select>
          {errors.fluency && (
            <p className="text-red-500 text-sm mt-1">{errors.fluency}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full cursor-pointer bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    
  );
}
