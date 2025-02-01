import { FaFacebookF, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#F9FAFB] py-10 mt-10 px-10">
        {/* Footer */}
      <footer className="flex justify-evenly space-x-6">
        <div className="mt-4">
          <p className="flex text-lg font-bold"><img src="https://media-hosting.imagekit.io//809b6bdc87c14892/screenshot_1738360435028.png?Expires=1832968435&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cSU1Pymp~QLdU~EcLqeCmI319Kkp0t4bRFgRQI~y3GiEfAW~24uJsLDAHIAOI9Xk-wsaIWFesHQLMaXB9LoNugexoBLCiXFbk3uwnCjgYksAY1gvdtmHkATB17J26BZjmZu8nMIxuF72VoDHOOXlclj1niVwuIvwKtiVIgL1BygcrcG9GJBKKQ5DLIfRPSxTaLXZXZk~1ZYrnxIAAlMyKOdZPgV5Ybxg7hV-84m-0sSYVskEiScBK718L9EH4oXxqtMcUF2c9mn~YQcw9RHMJH3c3xlDlCXBkdezSoTPz7sBvlyq4W1QuiWibtcrPhrOWpcZlh~r8dyl-qsF0HdByQ__" className="w-7 h-7"/> &nbsp;&nbsp;CareCircle</p>
          <p className="text-m text-gray-400 py-5">Empowering differently abled communities through<br></br>inclusive healthcare and support</p>
        </div>
        <div className="mt-4">
          <ol>
            <li>COMPANY</li>
            <li  className="py-1"><a href="#" className="text-gray-400 hover:text-blue-600">About Us</a></li>
            <li  className="py-1"><a href="#" className="text-gray-400 hover:text-blue-600">Communities</a></li>
            <li  className="py-1"><a href="#" className="text-gray-400 hover:text-blue-600">Doctors</a></li>
            <li  className="py-1"><a href="#" className="text-gray-400 hover:text-blue-600">Resources</a></li>
          </ol>
        </div>
        <div className="mt-4">
          <ol>
            <li>LEGAL</li>
            <li  className="py-1"><a href="#" className="text-gray-400 hover:text-blue-600">Privacy Policy</a></li>
            <li  className="py-1"><a href="#" className="text-gray-400 hover:text-blue-600">Terms of Service</a></li>
            <li  className="py-1"><a href="#" className="text-gray-400 hover:text-blue-600">Cookie Policy</a></li>
          </ol>
        </div>
        <div className="mt-4">
          <ol><li>CONNECT</li></ol>
          <div className="flex space-x-4 py-3">
            <a href="#" className="text-xl text-gray-400 hover:text-blue-900"> <FaFacebookF/></a>
            <a href="#" className="text-xl text-gray-400 hover:text-blue-600"> <FaTwitter/></a>
            <a href="#" className="text-xl text-gray-400 hover:text-blue-600"> <FaEnvelope/></a>
            <a href="#" className="text-xl text-gray-400 transition-all duration-300 hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white rounded-lg h-5"> <FaInstagram/></a>
          </div>
        </div>
      </footer><br /><hr />
      <div><p className="text-gray-600 mt-4 text-center">&copy; 2025 CareCircle. All rights reserved.</p></div>
    </div>
  )
}

export default Footer;
