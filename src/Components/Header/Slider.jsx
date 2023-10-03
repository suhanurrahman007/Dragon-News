import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <div className="flex rounded-sm p-3 justify-center items-center space-x-4 bg-gray-300">
      <button className="bg-orange-900 text-xs text-white px-7 py-3">
        Latest
      </button>
      <Marquee className="text-md">
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as............
      </Marquee>
    </div>
  );
};

export default Slider;
