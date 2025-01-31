function Community_stats() {
  return (
    <section className="w-[95%] justify-center rounded-xl text-center bg-sky-50 py-10 px-10 m-auto">
    <h3 className="text-2xl font-extrabold">Join Our Growing Community</h3>
    <p className="text-gray-600 mt-4 max-w-lg mx-auto">
      CareCircle brings together patients, healthcare providers, and support communities to create a comprehensive care network for differenlty abled individuals.
    </p>
    <div className="flex justify-center space-x-12 mt-6 text-xl font-bold">
      <div className="text-center">
        <div className="text-blue-600 text-3xl font-extrabold">1000+</div>
        <div className="text-gray-500">Active Members</div>
      </div>
      <div className="text-center ">
        <div className="text-blue-600 text-3xl font-extrabold">50+</div>
        <div className="text-gray-500">Specialized Communities</div>
      </div>
      <div className="text-center">
        <div className="text-blue-600 text-3xl font-extrabold">200+</div>
        <div className="text-gray-500">Healthcare Providers</div>
      </div>
    </div>
    <div className="flex justify-center mt-6">
      <button className="m-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Sign Up
      </button>
      <button className="m-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Learn More
      </button>
    </div>
  </section>
  )
}

export default Community_stats;