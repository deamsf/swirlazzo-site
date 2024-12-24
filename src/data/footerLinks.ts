export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinks {
  collections: FooterLink[];
  company: FooterLink[];
  legal: FooterLink[];
}

export const footerLinks: FooterLinks = {
  collections: [
    { name: 'Nieuw Binnen', href: 'https://www.swirlazzo.be/shop/new-arrivals' },
    { name: 'Best Verkopend', href: 'https://www.swirlazzo.be/shop/best-sellers' },
    { name: 'Mooie gipsen potjes', href: 'https://www.swirlazzo.be/shop/jars' },
    { name: 'Leuke gipsen vaasjes', href: 'https://www.swirlazzo.be/shop/card-holders' },
    { name: 'Decoratieve schalen', href: 'https://www.swirlazzo.be/shop/decorative-trays' },
  ],
  company: [
    { name: 'Over mij', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Verzending', href: '/shipping' },
    { name: 'Retours', href: '/returns' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Gebruiksvoorwaarden', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};