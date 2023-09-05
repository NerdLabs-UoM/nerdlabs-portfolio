import React, { useRef,useEffect } from "react";
import image from "../../images/fingerprint.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const MyTest = () => {
  const imageRef = useRef(null);
  // gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to(imageRef.current,{x:500,y:600,rotation:360,duration:4})
    
  }, []);

  return (
    <div>
      <div  className="w-[300px]" ref={imageRef} >
        <img src={image} alt="img" />
      </div>

      <div className="relative mt-10 text-3xl text-center">Meet the Freds</div>
    </div>
  );
};

export default MyTest;
