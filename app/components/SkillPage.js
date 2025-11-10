import React from 'react'

const SkillPage = () => {
  return (
    <div>
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <ul className="space-y-2">
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default SkillPage
