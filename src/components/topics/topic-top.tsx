import ScrollIcon from "../scroll-icon";

function Top() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-sky-200 to-teal-500 text-gray-700">
      <div className="absolute top-0 left-0 h-14 w-full bg-white"></div>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="font-noto-sans text-5xl">K-Lab.</div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-8">
        <ScrollIcon />
      </div>
    </div>
  );
}

export default Top;
