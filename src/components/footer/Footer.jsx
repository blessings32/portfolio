export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      label: "GitHub",
      icon: "fa-github",
      url: "https://github.com/blessings32",
    },
    {
      label: "LinkedIn",
      icon: "fa-linkedin",
      url: "https://www.linkedin.com/in/blessings-chaleka-226196262",
    },
    {
      label: "Facebook",
      icon: "fa-facebook",
      url: "https://www.facebook.com/chaleka32",
    },
    {
      label: "Instagram",
      icon: "fa-instagram",
      url: "https://www.instagram.com/chaleka32",
    },
  ];

  return (
    <footer className="pt-16 px-4 md:pl-14 w-full h-max bg-slate-900">
      <div className="w-full md:w-[calc(100%-150px)] max-w-6xl">
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-slate-700 via-primary-600 to-slate-700 mb-8"></div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-textColor-50 mb-3">
              Blessing Chaleka
            </h3>
            <p className="text-textColor-400 text-sm md:text-base leading-relaxed">
              Sustainable Energy Engineering student passionate about IoT,
              embedded systems, and web development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-textColor-100 font-semibold mb-4 text-base md:text-lg">
              Quick Links
            </h4>
            <nav className="space-y-2">
              <a
                href="#home"
                className="text-textColor-400 hover:text-primary-400 transition duration-200 text-sm md:text-base block"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-textColor-400 hover:text-primary-400 transition duration-200 text-sm md:text-base block"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-textColor-400 hover:text-primary-400 transition duration-200 text-sm md:text-base block"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-textColor-400 hover:text-primary-400 transition duration-200 text-sm md:text-base block"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-textColor-100 font-semibold mb-4 text-base md:text-lg">
              Connect
            </h4>
            <div className="flex gap-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-900 border border-slate-700 hover:border-primary-600 hover:bg-primary-600 rounded-lg flex items-center justify-center text-textColor-400 hover:text-textColor-50 transition-all duration-200"
                  aria-label={link.label}
                >
                  <i className={`fa-brands ${link.icon} text-base`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left pb-8">
          <p className="text-textColor-500 text-sm">
            © {currentYear} Blessing Chaleka. All rights reserved.
          </p>
          <p className="text-textColor-500 text-sm">
            Designed & developed with{" "}
            <i className="fa-solid fa-heart text-accent-600 mx-1"></i>
          </p>
        </div>
      </div>
    </footer>
  );
}
