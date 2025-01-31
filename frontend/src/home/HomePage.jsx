import Community_stats from "./Community_stats";
import Features from "./Features";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {FaStethoscope, FaUserPlus} from 'react-icons/fa';

export default function HomePage() {
  return (

    <div className="bg-white text-gray-900">

      {/* Nav */}
      <Navbar/>

      {/* Hero Section */}
      <section className="py-20 px-10 bg-gray-100">
        <h2 className="text-5xl font-extrabold">
          Empowering Differently Abled <br />
          <span className="text-blue-600 font-extrabold">Communities Through Care</span>
        </h2>
        <p className="text-gray-700 mt-10 max-w-lg">
          Join CareCircle - a supportive platform connecting differently abled
          individuals with healthcare providers and community support. Experience personalized care coordination and inclusive community engagement.
        </p>
        <div className="mt-6 space-x-4 flex ">
          <button className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 ">
          <FaUserPlus/>&nbsp;Join as Patient
          </button>
          <button className="flex items-center border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white">
          <FaStethoscope />&nbsp;Join as Doctor
          </button>
        </div>
      </section>

      {/* features section*/}
      <Features/>

      {/* stats section*/}
      <Community_stats/>

      {/* footer section*/}
      <Footer/>

    </div>
  );
}
