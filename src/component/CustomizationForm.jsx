import { useState } from "react";
import CompanyDetails from "./CompanyDetails";
import Updatelogo from "./Updatelogo";
import Accountdone from "./accountdone";


function CustomizationForm() {
  const [step,Setstep]= useState(1);
  const handleNext = () => {
    Setstep(prev => prev + 1);
  }
  
  const handleBack = () => {Setstep(prev => prev - 1);}

  return (
    
    <div className="bg-[#8787bc] p-6">
      {step === 1 && <CompanyDetails onNext = {handleNext}/>}
      {step === 2 && <Updatelogo onNext = {handleBack} onContinue = {handleNext} />}
      {step === 3 && < Accountdone onNext = {handleNext} />}
    </div>
  );
}

export default CustomizationForm;
