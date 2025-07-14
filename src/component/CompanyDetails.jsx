const CompanyDetails = ({onNext}) => {
  return (
  <div className="h-full bg-white flex items-center justify-center px-4 py-10 rounded-4xl">
  <div className="w-full max-w-md p-8 rounded-xl bg-white h-180">
    {/* Logo */}
    <div className="text-center mb-2">
      <div className="text-[#26203B] font-semibold text-lg">TaskFleet</div>
    </div>

    {/* Progress */}
    <div className="text-sm text-[#9C9AA5] text-center mb-4">1 / 2</div>

    {/* Title and Subtitle */}
    <div className="text-center mb-8">
      <h2 className="text-2xl font-semibold text-[#26203B]">Customize your Organization</h2>
      <p className="text-lg text-[#9C9AA5] mt-2">
        Setup your organization for members that may join later.
      </p>
    </div>

    {/* Form */}
    <form className="space-y-6">
      {/* Company Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="w-full h-10 px-3 py-2 border border-[#20A4F3] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#465FF1]"
          placeholder="Enter Company Name"
        />
      </div>

      {/* Company Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          className="w-full h-10 px-3 py-2 border border-[#20A4F3] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#465FF1]"
          placeholder="Enter Company Email"
        />
      </div>

      {/* Company Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Type <span className="text-red-500">*</span>
        </label>
        <select className="w-full h-10 px-3 py-2 border border-[#20A4F3] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#465FF1]">
          <option value="">Select Company Type</option>
          <option value="tech">Tech</option>
          <option value="marketing">Marketing</option>
          <option value="finance">Finance</option>
        </select>
      </div>

      {/* Checkbox */}
      <div className="flex items-center">
        <input
          id="offers"
          type="checkbox"
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="offers" className="ml-2 text-sm text-gray-700">
          Get exciting offer on mail
        </label>
      </div>

      {/* Button */}
      <div className="text-center">
        <button
          type="button"
          onClick={onNext}
          className="bg-[#20A4F3] text-white py-2 px-8 rounded-lg hover:bg-blue-600 transition w-1/2"
        >
          Continue
        </button>
      </div>
    </form>
  </div>
</div>

  )
}

export default CompanyDetails