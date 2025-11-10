import React from 'react'

const AboutPage = () => {
  return (
    <div>
        {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/placeholder-avatar.jpg" alt="Profile" className="w-64 h-64 rounded-full mx-auto" />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Hi! I'm a full-stack developer with a passion for creating beautiful and functional web applications.
                I love working with modern technologies and bringing ideas to life through code.
              </p>
              <p className="text-lg text-gray-700">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying outdoor activities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
