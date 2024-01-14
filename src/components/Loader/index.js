import Lottie from "lottie-web";
import { useEffect, useRef } from "react";

const Loader = ({ text = '', showAnimation = true }) => {
  const containerRef = useRef()
  useEffect(() => {
    if (showAnimation) {
      Lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../assets/loader-lottie.json"),
      });
    }

    return () => {
      Lottie.destroy()
    }
  }, []);
  return (
    <div className="w-full h-full flex justify-center items-center z-10 flex flex-col gap-4">
      <h1>{text}</h1>
      {showAnimation && <div ref={containerRef} style={{ width: '200px' }}></div>}
    </div>
  );
};

export default Loader