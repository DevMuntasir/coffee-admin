export type CmsContent = {
  brand: { name: string; tagline: string; logo: string; favicon: string };
  header: { announcement: string; reserveLabel: string; accountLabel: string };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryLabel: string;
    primaryUrl: string;
    secondaryLabel: string;
    image: string;
  };
  about: { eyebrow: string; title: string; description: string; quote: string; image: string };
  menu: { eyebrow: string; title: string; description: string };
  journey: { eyebrow: string; title: string; description: string };
  whyUs: { eyebrow: string; title: string; description: string; image: string };
  gallery: { eyebrow: string; title: string; description: string };
  testimonials: { eyebrow: string; title: string; description: string };
  booking: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    background: string;
  };
  contact: {
    title: string;
    description: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    mapUrl: string;
  };
  footer: {
    description: string;
    copyright: string;
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
    canonicalUrl: string;
    ogImage: string;
    robots: string;
  };
};

export const defaultCmsContent: CmsContent = {
  brand: {
    name: 'Kaffen',
    tagline: 'Coffee & conversation',
    logo: '/images/logo.png',
    favicon: '/images/cropped-logo-32x32.png',
  },
  header: {
    announcement: 'Slow moments. Exceptional coffee.',
    reserveLabel: 'Reserve a table',
    accountLabel: 'Account',
  },
  hero: {
    eyebrow: 'The after-dark collection',
    title: 'Midnight Roast',
    description:
      'Crafted in the shadows, brewed for the bold. Experience the art of the perfect extraction.',
    primaryLabel: 'Explore the Brew',
    primaryUrl: '#menu',
    secondaryLabel: 'Get delivery',
    image: '/images/midnight-hero.webp',
  },
  about: {
    eyebrow: 'About us',
    title: 'Organic & Fresh Coffee Provider Center',
    description: 'Coffee, conversation, and memorable moments—made fresh every day.',
    quote: 'A carefully made cup can turn an ordinary pause into something worth remembering.',
    image: '/images/about_img.png',
  },
  menu: {
    eyebrow: 'Choose best coffee',
    title: 'Popular Coffee Menu',
    description: 'A rotating selection of espresso, filter, and signature coffee.',
  },
  journey: {
    eyebrow: 'From bean to cup',
    title: 'The coffee journey',
    description: 'Follow every step from selection and roasting to the final pour.',
  },
  whyUs: {
    eyebrow: 'Why choose us',
    title: 'Coffee made for extraordinary moments',
    description: 'Thoughtful sourcing, expert roasting, and warm hospitality in every visit.',
    image: '/images/choose_img-900x600.jpg',
  },
  gallery: {
    eyebrow: 'Inside Kaffen',
    title: 'Coffee gallery',
    description: 'A look at our cups, craft, and community.',
  },
  testimonials: {
    eyebrow: 'Customer feedback',
    title: 'What Our Clients Say',
    description: 'Stories shared by the people who make this place special.',
  },
  booking: {
    eyebrow: 'A seat for every occasion',
    title: 'Good company. A table waiting.',
    description:
      'Slow mornings, catch-ups, or something to celebrate. Make a little time for each other.',
    buttonLabel: 'Plan an Adda Meeting',
    background: '/images/cta_bg.jpg',
  },
  contact: {
    title: 'Contact us',
    description: 'Drop in, call, or send us a note.',
    address: '55 Main Street, New York',
    phone: '+012 (345) 678 99',
    email: 'info@kaffen.com',
    hours: '08:00 am - 09:00 pm',
    mapUrl: '',
  },
  footer: {
    description: 'Exceptional coffee and good conversation, every day.',
    copyright: 'Copyright © 2026 Kaffen',
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    twitter: 'https://twitter.com/',
    youtube: 'https://youtube.com/',
  },
  seo: {
    title: 'Kaffen — Coffee & Conversation',
    description:
      'Discover specialty coffee, fresh food, and a welcoming place for every conversation.',
    keywords: 'coffee, cafe, specialty coffee, reservations',
    canonicalUrl: '',
    ogImage: '/images/midnight-hero.webp',
    robots: 'index, follow',
  },
};
