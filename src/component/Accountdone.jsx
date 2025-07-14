import { Check } from "lucide-react";

const Accountdone = ({ onNext }) => {
  return (
    <div className="h-[100%] bg-white flex items-center justify-center px-4 py-10 rounded-4xl">
      <div className="w-full max-w-md p-8 rounded-xl h-180 bg-white ">
        {/* TaskFleet Header */}
        <div className="text-center mb-20">
          <div className="text-[#26203B] font-semibold text-lg">TaskFleet</div>
        </div>

        {/* Wavy Badge with Check Icon */}
        <div className="flex justify-center mb-6 ">
          <div className="relative w-[100px] h-[100px]">
             
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full">
              <path
                d="M60,0 
                   C70,10 90,10 100,20 
                   C110,30 110,50 120,60 
                   C110,70 110,90 100,100 
                   C90,110 70,110 60,120 
                   C50,110 30,110 20,100 
                   C10,90 10,70 0,60 
                   C10,50 10,30 20,20 
                   C30,10 50,10 60,0
                   Z"
                fill="#20A4F3"
              />
            </svg>
            {/* Inner Light Circle + Check Icon */}

        <div className="absolute top-[12%] left-[12%] w-[76%] h-[76%] bg-[#ECF0FF] rounded-full flex items-center justify-center">
              <Check size={32} strokeWidth={1.75} className="text-[#20A4F3]" />
            </div>
          </div>
        </div> 

        {/* Success Message */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-[#26203B]">
            Account Created Successfully!
          </h2>
          <p className="text-lg text-[#9C9AA5] mt-2">
            Welcome Aboard ! Start your success journey with TaskFleet!
          </p>
        </div>
        {/* Continue Button (Unchanged & centered) */}
        <button
          type="button"
          
          className="w-1/2 mx-auto block bg-[#20A4F3] text-white py-2 rounded-lg hover:bg-blue-600 transition mt-35"
        >
          Let's Start!
        </button>
      </div>
    </div>
  );
};

export default Accountdone;
