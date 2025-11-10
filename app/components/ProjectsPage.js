import React from 'react'

const ProjectsPage = () => {
  return (
    <div>
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Project 1</h3>
              <p className="text-gray-700 mb-4">A brief description of the project and the technologies used.</p>
              <a href="#" className="text-blue-600 hover:underline">View Project</a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Project 2</h3>
              <p className="text-gray-700 mb-4">A brief description of the project and the technologies used.</p>
              <a href="#" className="text-blue-600 hover:underline">View Project</a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Project 3</h3>
              <p className="text-gray-700 mb-4">A brief description of the project and the technologies used.</p>
              <a href="#" className="text-blue-600 hover:underline">View Project</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage
