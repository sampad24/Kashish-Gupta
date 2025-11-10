import React from 'react'

const FooterPage = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default FooterPage
