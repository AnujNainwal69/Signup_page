import React from 'react'
import { BriefcaseBusiness, Upload } from 'lucide-react';


const Updatelogo = ({onNext, onContinue}) => {
  return (
          
      <div className="h-[100%] bg-white flex items-center justify-center px-4 py-10 rounded-4xl">
      <div className="w-full max-w-md p-8 rounded-xl h-180 bg-white ">
       
        {/* Back Button*/}
         <div>
        <button className='absolute top-12 left-5 text-blue-500  ml-10 hover:text-blue-600 transition' 
          onClick={onNext}
          type='button'>
            {'<'} Back
        </button>
      </div>
        {/* Header */}
         <div className="text-center mb-2">
      <div className="text-[#26203B] font-semibold text-lg">TaskFleet</div>
    </div>

    {/* Progress */}
    <div className="text-sm text-[#9C9AA5] text-center mb-4">2 / 2</div>

    {/* Title and Subtitle */}
    <div className="text-center mb-8">
      <h2 className="text-2xl font-semibold text-[#26203B]">Customize your Organization</h2>
      <p className="text-lg text-[#9C9AA5] mt-2">
        Setup your organization for members that may join later.
      </p>
    </div>
       
      {/* Upload Logo Circle Icon */}
        <div className="flex justify-center mb-4 mt-18">
          <div className="rounded-full border-2 border-[#20A4F3] p-10 bg-[#ECF0FF] ">
            <BriefcaseBusiness size={32} strokeWidth={1.5} className='text-[#20A4F3]' />
          </div>
        </div>
        {/* Logo Upload Section */}
        
        <div className="flex justify-center mb-6 ">
          <button
            type="button"
            className="flex items-center gap-2 border border-[#a192dd] px-4 py-2 rounded-lg text-sm font-medium  hover:border-blue-500 transition"
          >
             <Upload  className="h-4 w-4"/>
              Upload Logo
          </button>
        </div>

          {/* Continue Button */}
          <div className="text-center  mt-20 m-2 ">
          <p className="text-sm text-gray-500 ">Skip</p>
          </div>
          <button
            type="button"
            onClick={onContinue}
            className="w-1/2 mx-auto block bg-[#20A4F3] text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Continue
          </button>
      </div>
    </div>
    
    
    
  )
}

export default Updatelogo;