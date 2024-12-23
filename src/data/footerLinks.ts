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
    { name: 'New Arrivals', href: 'https://www.swirlazzo.be/shop/new-arrivals' },
    { name: 'Best Sellers', href: 'https://www.swirlazzo.be/shop/best-sellers' },
    { name: 'Jars & Containers', href: 'https://www.swirlazzo.be/shop/jars' },
    { name: 'Card Holders', href: 'https://www.swirlazzo.be/shop/card-holders' },
    { name: 'Decorative Trays', href: 'https://www.swirlazzo.be/shop/decorative-trays' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Shipping', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};