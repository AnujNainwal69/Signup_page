import React from 'react'

const CompanyDetails = ({onNext}) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 rounded-3xl">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl ">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-blue-600 font-semibold text-lg mb-1">TaskFleet</div>
          <div className="text-sm text-gray-500">1 / 2</div>
        </div>

        {/* Title and Subtitle */}
        <h2 className="text-xl font-semibold text-center mb-1 ">Customize your Organization</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Setup your organization for members that may join later.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-400 border-[#a192dd]"
              placeholder="Enter Company Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-400 border-[#a192dd]"
              placeholder="Enter Company Email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Type <span className="text-red-500">*</span></label>
            <select className="w-full px-3 py-2 border rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-400 border-[#a192dd]">
              <option value="">Select Company Type</option>
              <option value="tech">Tech</option>
              <option value="marketing">Marketing</option>
              <option value="finance">Finance</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              id="offers"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="offers" className="ml-2 block text-sm text-gray-700">
              Get exciting offer on mail
            </label>
          </div>

          {/* Continue Button */}
          <button 
            type="button"
            onClick={onNext}
            className="w-1/2 mx-auto block bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
    
    
  )
}

export default CompanyDetails