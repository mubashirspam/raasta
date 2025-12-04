import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Building2,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white z-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300 transition-colors duration-500 border-t border-gray-100 dark:border-gray-800">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="p-2 bg-amber-500 rounded-lg transform transition-transform duration-300 group-hover:rotate-12">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Raasta <span className="text-amber-500">Realty</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Elevating your lifestyle with premium real estate solutions in
              Dubai. We bridge the gap between dream homes and reality.
            </p>
            <div className="flex space-x-4 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-amber-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
                "Properties",
                "About Us",
                "Consultation",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center text-sm hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-amber-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-amber-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                "Luxury Properties",
                "Off-Plan Projects",
                "Commercial Real Estate",
                "Investment Advisory",
                "Property Management",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center text-sm hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-200"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-amber-500 rounded-full"></span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 group">
                <Mail className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0 group-hover:animate-bounce" />
                <a
                  href="mailto:info@raastarealty.com"
                  className="text-sm hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                >
                  info@raastarealty.com
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0 group-hover:animate-pulse" />
                <a
                  href="tel:+971501234567"
                  className="text-sm hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                >
                  +971 50 123 4567
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Dubai Marina,
                  <br />
                  United Arab Emirates
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500 dark:text-gray-500">
            <p>&copy; {currentYear} Raasta Realty. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-amber-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
