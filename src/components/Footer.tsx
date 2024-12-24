import { FaInstagram } from 'react-icons/fa';
import { footerLinks } from '../data/footerLinks';

export function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-swirlazzo-teal mb-4">Collecties</h3>
            <ul className="space-y-2">
              {footerLinks.collections.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-swirlazzo-teal transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-swirlazzo-teal mb-4">Swirlazzo</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-swirlazzo-teal transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-swirlazzo-teal mb-4">Volg Swirlazzo</h3>
            <a
              href="https://instagram.com/swirlazzo"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center space-x-2 text-swirlazzo-pink hover:text-swirlazzo-teal transition-colors"
            >
              <FaInstagram size={24} />
              <span>@swirlazzo</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Swirlazzo. Alle rechten voorbehouden. | BExxxxxxx</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {footerLinks.legal.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="hover:text-swirlazzo-teal transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}