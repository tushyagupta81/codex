import { FaUsers, FaStethoscope, FaShieldAlt, FaRegUserCircle} from 'react-icons/fa';
import { FaRegComments, FaRepeat } from "react-icons/fa6";
function Features() {
  return (
    <section className="py-20 px-10">
    <h3 className="text-3xl font-extrabold text-center mb-10">
      How CareCircle Supports You
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: "Inclusive Communities", 
            description: "Join our global community and create private support groups based on specific needs and conditions.", icon: <FaUsers /> },

        { title: "Structured Communication", 
            description: "Easy-to-use templates for common requests like blood donations, medical equipments sharing, and support services.", icon: <FaRegComments /> },

        { title: "Matched Care", 
            description: "Get connected with healthcare providers specialized in your specific needs and conditions.", icon: <FaStethoscope /> },

        { title: "Safe Environment", 
            description: "Verified healthcare providers and moderated communitites ensure a secure and supportive space.", icon: <FaShieldAlt /> },

        { title: "Personalized Support", 
            description: "Receive care recommendations and community suggestions based on your profile and needs.", icon: <FaRegUserCircle /> },

        { title: "Resource Sharing", 
            description: "Access and share valuable resources, experiences, and support within your communities.", icon: <FaRepeat /> },

      ].map((item, index) => (
        <div key={index} className="p-6 bg-white shadow-lg rounded-xl">
          <div className="p-2 w-9 text-xl bg-sky-50 rounded-xl text-blue-600 mb-4 justify-center">{item.icon}</div>
          <h4 className="font-semibold">{item.title}</h4>
          <p className="text-gray-600 text-sm mt-2 ">{item.description}</p>
        </div>
      ))}

    </div>
  </section>
  )
}

export default Features;