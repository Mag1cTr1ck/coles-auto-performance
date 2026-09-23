export const site = {
  shopName: "Cole's Auto Performance Ltd",
  shopShort: "Cole's Auto",
  brandTitle: "Cole's AUTO | MOBILE | TOWING",
  shopKind: 'Service shop',
  towName: 'C-Haul Towing',
  tagline: 'Where performance meets reliability',
  phone: '+13459362653',
  phoneDisplay: '345-936-2653',
  whatsapp: '13459362653',
  email: 'service@colesauto.ky',
  website: 'https://colesauto.ky/',
  websiteDisplay: 'colesauto.ky',
  instagram: 'https://instagram.com/colesautoky',
  instagramHandle: '@colesautoky',
  address: 'Barnes Drive, Propose Queens Jubilee City Limit (Study Area), George Town, Grand Cayman',
  addressShort: 'Barnes Drive, George Town',
  mapQuery: 'Barnes Drive, George Town, Grand Cayman',
  hours: {
    shop: [
      { days: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
      { days: 'Saturday & Sunday', time: 'By appointment' },
    ],
    tow: 'C-Haul Towing — 24/7 emergency dispatch',
  },
} as const

/** Flip to true to show tire sales and fitting on the public site. */
export const features = {
  tires: false,
} as const

export const pillars = [
  {
    id: 'shop',
    title: 'Service shop',
    text: 'A full service shop on Barnes Drive — diagnostics, maintenance, and repairs for daily Cayman cars, including EV and hybrid.',
    href: '/services',
    cta: 'Book service',
    image: '/media/shop-bay.jpg',
  },
  {
    id: 'tires',
    title: 'Tire sales & fitting',
    text: 'New tires sold and fitted at the shop — mounted, balanced, and checked so you leave road-ready.',
    href: '/tires',
    cta: 'Book tire fitting',
    image: '/media/roadside.jpg',
  },
  {
    id: 'mobile',
    title: 'Pickup & Mobile',
    text: 'Courtesy pickup and delivery from Savannah to West Bay, as far as Spotts. Non-starts go on the truck.',
    href: '/mobile',
    cta: 'Book pickup',
    image: '/media/tools.jpg',
  },
  {
    id: 'tow',
    title: 'C-Haul towing',
    text: '24/7 towing, tow-in to the shop, recovery, and roadside help. Call and we haul.',
    href: '/towing',
    cta: 'Request Tow / Mobile',
    image: '/media/tow-truck.jpg',
  },
] as const

export const services = [
  {
    id: 'diagnostics',
    category: 'shop' as const,
    name: 'Advanced diagnostics & repair',
    description:
      'Factory scan tools for all makes, oscilloscope, thermal camera, bore-scope, and factory wiring diagrams. Quality work by certified technicians — from the fault to the fix.',
    time: '1–3 hours typical',
    price: 'Quoted after scan',
    icon: 'scan',
  },
  {
    id: 'electrical',
    category: 'shop' as const,
    name: 'Precision electrical diagnostics',
    description:
      'Automotive electrical faults traced properly — modules, wiring, charging, sensors, and no-guesswork testing.',
    time: '1–4 hours',
    price: 'Quoted after test',
    icon: 'scan',
  },
  {
    id: 'european',
    category: 'shop' as const,
    name: 'European vehicle specialists',
    description:
      'European cars serviced with advanced OEM tools. Precision work the way the manufacturer intended.',
    time: 'By job',
    price: 'Custom quote',
    icon: 'wrench',
  },
  {
    id: 'asian',
    category: 'shop' as const,
    name: 'Asian vehicle specialists',
    description:
      'Master-level expertise on Toyota and other Asian makes, including factory-trained diagnostic approach.',
    time: 'By job',
    price: 'Custom quote',
    icon: 'wrench',
  },
  {
    id: 'oil',
    category: 'shop' as const,
    name: 'Oil changes & routine maintenance',
    description:
      'Full range of scheduled service — oil, filters, fluids, and the checks that keep Cayman cars reliable.',
    time: '45–90 min',
    price: 'Quoted by vehicle',
    icon: 'oil',
  },
  {
    id: 'tires',
    category: 'shop' as const,
    name: 'Tire sales and fitting',
    description:
      'New tires sold and fitted at the shop — mounting, balancing, TPMS, and a safety check so you leave road-ready. Sizes for cars, SUVs, and light trucks.',
    time: '45–90 min',
    price: 'Quoted by size',
    icon: 'tire',
  },
  {
    id: 'complete-care',
    category: 'shop' as const,
    name: 'Complete vehicle service',
    description:
      'A service shop for everyday Cayman vehicles — routine maintenance through complex mechanical repairs. We service what we diagnose.',
    time: 'Same day to several days',
    price: 'Quoted before work',
    icon: 'wrench',
  },
  {
    id: 'brakes',
    category: 'shop' as const,
    name: 'Brake service',
    description:
      'Pads, rotors, fluid, and the dry-road brake performance needed for a DVDL pass.',
    time: '1–3 hours',
    price: 'Quoted after inspection',
    icon: 'brake',
  },
  {
    id: 'ac',
    category: 'shop' as const,
    name: 'A/C repair',
    description: 'Cayman-ready cooling: leak checks, recharge, compressor, and condenser work.',
    time: '1–4 hours',
    price: 'Quoted after inspection',
    icon: 'ac',
  },
  {
    id: 'ev-hybrid',
    category: 'shop' as const,
    name: 'EV & hybrid vehicle service',
    description:
      'EV and hybrid certified since 2010. High-voltage systems, hybrids, and everyday EV maintenance.',
    time: 'By appointment',
    price: 'Quoted after assessment',
    icon: 'battery',
  },
  {
    id: 'ev-battery',
    category: 'shop' as const,
    name: 'EV battery replacement & upgrade',
    description:
      'Nissan LEAF, e-NV200, BMW i3, Mitsubishi Outlander PHEV / i-MiEV, and Toyota hybrid cell replacement. Vehicle is inspected before any battery work is recommended.',
    time: 'By assessment',
    price: 'From CI$4,300',
    icon: 'battery',
  },
  {
    id: 'dvdl',
    category: 'shop' as const,
    name: 'DVDL inspection',
    description:
      'Free DVDL inspection. Bring the original logbook and valid insurance. Vehicle must be mechanically safe, legal tint, and roads must be dry for the brake test.',
    time: 'Same-day when roads are dry',
    price: 'Free',
    icon: 'scan',
  },
  {
    id: 'pickup',
    category: 'mobile' as const,
    name: 'Vehicle pickup & delivery',
    description:
      'Courtesy pickup and delivery for clients from Savannah to West Bay, available as far as Spotts. Restrictions apply. Combined with other shop work, pickup is covered.',
    time: 'Scheduled weekday',
    price: 'Quoted / complimentary with service',
    icon: 'van',
  },
  {
    id: 'mobile-service',
    category: 'mobile' as const,
    name: 'Mobile mechanic visit',
    description:
      'On-site help when the car can stay where it is. If it will not start, it is a tow-in — no exceptions.',
    time: 'By appointment',
    price: 'Quoted',
    icon: 'van',
  },
  {
    id: 'tow-in',
    category: 'tow' as const,
    name: 'Tow-in to the shop',
    description:
      'Non-starts and unsafe-to-drive vehicles come in on the truck. Written request, then C-Haul delivers to Barnes Drive.',
    time: '24/7 dispatch',
    price: 'Quoted by location',
    icon: 'tow',
  },
  {
    id: 'towing',
    category: 'tow' as const,
    name: 'Vehicle towing',
    description:
      'Cars, SUVs, pickups, luxury vehicles, accident recovery, and non-running vehicles island-wide.',
    time: '24/7 dispatch',
    price: 'Quoted by location',
    icon: 'tow',
  },
  {
    id: 'roadside',
    category: 'tow' as const,
    name: 'Roadside assistance',
    description: 'Flat tires, lockouts, jump starts, minor roadside help, and emergency support.',
    time: '24/7 dispatch',
    price: 'Quoted',
    icon: 'tire',
  },
] as const

export const evPricing = [
  {
    title: 'Nissan LEAF — 65 kWh',
    lines: ['2011–2017 ZE0: CI$12,900', '2017–2025 ZE1: CI$11,900'],
  },
  {
    title: 'Nissan LEAF — 40 kWh',
    lines: ['2011–2017 ZE0: CI$11,400', '2017–2025 ZE1: CI$10,400'],
  },
  {
    title: 'Nissan e-NV200',
    lines: ['65 kWh: CI$11,900', '40 kWh: CI$10,400'],
  },
  {
    title: 'BMW i3',
    lines: ['40 kWh: CI$10,400'],
  },
  {
    title: 'Mitsubishi Outlander PHEV & i-MiEV',
    lines: ['30 kWh: CI$10,400'],
  },
  {
    title: 'Toyota hybrid cell replacement',
    lines: ['Passenger cars: CI$4,300', 'SUVs: CI$5,200'],
  },
]

export const evNotes = [
  'Prices are guidelines and may change. Final quote follows a full vehicle and high-voltage assessment.',
  'No financing. Used batteries are not installed in Nissan LEAFs. Client-supplied parts are not accepted.',
  'Upgrade rebuilds can take capacity to about 60 kWh — up to three times original range, vehicle and conditions depending.',
  'Warranty on rebuild/upgrade: 1 year parts on the HV assembly and 1 year labour on the installation.',
]

export const dvdlChecks = [
  {
    title: 'Logbook',
    text: 'Previously registered Cayman vehicles need the original DVDL logbook. First-time island vehicles need the inspection before a new logbook can be issued.',
  },
  {
    title: 'Valid insurance',
    text: 'Proof of current coverage with a policy number is required. This is a legal DVDL obligation.',
  },
  {
    title: 'Dry roads',
    text: 'A brake-performance road test is part of the inspection. If it rains or roads are unsafe, we reschedule.',
  },
  {
    title: 'Window tint',
    text: 'Tint must meet DVDL limits. We cannot pass a vehicle with illegal tint.',
  },
  {
    title: 'Mechanically safe',
    text: 'Tires, suspension, lights, brakes, engine lights and performance, mirrors, seat belts, leaks, horn, exhaust, airbags (including Takata recalls), and anything else that affects roadworthiness.',
  },
  {
    title: 'Repairs first',
    text: 'If it fails, every item must be corrected before a pass. Parts-on-order passes are no longer allowed.',
  },
  {
    title: 'Fee',
    text: 'The DVDL inspection is free. Pickup and delivery is charged unless combined with other shop service.',
  },
]

export const equipment = [
  'Factory scan tools (all makes)',
  'Scan tools for imported and specialist vehicles',
  'Tire pressure sensor tools',
  'Proper measuring devices',
  'Full diagnostic equipment',
  '10,000 lb vehicle lifts',
  'Thermal camera',
  'Bore-scope',
  'Oscilloscope',
  'Factory wiring diagrams',
]

export const team = [
  {
    name: 'Jamie Love',
    role: 'Operational supervisor, master technician & director',
    text: '25+ years in automotive. EV and hybrid certified since 2010. Focused on keeping your vehicle as reliable as the day you bought it.',
    img: '/media/shop-bay.jpg',
  },
  {
    name: 'Johnny Balmer',
    role: 'Red Seal journeyman & master technician',
    text: 'Toyota-trained master technician. Thorough diagnostics and a clear plan of action on complex faults. 20+ years in the trade.',
    img: '/media/tools.jpg',
  },
  {
    name: 'Dino Alon',
    role: 'Automotive master technician',
    text: '20+ years. Honest advice on wear and tear — repair what is needed, when it is needed, and finish the job right.',
    img: '/media/brakes.jpg',
  },
  {
    name: 'Paul Casey',
    role: 'Service advisor',
    text: 'Serving the automotive community since 2001. 25+ years of honest guidance so you can make informed decisions.',
    img: '/media/fleet.jpg',
  },
  {
    name: 'Juan Versoza (Poa)',
    role: 'Car care & pickup attendant',
    text: 'Collects and delivers client vehicles safely, on time, and to the right place.',
    img: '/media/roadside.jpg',
  },
  {
    name: 'Christian Lara',
    role: 'Technician assistant',
    text: 'Keeps the shop moving — parts, prep, and a clean car when the work is done.',
    img: '/media/performance.jpg',
  },
]

export const towCards = [
  {
    title: 'Tow-in to Service centre',
    text: 'Non-starts come in on the truck. No exceptions. Written request, then we bring it to the shop.',
    icon: 'tow' as const,
  },
  {
    title: 'Vehicle towing',
    text: 'Cars, SUVs, pickups, luxury vehicles, accident recovery, and non-running vehicles.',
    icon: 'tow' as const,
  },
  {
    title: 'Roadside assistance',
    text: 'Flat tires, lockouts, battery jump starts, minor roadside help, and emergency support.',
    icon: 'tire' as const,
  },
  {
    title: 'Breakdown recovery',
    text: 'Safe pickup from the roadside and transport to the shop, home, or your preferred destination.',
    icon: 'wrench' as const,
  },
]

export const roadsideList = [
  'Jump starts',
  'Flat tire assistance',
  'Vehicle lockout support',
  'Tow-in for non-starts',
  'Emergency roadside recovery',
  'Fuel delivery',
]

export const workShots = [
  {
    src: '/media/tow-truck.jpg',
    label: 'Vehicle recovery',
    caption: 'C-Haul on a Grand Cayman recovery',
  },
  {
    src: '/media/shop-bay.jpg',
    label: 'Shop service',
    caption: "Cole's Auto on Barnes Drive",
  },
  {
    src: '/media/roadside.jpg',
    label: 'On the road',
    caption: 'Island-wide roadside response',
  },
  {
    src: '/media/tools.jpg',
    label: 'Pickup & delivery',
    caption: 'Savannah to West Bay, as far as Spotts',
  },
  {
    src: '/media/performance.jpg',
    label: 'Service work',
    caption: 'European, Asian, EV, and everyday Cayman cars',
  },
  {
    src: '/media/fleet.jpg',
    label: 'Safe transport',
    caption: 'Careful loading and delivery',
  },
]

export const reviews = [
  {
    name: 'Andre W.',
    area: 'West Bay',
    text: 'Called C-Haul after a late breakdown on West Bay Road. Truck was there fast, loaded the car cleanly, and the Barnes Drive shop had it diagnosed the next morning.',
  },
  {
    name: 'Melissa C.',
    area: 'George Town',
    text: 'Pickup from the office, honest quote, no runaround. This is how car service should work in Cayman.',
  },
  {
    name: 'James P.',
    area: 'Savannah',
    text: 'Courtesy pickup as far as Spotts, then a real diagnostic — not a guess. They called before they spent a dollar.',
  },
]

export const districts = [
  'George Town',
  'West Bay',
  'Seven Mile Beach',
  'South Sound',
  'Spotts',
  'Savannah',
  'Prospect',
  'Bodden Town',
  'North Side',
  'East End',
]

export const values = [
  {
    title: 'Fast response',
    text: 'Help should feel one call away. Call, WhatsApp, or book — we pick up and we move.',
  },
  {
    title: 'Careful handling',
    text: 'Vehicles are loaded, secured, and delivered professionally. No extra damage on our watch.',
  },
  {
    title: 'Local service',
    text: 'Barnes Drive shop, pickup from Savannah to West Bay, and C-Haul for the rest of the island.',
  },
  {
    title: 'Clear communication',
    text: 'Stay reachable while the vehicle is in our care. You know the plan before work starts.',
  },
]

export function publicServices() {
  return features.tires ? services : services.filter((s) => s.id !== 'tires')
}

export function publicPillars() {
  return features.tires ? pillars : pillars.filter((p) => p.id !== 'tires')
}

export function categoryLabel(category: 'shop' | 'mobile' | 'tow') {
  if (category === 'tow') return 'Towing'
  if (category === 'mobile') return 'Mobile'
  return 'Shop'
}

export function telHref() {
  return `tel:${site.phone}`
}

export function waHref(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export function mailHref(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
