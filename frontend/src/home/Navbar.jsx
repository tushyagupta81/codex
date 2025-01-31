function Navbar() {
  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 border-b">
        <h1 className="text-xl font-bold flex items-center">
          <span className="text-blue-600"> <img src="https://media-hosting.imagekit.io//809b6bdc87c14892/screenshot_1738360435028.png?Expires=1832968435&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cSU1Pymp~QLdU~EcLqeCmI319Kkp0t4bRFgRQI~y3GiEfAW~24uJsLDAHIAOI9Xk-wsaIWFesHQLMaXB9LoNugexoBLCiXFbk3uwnCjgYksAY1gvdtmHkATB17J26BZjmZu8nMIxuF72VoDHOOXlclj1niVwuIvwKtiVIgL1BygcrcG9GJBKKQ5DLIfRPSxTaLXZXZk~1ZYrnxIAAlMyKOdZPgV5Ybxg7hV-84m-0sSYVskEiScBK718L9EH4oXxqtMcUF2c9mn~YQcw9RHMJH3c3xlDlCXBkdezSoTPz7sBvlyq4W1QuiWibtcrPhrOWpcZlh~r8dyl-qsF0HdByQ__" className="w-7 h-7 m-3"/></span> CareCircle
        </h1>
        <nav className="space-x-6">
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Communities</a>
          <a href="#" className="hover:text-blue-600">Doctors</a>
          <a href="#" className="hover:text-blue-600">Resources</a>
        </nav>
        <div className="space-x-4">
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white">
            Login
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </header>
    </div> 
  )
}

export default Navbar;