import { FaUser, FaPlus } from "react-icons/fa";
import { MdOutlineKeyboardVoice } from "react-icons/md";

const Chat = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center bg-white text-[#0e305e] p-4">
      {/* Header */}
      <div className="w-full flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-xl font-bold flex items-center space-x-2">
          <span className="text-orange-500">AI.</span>CarDekho
        </h1>
        <div className="flex items-center space-x-4">
          <FaPlus className="text-lg cursor-pointer" />
          <FaUser className="text-lg cursor-pointer" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center mt-10 text-center">
        <p className="text-sm text-orange-500 font-semibold">ASK CAR RELATED QUESTIONS WITH AI.CARDEKHO</p>
        <h2 className="text-2xl font-bold mt-2">What can I help with?</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          <button className="px-4 py-2 bg-gray-100 rounded-lg">Cars under 10L</button>
          <button className="px-4 py-2 bg-gray-100 rounded-lg">EV Cars</button>
          <button className="px-4 py-2 bg-gray-100 rounded-lg">Best Mileage Cars</button>
          <button className="px-4 py-2 bg-gray-100 rounded-lg">Latest Cars</button>
          <button className="px-4 py-2 bg-gray-100 rounded-lg">Safest Cars</button>
        </div>
      </div>

      {/* Chat Box */}
      <div className="w-full max-w-lg mt-12 relative">
        <input
          type="text"
          placeholder="Ask AI.CarDekho"
          className="w-full p-3 rounded-full border focus:outline-none"
        />
        <span className="absolute right-4 top-3 text-gray-500 cursor-pointer"><MdOutlineKeyboardVoice size={25} />
        </span>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-500 mt-5 px-6 text-center ">
        Nobody’s perfect. Responses may be inaccurate. Be sure to verify important details.
      </p>
    </div>
  );
}

export default Chat;