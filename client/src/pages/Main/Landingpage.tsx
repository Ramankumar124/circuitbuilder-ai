const LandingPage = () => {
  return (
    <>
      <div>
        <nav
          id="header"
          className="fixed w-full z-50 bg-neutral-900 bg-opacity-90 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <a href="#hero" className="text-white font-bold text-xl">
                <span className="text-[#6E56CF]">Circuit</span>Builder
                <span className="text-[#6E56CF]">AI</span>
              </a>
            </div>

            {/* <!-- Desktop Menu --> */}
            <ul className="hidden md:flex space-x-6">
              <li>
                <a
                  href="home"
                  className="text-white hover:text-[#6E56CF] transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-white hover:text-[#6E56CF] transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#templates"
                  className="text-white hover:text-[#6E56CF] transition-colors duration-300"
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  href="#editor"
                  className="text-white hover:text-[#6E56CF] transition-colors duration-300"
                >
                  Editor
                </a>
              </li>
            </ul>

            {/* <!-- Mobile Menu Button --> */}
            <button
              id="mobile-menu-button"
              className="md:hidden flex items-center"
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* <!-- Mobile Menu --> */}
          <div
            id="mobile-menu"
            className="hidden md:hidden bg-neutral-800 animate__animated animate__fadeIn"
          >
            <ul className="py-4 px-4 space-y-3">
              <li>
                <a
                  href="home"
                  className="block text-white hover:text-[#6E56CF] transition-colors duration-300 py-2"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="block text-white hover:text-[#6E56CF] transition-colors duration-300 py-2"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#editor"
                  className="block text-white hover:text-[#6E56CF] transition-colors duration-300 py-2"
                >
                  Editor
                </a>
              </li>
              <li>
                <a
                  href="#tools"
                  className="block text-white hover:text-[#6E56CF] transition-colors duration-300 py-2"
                >
                  Tools
                </a>
              </li>
              <li>
                <a
                  href="#templates"
                  className="block text-white hover:text-[#6E56CF] transition-colors duration-300 py-2"
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="block text-white hover:text-[#6E56CF] transition-colors duration-300 py-2"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="block text-white hover:text-[#6E56CF] transition-colors duration-300 py-2"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-white hover:text-[#6E56CF] transition-colors duration-300 py-2"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <section
          id="hero"
          className="bg-gradient-to-br from-neutral-900 to-[#242424] min-h-screen flex items-center pt-20"
        >
          <div className="container mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="animate__animated animate__fadeInLeft">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  <span className="text-[#6E56CF]">AI-Powered</span> Circuit
                  Builder
                </h1>
                <p className="text-neutral-300 text-lg md:text-xl mb-8">
                  Design, simulate, and analyze electrical circuits with the
                  power of artificial intelligence. Build complex systems with
                  intuitive controls and real-time feedback.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#editor"
                    className="px-8 py-3 bg-[#6E56CF] hover:bg-[#7d66dc] text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-[#6E56CF]/40 hover:scale-105"
                  >
                    Try Editor Now
                  </a>
                  <a
                    href="#features"
                    className="px-8 py-3 bg-transparent border-2 border-[#505050] text-white font-medium rounded-full hover:border-[#6E56CF] transition-all duration-300 hover:shadow-lg hover:shadow-[#6E56CF]/20"
                  >
                    Explore Features
                  </a>
                </div>
                <div className="mt-8 flex items-center text-neutral-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    ></path>
                  </svg>
                  <span>Secure cloud storage for all your designs</span>
                </div>
              </div>
              <div className="relative animate__animated animate__fadeInRight">
                <div className="bg-neutral-800 p-5 rounded-xl shadow-2xl border border-neutral-700 relative z-10 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6E56CF] to-blue-500"></div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm text-neutral-400">
                      CircuitBuilder.ai
                    </div>
                  </div>
                  <div className="bg-neutral-900 rounded-lg p-4 h-[300px] md:h-[400px] overflow-hidden relative">
                    <div className="grid grid-cols-12 gap-2 h-full">
                      <div className="col-span-2 bg-neutral-800 rounded-lg p-2">
                        <div className="space-y-3">
                          <div className="h-8 w-8 rounded-lg bg-[#505050] mx-auto"></div>
                          <div className="h-8 w-8 rounded-lg bg-[#505050] mx-auto"></div>
                          <div className="h-8 w-8 rounded-lg bg-[#505050] mx-auto"></div>
                          <div className="h-8 w-8 rounded-lg bg-[#505050] mx-auto"></div>
                          <div className="h-8 w-8 rounded-lg bg-[#6E56CF] mx-auto"></div>
                        </div>
                      </div>
                      <div className="col-span-8 bg-[#242424] rounded-lg p-3 border border-neutral-800 relative">
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#6E56CF_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                        <div className="relative h-full">
                          <div className="absolute top-[30%] left-[20%] w-20 h-8 bg-neutral-700 rounded flex items-center justify-center transform rotate-45">
                            <div className="text-xs text-white">Resistor</div>
                          </div>
                          <div className="absolute top-[60%] left-[40%] w-16 h-6 flex items-center">
                            <div className="w-5 h-full bg-neutral-700 rounded-l"></div>
                            <div className="w-1 h-full bg-[#6E56CF]"></div>
                            <div className="w-5 h-full bg-neutral-700 rounded-r"></div>
                          </div>
                          <div className="absolute top-[34%] left-[38%] w-10 h-1 bg-[#6E56CF]"></div>
                          <div className="absolute top-[50%] left-[40%] w-1 h-16 bg-[#6E56CF]"></div>
                          <div className="absolute top-[15%] right-[20%] w-24 h-16 bg-neutral-800 rounded-md flex flex-col justify-center items-center p-1">
                            <div className="w-full h-2 bg-neutral-700 mb-1 rounded-sm"></div>
                            <div className="w-full h-2 bg-neutral-700 mb-1 rounded-sm"></div>
                            <div className="w-full h-2 bg-neutral-700 rounded-sm"></div>
                            <div className="absolute top-0 left-2 w-2 h-2 rounded-full bg-[#6E56CF]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 bg-neutral-800 rounded-lg p-2">
                        <div className="space-y-3">
                          <div className="h-12 w-full rounded-lg bg-[#505050] flex items-center justify-center">
                            <div className="h-8 w-8 rounded-full bg-[#6E56CF]"></div>
                          </div>
                          <div className="h-36 w-full rounded-lg bg-[#505050] p-2">
                            <div className="h-3 w-full bg-neutral-700 rounded-full mb-2"></div>
                            <div className="h-3 w-4/5 bg-neutral-700 rounded-full mb-2"></div>
                            <div className="h-3 w-2/3 bg-neutral-700 rounded-full mb-2"></div>
                            <div className="h-3 w-3/4 bg-neutral-700 rounded-full"></div>
                          </div>
                          <div className="h-12 w-full rounded-lg bg-[#505050]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-br from-[#6E56CF] to-purple-900 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -top-4 -left-4 w-40 h-40 bg-gradient-to-br from-blue-600 to-[#6E56CF] rounded-full filter blur-3xl opacity-15 animate-pulse"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-center">
              <div className="bg-neutral-800 bg-opacity-40 backdrop-blur-sm p-4 rounded-xl border border-neutral-700">
                <div className="text-3xl font-bold text-[#6E56CF] mb-1">
                  10,000+
                </div>
                <div className="text-neutral-400">Components</div>
              </div>
              <div className="bg-neutral-800 bg-opacity-40 backdrop-blur-sm p-4 rounded-xl border border-neutral-700">
                <div className="text-3xl font-bold text-[#6E56CF] mb-1">
                  99.9%
                </div>
                <div className="text-neutral-400">Accuracy</div>
              </div>
              <div className="bg-neutral-800 bg-opacity-40 backdrop-blur-sm p-4 rounded-xl border border-neutral-700">
                <div className="text-3xl font-bold text-[#6E56CF] mb-1">5x</div>
                <div className="text-neutral-400">Faster Design</div>
              </div>
              <div className="bg-neutral-800 bg-opacity-40 backdrop-blur-sm p-4 rounded-xl border border-neutral-700">
                <div className="text-3xl font-bold text-[#6E56CF] mb-1">
                  24/7
                </div>
                <div className="text-neutral-400">Cloud Access</div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="bg-neutral-800 py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful <span className="text-[#6E56CF]">AI-Driven</span>{" "}
                Features
              </h2>
              <p className="text-neutral-300 max-w-3xl mx-auto">
                Our circuit builder combines advanced artificial intelligence
                with intuitive design tools to revolutionize how you create,
                simulate and test electrical circuits.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-700 shadow-lg hover:shadow-[#6E56CF]/10 transition-all duration-300 hover:-translate-y-1 animate__animated animate__fadeInUp">
                <div className="bg-gradient-to-br from-[#6E56CF] to-[#5546a9] w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  AI Component Suggestion
                </h3>
                <p className="text-neutral-400 mb-4">
                  Smart recommendations for circuit components based on your
                  design goals and specifications, saving hours of manual
                  selection.
                </p>
                <ul className="space-y-2 text-neutral-300">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#6E56CF] mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Real-time performance predictions
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#6E56CF] mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Contextual component alternatives
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#6E56CF] mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Adaptive learning from your designs
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-700 shadow-lg hover:shadow-[#6E56CF]/10 transition-all duration-300 hover:-translate-y-1 animate__animated animate__fadeInUp">
                <div className="bg-gradient-to-br from-[#6E56CF] to-[#5546a9] w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Intuitive Design Interface
                </h3>
                <p className="text-neutral-400 mb-4">
                  Drag-and-drop components with smart snapping and auto-routing
                  to build complex circuits with minimal effort.
                </p>
                <ul className="space-y-2 text-neutral-300">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#6E56CF] mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Natural gesture controls
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#6E56CF] mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Smart connection routing
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#6E56CF] mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Customizable workspace layout
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-700 shadow-lg hover:shadow-[#6E56CF]/10 transition-all duration-300 hover:-translate-y-1 animate__animated animate__fadeInUp">
                <div className="bg-gradient-to-br from-[#6E56CF] to-[#5546a9] w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Multi-format Export
                </h3>
                <p className="text-neutral-400 mb-4">
                  Export your designs in multiple industry-standard formats with
                  a single click, ready for manufacturing or further analysis.
                </p>
                <ul className="space-y-2 text-neutral-300">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#6E56CF] mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    PCB layout generation
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#6E56CF] mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Component bill of materials
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#6E56CF] mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    SPICE simulation files
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="templates" className="bg-neutral-900 py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready-to-Use{" "}
                <span className="text-[#6E56CF]">Circuit Templates</span>
              </h2>
              <p className="text-neutral-300 max-w-3xl mx-auto">
                Jump-start your projects with our collection of professionally
                designed circuit templates, all fully customizable and optimized
                for performance.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-12 animate__animated animate__fadeIn">
              <button className="px-5 py-2 bg-[#6E56CF] text-white rounded-full text-sm hover:bg-[#7d66dc] transition-colors shadow-md">
                All Templates
              </button>
              <button className="px-5 py-2 bg-neutral-800 text-white rounded-full text-sm hover:bg-neutral-700 transition-colors">
                Power Supply
              </button>
              <button className="px-5 py-2 bg-neutral-800 text-white rounded-full text-sm hover:bg-neutral-700 transition-colors">
                Arduino
              </button>
              <button className="px-5 py-2 bg-neutral-800 text-white rounded-full text-sm hover:bg-neutral-700 transition-colors">
                Sensors
              </button>
              <button className="px-5 py-2 bg-neutral-800 text-white rounded-full text-sm hover:bg-neutral-700 transition-colors">
                Audio
              </button>
              <button className="px-5 py-2 bg-neutral-800 text-white rounded-full text-sm hover:bg-neutral-700 transition-colors">
                IoT
              </button>
              <button className="px-5 py-2 bg-neutral-800 text-white rounded-full text-sm hover:bg-neutral-700 transition-colors">
                Robotics
              </button>
              <button className="px-5 py-2 bg-neutral-800 text-white rounded-full text-sm hover:bg-neutral-700 transition-colors">
                Communication
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-lg hover:shadow-[#6E56CF]/10 transition-all duration-300 hover:-translate-y-1 group animate__animated animate__fadeInUp">
                <div className="relative">
                  <div className="h-48 bg-neutral-700 overflow-hidden">
                    <div className="absolute inset-0 bg-[#242424] p-4">
                      <div className="h-full w-full overflow-hidden relative">
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#6E56CF_1px,transparent_1px)] bg-[length:15px_15px]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-3/4 h-3/4">
                            <div className="absolute top-1/2 left-0 w-10 h-16 transform -translate-y-1/2">
                              <div className="w-6 h-16 mx-auto bg-neutral-600 rounded-sm flex flex-col">
                                <div className="h-1/2 border-b border-neutral-500"></div>
                              </div>
                            </div>
                            <div className="absolute top-1/4 left-1/3 w-16 h-6 bg-neutral-600 rounded-sm"></div>
                            <div className="absolute top-2/3 left-1/3 w-16 h-6 bg-neutral-600 rounded-sm"></div>
                            <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
                              <div className="w-8 h-8 bg-neutral-600 rounded-full">
                                <div className="w-4 h-4 mx-auto bg-[#6E56CF] rounded-full animate-pulse"></div>
                              </div>
                            </div>
                            <svg className="absolute inset-0 w-full h-full">
                              <path
                                d="M10 40 H 60 M 60 20 H 90 M 90 20 V 60 M 90 60 H 60 M 60 60 V 40 M 90 40 H 120"
                                stroke="#6E56CF"
                                strokeWidth="2"
                                fill="none"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-[#6E56CF] text-white text-xs px-2 py-1 rounded-full">
                      Basic
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#6E56CF] transition-colors">
                    LED Blink Circuit
                  </h3>
                  <p className="text-neutral-400 text-sm mb-3">
                    Simple LED circuit with adjustable blink rate, perfect for
                    beginners.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      <span className="px-2 py-1 bg-neutral-700 rounded text-xs text-neutral-400">
                        LED
                      </span>
                      <span className="px-2 py-1 bg-neutral-700 rounded text-xs text-neutral-400">
                        Beginner
                      </span>
                    </div>
                    <button className="text-[#6E56CF] hover:text-white transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-lg hover:shadow-[#6E56CF]/10 transition-all duration-300 hover:-translate-y-1 group animate__animated animate__fadeInUp">
                <div className="relative">
                  <div className="h-48 bg-neutral-700 overflow-hidden">
                    <div className="absolute inset-0 bg-[#242424] p-4">
                      <div className="h-full w-full overflow-hidden relative">
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#6E56CF_1px,transparent_1px)] bg-[length:15px_15px]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-3/4 h-3/4">
                            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2">
                              <div className="w-20 h-20 bg-neutral-600 rounded-md flex items-center justify-center">
                                <div className="w-16 h-16 bg-neutral-700 rounded-sm"></div>
                              </div>
                            </div>
                            <div className="absolute top-1/4 right-1/4 transform -translate-x-1/2">
                              <div className="w-10 h-10 bg-neutral-600 rounded-md"></div>
                            </div>
                            <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2">
                              <div className="w-16 h-8 bg-neutral-600 rounded-sm">
                                <div className="w-14 h-6 mx-auto mt-1 bg-[#6E56CF]/30 rounded-sm"></div>
                              </div>
                            </div>
                            <svg className="absolute inset-0 w-full h-full">
                              <path
                                d="M60 40 H 100 M 100 20 V 40 M 100 60 V 40 M 100 40 H 130"
                                stroke="#6E56CF"
                                strokeWidth="2"
                                fill="none"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-[#6E56CF] text-white text-xs px-2 py-1 rounded-full">
                      IoT
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#6E56CF] transition-colors">
                    Temperature Monitor
                  </h3>
                  <p className="text-neutral-400 text-sm mb-3">
                    IoT-ready temperature monitoring system with display and
                    wireless capabilities.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      <span className="px-2 py-1 bg-neutral-700 rounded text-xs text-neutral-400">
                        Sensor
                      </span>
                      <span className="px-2 py-1 bg-neutral-700 rounded text-xs text-neutral-400">
                        ESP32
                      </span>
                    </div>
                    <button className="text-[#6E56CF] hover:text-white transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-lg hover:shadow-[#6E56CF]/10 transition-all duration-300 hover:-translate-y-1 group animate__animated animate__fadeInUp">
                <div className="relative">
                  <div className="h-48 bg-neutral-700 overflow-hidden">
                    <div className="absolute inset-0 bg-[#242424] p-4">
                      <div className="h-full w-full overflow-hidden relative">
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#6E56CF_1px,transparent_1px)] bg-[length:15px_15px]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-3/4 h-3/4">
                            <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
                              <div className="w-12 h-16 bg-neutral-600 rounded-sm"></div>
                            </div>
                            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
                              <div className="w-24 h-10 bg-neutral-600 rounded-sm"></div>
                            </div>
                            <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2">
                              <div className="w-24 h-10 bg-neutral-600 rounded-sm"></div>
                            </div>
                            <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
                              <div className="w-10 h-16 bg-neutral-600 rounded-sm">
                                <div className="w-8 h-2 mx-auto mt-2 bg-[#6E56CF]/50 rounded-sm"></div>
                                <div className="w-8 h-2 mx-auto mt-2 bg-[#6E56CF]/50 rounded-sm"></div>
                                <div className="w-8 h-2 mx-auto mt-2 bg-[#6E56CF]/50 rounded-sm"></div>
                              </div>
                            </div>
                            <svg className="absolute inset-0 w-full h-full">
                              <path
                                d="M22 40 H 50 M 50 30 V 50 M 50 30 H 80 M 50 50 H 80 M 104 30 H 130 M 104 50 H 130"
                                stroke="#6E56CF"
                                strokeWidth="2"
                                fill="none"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-[#6E56CF] text-white text-xs px-2 py-1 rounded-full">
                      Power
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#6E56CF] transition-colors">
                    Dual Rail Power Supply
                  </h3>
                  <p className="text-neutral-400 text-sm mb-3">
                    Stable ±12V power supply for audio and analog applications
                    with low ripple.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      <span className="px-2 py-1 bg-neutral-700 rounded text-xs text-neutral-400">
                        Power
                      </span>
                      <span className="px-2 py-1 bg-neutral-700 rounded text-xs text-neutral-400">
                        Analog
                      </span>
                    </div>
                    <button className="text-[#6E56CF] hover:text-white transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-lg hover:shadow-[#6E56CF]/10 transition-all duration-300 hover:-translate-y-1 group animate__animated animate__fadeInUp">
                <div className="relative">
                  <div className="h-48 bg-neutral-700 overflow-hidden">
                    <div className="absolute inset-0 bg-[#242424] p-4">
                      <div className="h-full w-full overflow-hidden relative">
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#6E56CF_1px,transparent_1px)] bg-[length:15px_15px]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-3/4 h-3/4">
                            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2">
                              <div className="w-24 h-16 bg-neutral-600 rounded-md">
                                <div className="w-4 h-4 absolute top-2 right-2 rounded-full bg-[#6E56CF]/50"></div>
                              </div>
                            </div>
                            <div className="absolute top-1/2 right-1/2 transform -translate-y-1/2">
                              <div className="w-16 h-12 bg-neutral-600 rounded-sm"></div>
                            </div>
                            <div className="absolute top-1/3 right-1/5">
                              <div className="w-10 h-10 bg-neutral-600 rounded-full"></div>
                            </div>
                            <div className="absolute top-2/3 right-1/5">
                              <div className="w-10 h-10 bg-neutral-600 rounded-full"></div>
                            </div>
                            <svg className="absolute inset-0 w-full h-full">
                              <path
                                d="M50 40 H 80 M 96 30 H 120 M 96 50 H 120"
                                stroke="#6E56CF"
                                strokeWidth="2"
                                fill="none"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-[#6E56CF] text-white text-xs px-2 py-1 rounded-full">
                      Robotics
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#6E56CF] transition-colors">
                    Motor Control System
                  </h3>
                  <p className="text-neutral-400 text-sm mb-3">
                    Arduino-based dual motor control system with speed and
                    direction control.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      <span className="px-2 py-1 bg-neutral-700 rounded text-xs text-neutral-400">
                        Arduino
                      </span>
                      <span className="px-2 py-1 bg-neutral-700 rounded text-xs text-neutral-400">
                        Motors
                      </span>
                    </div>
                    <button className="text-[#6E56CF] hover:text-white transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-lg hover:shadow-[#6E56CF]/10 transition-all duration-300 hover:-translate-y-1 group animate__animated animate__fadeInUp">
                <div className="relative">
                  <div className="h-48 bg-neutral-700 overflow-hidden">
                    <div className="absolute inset-0 bg-[#242424] p-4">
                      <div className="h-full w-full overflow-hidden relative">
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#6E56CF_1px,transparent_1px)] bg-[length:15px_15px]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-3/4 h-3/4">
                            <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2">
                              <div className="w-16 h-16 bg-neutral-600 rounded-full flex items-center justify-center">
                                <div className="w-10 h-10 bg-neutral-700 transform rotate-45"></div>
                              </div>
                            </div>
                            <div className="absolute top-1/3 left-1/5">
                              <div className="w-12 h-6 bg-neutral-600 rounded-sm"></div>
                            </div>
                            <div className="absolute top-2/3 left-1/5">
                              <div className="w-12 h-6 bg-neutral-600 rounded-sm"></div>
                            </div>
                            <div className="absolute top-1/2 right-1/4">
                              <div className="w-14 h-6 bg-neutral-600 rounded-sm"></div>
                            </div>
                            <svg className="absolute inset-0 w-full h-full">
                              <path
                                d="M35 30 H 70 M 35 60 H 70 M 86 40 H 115"
                                stroke="#6E56CF"
                                strokeWidth="2"
                                fill="none"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-[#6E56CF] text-white text-xs px-2 py-1 rounded-full">
                      Audio
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#6E56CF] transition-colors">
                    Preamplifier Circuit
                  </h3>
                  <p className="text-neutral-400 text-sm mb-3">
                    High-quality audio preamplifier with low noise and
                    adjustable gain control.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      <span className="px-2 py-1 bg-neutral-700 rounded text-xs text-neutral-400">
                        Audio
                      </span>
                      <span className="px-2 py-1 bg-neutral-700 rounded text-xs text-neutral-400">
                        Op-Amp
                      </span>
                    </div>
                    <button className="text-[#6E56CF] hover:text-white transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-lg hover:shadow-[#6E56CF]/10 transition-all duration-300 hover:-translate-y-1 group animate__animated animate__fadeInUp">
                <div className="relative">
                  <div className="h-48 bg-neutral-700 overflow-hidden">
                    <div className="absolute inset-0 bg-[#242424] p-4">
                      <div className="h-full w-full overflow-hidden relative">
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#6E56CF_1px,transparent_1px)] bg-[length:15px_15px]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-3/4 h-3/4">
                            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
                              <div className="w-20 h-12 bg-neutral-600 rounded-md">
                                <div className="absolute top-0 right-0 w-4 h-4 bg-[#6E56CF]/40 rounded-full"></div>
                              </div>
                            </div>
                            <div className="absolute top-1/3 right-1/3 transform -translate-y-1/2">
                              <div className="w-2 h-16 bg-neutral-600">
                                <div className="w-8 h-1 bg-neutral-600 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                                <div className="w-6 h-1 bg-neutral-600 absolute top-3 left-1/2 transform -translate-x-1/2"></div>
                                <div className="w-4 h-1 bg-neutral-600 absolute top-6 left-1/2 transform -translate-x-1/2"></div>
                              </div>
                            </div>
                            <div className="absolute top-2/3 right-1/4 transform -translate-y-1/2">
                              <div className="w-16 h-12 bg-neutral-600 rounded-sm"></div>
                            </div>
                            <svg className="absolute inset-0 w-full h-full">
                              <path
                                d="M50 40 H 80 M 80 40 V 60 M 80 60 H 105"
                                stroke="#6E56CF"
                                strokeWidth="2"
                                fill="none"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-[#6E56CF] text-white text-xs px-2 py-1 rounded-full">
                      Communication
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#6E56CF] transition-colors">
                    RF Transceiver Module
                  </h3>
                  <p className="text-neutral-400 text-sm mb-3">
                    Wireless communication system with 433MHz RF module for
                    remote control applications.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      <span className="px-2 py-1 bg-neutral-700 rounded text-xs text-neutral-400">
                        RF
                      </span>
                      <span className="px-2 py-1 bg-neutral-700 rounded text-xs text-neutral-400">
                        Wireless
                      </span>
                    </div>
                    <button className="text-[#6E56CF] hover:text-white transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="editor" className="bg-neutral-900 py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intuitive <span className="text-[#6E56CF]">Circuit Editor</span>
              </h2>
              <p className="text-neutral-300 max-w-3xl mx-auto">
                Experience our powerful AI-driven circuit design environment
                with intuitive controls, real-time simulation, and intelligent
                component suggestions.
              </p>
            </div>

            <div className="bg-[#242424] rounded-xl overflow-hidden shadow-2xl border border-neutral-800 animate__animated animate__fadeInUp">
              {/* <!-- Editor Toolbar --> */}
              <div className="bg-neutral-800 border-b border-neutral-700 p-3 flex justify-between items-center">
                <div className="flex items-center">
                  <button className="bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg p-2 mr-2 transition-all duration-200 hover:shadow-lg hover:shadow-[#6E56CF]/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      ></path>
                    </svg>
                  </button>
                  <button className="bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg p-2 mr-2 transition-all duration-200 hover:shadow-lg hover:shadow-[#6E56CF]/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4v16m8-8H4"
                      ></path>
                    </svg>
                  </button>
                  <button className="bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg p-2 mr-2 transition-all duration-200 hover:shadow-lg hover:shadow-[#6E56CF]/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </button>
                  <button className="bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg p-2 mr-2 transition-all duration-200 hover:shadow-lg hover:shadow-[#6E56CF]/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      ></path>
                    </svg>
                  </button>
                  <button className="bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg p-2 transition-all duration-200 hover:shadow-lg hover:shadow-[#6E56CF]/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="flex items-center">
                  <div className="bg-neutral-700 text-white rounded-lg px-4 py-2 flex items-center mr-2">
                    <span className="text-neutral-400 mr-2">Zoom:</span>
                    <span>100%</span>
                  </div>
                  <div className="relative">
                    <button
                      id="export-btn"
                      className="bg-[#6E56CF] hover:bg-[#7d66dc] text-white rounded-lg px-4 py-2 flex items-center transition-all duration-200 hover:shadow-lg hover:shadow-[#6E56CF]/40"
                    >
                      <span>Export</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="export-dropdown"
                      className="hidden absolute right-0 mt-2 w-48 bg-neutral-800 rounded-lg shadow-lg border border-neutral-700 z-10"
                    >
                      <ul className="py-2">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-white hover:bg-neutral-700 transition-colors"
                          >
                            PNG Image
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-white hover:bg-neutral-700 transition-colors"
                          >
                            PDF Document
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-white hover:bg-neutral-700 transition-colors"
                          >
                            Gerber Files
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-white hover:bg-neutral-700 transition-colors"
                          >
                            SPICE Model
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-white hover:bg-neutral-700 transition-colors"
                          >
                            BOM Export
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Editor Main Area --> */}
              <div className="flex h-[600px]">
                {/* <!-- Left Component Panel --> */}
                <div className="w-48 bg-neutral-800 border-r border-neutral-700 p-3 overflow-y-auto">
                  <h3 className="text-white font-medium mb-3">Components</h3>
                  <div className="space-y-2">
                    <div className="bg-neutral-700 hover:bg-neutral-600 p-2 rounded-lg cursor-pointer transition-all group">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-[#6E56CF]/20 rounded flex items-center justify-center mr-2 group-hover:bg-[#6E56CF]/40 transition-colors">
                          <span className="text-[#6E56CF] text-xs">R</span>
                        </div>
                        <span className="text-white text-sm">Resistors</span>
                      </div>
                    </div>
                    <div className="bg-neutral-700 hover:bg-neutral-600 p-2 rounded-lg cursor-pointer transition-all group">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-[#6E56CF]/20 rounded flex items-center justify-center mr-2 group-hover:bg-[#6E56CF]/40 transition-colors">
                          <span className="text-[#6E56CF] text-xs">C</span>
                        </div>
                        <span className="text-white text-sm">Capacitors</span>
                      </div>
                    </div>
                    <div className="bg-neutral-700 hover:bg-neutral-600 p-2 rounded-lg cursor-pointer transition-all group">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-[#6E56CF]/20 rounded flex items-center justify-center mr-2 group-hover:bg-[#6E56CF]/40 transition-colors">
                          <span className="text-[#6E56CF] text-xs">L</span>
                        </div>
                        <span className="text-white text-sm">Inductors</span>
                      </div>
                    </div>
                    <div className="bg-neutral-700 hover:bg-neutral-600 p-2 rounded-lg cursor-pointer transition-all group">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-[#6E56CF]/20 rounded flex items-center justify-center mr-2 group-hover:bg-[#6E56CF]/40 transition-colors">
                          <span className="text-[#6E56CF] text-xs">D</span>
                        </div>
                        <span className="text-white text-sm">Diodes</span>
                      </div>
                    </div>
                    <div className="bg-neutral-700 hover:bg-neutral-600 p-2 rounded-lg cursor-pointer transition-all group">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-[#6E56CF]/20 rounded flex items-center justify-center mr-2 group-hover:bg-[#6E56CF]/40 transition-colors">
                          <span className="text-[#6E56CF] text-xs">T</span>
                        </div>
                        <span className="text-white text-sm">Transistors</span>
                      </div>
                    </div>
                    <div className="bg-neutral-700 hover:bg-neutral-600 p-2 rounded-lg cursor-pointer transition-all group">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-[#6E56CF]/20 rounded flex items-center justify-center mr-2 group-hover:bg-[#6E56CF]/40 transition-colors">
                          <span className="text-[#6E56CF] text-xs">IC</span>
                        </div>
                        <span className="text-white text-sm">ICs</span>
                      </div>
                    </div>
                    <div className="bg-neutral-700 hover:bg-neutral-600 p-2 rounded-lg cursor-pointer transition-all group">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-[#6E56CF]/20 rounded flex items-center justify-center mr-2 group-hover:bg-[#6E56CF]/40 transition-colors">
                          <span className="text-[#6E56CF] text-xs">S</span>
                        </div>
                        <span className="text-white text-sm">Switches</span>
                      </div>
                    </div>
                    <div className="bg-neutral-700 hover:bg-neutral-600 p-2 rounded-lg cursor-pointer transition-all group">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-[#6E56CF]/20 rounded flex items-center justify-center mr-2 group-hover:bg-[#6E56CF]/40 transition-colors">
                          <span className="text-[#6E56CF] text-xs">M</span>
                        </div>
                        <span className="text-white text-sm">MCUs</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Center Main Editor Area --> */}
                <div className="flex-1 bg-[#242424] relative overflow-hidden">
                  {/* <!-- Grid background --> */}
                  <div className="absolute inset-0 pointer-events-none opacity-10">
                    <div
                      className="w-full h-full"
                      //  style="background-image: radial-gradient(circle, #6E56CF 1px, transparent 1px); background-size: 20px 20px;"
                    ></div>
                  </div>

                  {/* <!-- Demo Circuit Elements --> */}
                  <div className="relative w-full h-full">
                    {/* <!-- Circuit component example --> */}
                    <div className="absolute top-[100px] left-[200px] bg-neutral-800 rounded-md p-2 shadow-md border border-neutral-700 cursor-move">
                      <div className="text-center text-xs text-white mb-1">
                        ATmega328P
                      </div>
                      <div className="w-32 h-20 bg-neutral-700 rounded relative">
                        <div className="absolute top-0 left-0 w-full flex justify-between px-1">
                          <div className="w-1 h-2 bg-neutral-600"></div>
                          <div className="w-1 h-2 bg-neutral-600"></div>
                          <div className="w-1 h-2 bg-neutral-600"></div>
                          <div className="w-1 h-2 bg-neutral-600"></div>
                          <div className="w-1 h-2 bg-neutral-600"></div>
                          <div className="w-1 h-2 bg-neutral-600"></div>
                          <div className="w-1 h-2 bg-neutral-600"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full flex justify-between px-1">
                          <div className="w-1 h-2 bg-neutral-600"></div>
                          <div className="w-1 h-2 bg-neutral-600"></div>
                          <div className="w-1 h-2 bg-neutral-600"></div>
                          <div className="w-1 h-2 bg-neutral-600"></div>
                          <div className="w-1 h-2 bg-neutral-600"></div>
                          <div className="w-1 h-2 bg-neutral-600"></div>
                          <div className="w-1 h-2 bg-neutral-600"></div>
                        </div>
                        <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-1">
                          <div className="h-1 w-2 bg-neutral-600"></div>
                          <div className="h-1 w-2 bg-neutral-600"></div>
                          <div className="h-1 w-2 bg-neutral-600"></div>
                          <div className="h-1 w-2 bg-neutral-600"></div>
                        </div>
                        <div className="absolute right-0 top-0 h-full flex flex-col justify-between py-1">
                          <div className="h-1 w-2 bg-neutral-600"></div>
                          <div className="h-1 w-2 bg-neutral-600"></div>
                          <div className="h-1 w-2 bg-neutral-600"></div>
                          <div className="h-1 w-2 bg-neutral-600"></div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-4 h-4 bg-[#6E56CF]/30 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Resistor component --> */}
                    <div className="absolute top-[200px] left-[400px] bg-neutral-800 rounded-md p-2 shadow-md border border-neutral-700 cursor-move">
                      <div className="text-center text-xs text-white mb-1">
                        10kΩ
                      </div>
                      <div className="w-20 h-10 bg-neutral-700 rounded relative flex items-center justify-center">
                        <div className="w-16 h-6 bg-neutral-600 rounded-sm flex items-center justify-center">
                          <div className="flex space-x-1">
                            <div className="w-1 h-3 bg-[#6E56CF]"></div>
                            <div className="w-1 h-3 bg-[#6E56CF]"></div>
                            <div className="w-1 h-3 bg-[#6E56CF]"></div>
                            <div className="w-1 h-3 bg-[#6E56CF]"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Capacitor component --> */}
                    <div className="absolute top-[350px] left-[300px] bg-neutral-800 rounded-md p-2 shadow-md border border-neutral-700 cursor-move">
                      <div className="text-center text-xs text-white mb-1">
                        220uF
                      </div>
                      <div className="w-12 h-16 bg-neutral-700 rounded relative flex flex-col items-center justify-center">
                        <div className="w-8 h-2 bg-neutral-600 mb-1"></div>
                        <div className="w-8 h-2 bg-neutral-600"></div>
                      </div>
                    </div>

                    {/* <!-- Connections --> */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                      <path
                        d="M245 125 L 320 125 L 320 205 L 400 205"
                        stroke="#6E56CF"
                        stroke-width="2"
                        fill="none"
                      ></path>
                      <path
                        d="M245 145 L 280 145 L 280 350 L 300 350"
                        stroke="#6E56CF"
                        stroke-width="2"
                        fill="none"
                      ></path>
                    </svg>

                    {/* <!-- Measurement cursor --> */}
                    <div className="absolute top-[180px] left-[350px] w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">
                      V
                    </div>
                  </div>

                  {/* <!-- Floating Action Button --> */}
                  <div className="absolute bottom-6 right-6">
                    <button
                      id="share-fab"
                      className="w-14 h-14 rounded-full bg-[#6E56CF] hover:bg-[#7d66dc] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-[#6E56CF]/30 hover:scale-110"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* <!-- Right Properties Panel --> */}
                <div className="w-64 bg-neutral-800 border-l border-neutral-700 p-4 overflow-y-auto">
                  <h3 className="text-white font-medium mb-4">Properties</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-neutral-400 text-sm mb-2">
                        Component Type
                      </label>
                      <div className="bg-neutral-700 rounded-lg p-2 text-white text-sm">
                        ATmega328P
                      </div>
                    </div>
                    <div>
                      <label className="block text-neutral-400 text-sm mb-2">
                        Manufacturer
                      </label>
                      <select className="w-full bg-neutral-700 border border-[#505050] rounded-lg p-2 text-white text-sm focus:border-[#6E56CF] outline-none">
                        <option>Microchip</option>
                        <option>Atmel</option>
                        <option>Generic</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-neutral-400 text-sm mb-2">
                        Package
                      </label>
                      <select className="w-full bg-neutral-700 border border-[#505050] rounded-lg p-2 text-white text-sm focus:border-[#6E56CF] outline-none">
                        <option>DIP-28</option>
                        <option>TQFP-32</option>
                        <option>MLF-32</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-neutral-400 text-sm mb-2">
                        Clock Speed
                      </label>
                      <input
                        type="text"
                        value="16 MHz"
                        className="w-full bg-neutral-700 border border-[#505050] rounded-lg p-2 text-white text-sm focus:border-[#6E56CF] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-400 text-sm mb-2">
                        Operating Voltage
                      </label>
                      <input
                        type="text"
                        value="5V"
                        className="w-full bg-neutral-700 border border-[#505050] rounded-lg p-2 text-white text-sm focus:border-[#6E56CF] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-400 text-sm mb-2">
                        Description
                      </label>
                      <textarea className="w-full bg-neutral-700 border border-[#505050] rounded-lg p-2 text-white text-sm focus:border-[#6E56CF] outline-none h-20 resize-none">
                        8-bit microcontroller with 32KB flash memory, 2KB SRAM,
                        and 1KB EEPROM.
                      </textarea>
                    </div>
                    <div className="pt-2">
                      <h4 className="text-neutral-400 text-sm mb-3">
                        AI Suggestions
                      </h4>
                      <div className="space-y-2">
                        <div className="bg-neutral-700 hover:bg-neutral-600 rounded-lg p-2 cursor-pointer border border-[#505050] group hover:border-[#6E56CF] transition-all">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-[#6E56CF]/20 flex items-center justify-center mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-[#6E56CF]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                ></path>
                              </svg>
                            </div>
                            <span className="text-white text-xs">
                              Add decoupling capacitor
                            </span>
                          </div>
                        </div>
                        <div className="bg-neutral-700 hover:bg-neutral-600 rounded-lg p-2 cursor-pointer border border-[#505050] group hover:border-[#6E56CF] transition-all">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-[#6E56CF]/20 flex items-center justify-center mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-[#6E56CF]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                ></path>
                              </svg>
                            </div>
                            <span className="text-white text-xs">
                              Add crystal oscillator
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Status Bar --> */}
              <div className="bg-neutral-800 border-t border-neutral-700 p-2 flex justify-between items-center text-xs text-neutral-400">
                <div className="flex items-center">
                  <span className="px-2 py-1 rounded bg-[#6E56CF]/20 text-[#6E56CF] mr-2">
                    Ready
                  </span>
                  <span>Project: MyCircuit.cba</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div>Components: 32</div>
                  <div>Connections: 56</div>
                  <div>Voltage: 5V</div>
                  <div>Current: 120mA</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default LandingPage;
