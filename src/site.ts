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
  instagram: 'https://www.instagram.com/cole.s_servicecentre_ky',
  instagramHandle: '@cole.s_servicecentre_ky',
  facebook: 'https://www.facebook.com/profile.php?id=61595585871330',
  address: 'Barnes Drive, Propose Queens Jubilee City Limit (Study Area), George Town, Grand Cayman',
  addressShort: 'Barnes Drive, George Town',
  mapQuery: 'Barnes Drive, George Town, Grand Cayman',
  hours: {
    shop: [
      { days: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
      { days: 'Saturday & Sunday', time: 'By appointment' },
    ],
    tow: 'C-Haul Towing — 24/7 dispatch',
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
    id: 'oil',
    category: 'shop' as const,
    group: 'maintenance' as const,
    name: 'Oil change & filter replacement',
    description: 'Scheduled oil and filter service, quoted by vehicle and oil spec.',
    time: '45–90 min',
    price: 'Quoted by vehicle',
    icon: 'oil',
  },
  {
    id: 'fluids',
    category: 'shop' as const,
    group: 'maintenance' as const,
    name: 'Fluid top-ups',
    description: 'Coolant, brake, power steering, washer, and transmission fluid checks and top-ups.',
    time: '30–60 min',
    price: 'Quoted',
    icon: 'oil',
  },
  {
    id: 'battery',
    category: 'shop' as const,
    group: 'maintenance' as const,
    name: 'Battery testing & replacement',
    description: 'Load test, charging-system check, and battery replacement when the pack is done.',
    time: '30–60 min',
    price: 'Quoted after test',
    icon: 'battery',
  },
  {
    id: 'wipers',
    category: 'shop' as const,
    group: 'maintenance' as const,
    name: 'Wiper blade replacement',
    description: 'Front and rear blades fitted for Cayman rain, with a wipe test before you leave.',
    time: '15–30 min',
    price: 'Quoted by size',
    icon: 'wrench',
  },
  {
    id: 'health-inspection',
    category: 'shop' as const,
    group: 'maintenance' as const,
    name: 'Vehicle health inspection',
    description: 'A full walk-around: fluids, brakes, lights, belts, leaks, and what is coming due.',
    time: '45–90 min',
    price: 'Quoted',
    icon: 'scan',
  },
  {
    id: 'complete-care',
    category: 'shop' as const,
    group: 'maintenance' as const,
    name: 'Complete vehicle service',
    description: 'Routine maintenance through complex repairs. We service what we diagnose.',
    time: 'Same day to several days',
    price: 'Quoted before work',
    icon: 'wrench',
  },
  {
    id: 'brakes',
    category: 'shop' as const,
    group: 'brakes' as const,
    name: 'Brake pad & rotor replacement',
    description: 'Pads, rotors, and fluid — including the dry-road brake performance needed for a DVDL pass.',
    time: '1–3 hours',
    price: 'Quoted after inspection',
    icon: 'brake',
  },
  {
    id: 'brake-caliper',
    category: 'shop' as const,
    group: 'brakes' as const,
    name: 'Brake caliper service',
    description: 'Seized or leaking calipers rebuilt or replaced, then a road test.',
    time: '1–3 hours',
    price: 'Quoted after inspection',
    icon: 'brake',
  },
  {
    id: 'abs',
    category: 'shop' as const,
    group: 'brakes' as const,
    name: 'ABS diagnostics & repair',
    description: 'ABS, traction, and stability faults traced with factory scan tools — sensors, modules, wiring.',
    time: '1–4 hours',
    price: 'Quoted after scan',
    icon: 'brake',
  },
  {
    id: 'epb',
    category: 'shop' as const,
    group: 'brakes' as const,
    name: 'Electronic parking brake calibration',
    description: 'EPB service, pad replacement support, and calibration after brake work.',
    time: '1–2 hours',
    price: 'Quoted',
    icon: 'brake',
  },
  {
    id: 'diagnostics',
    category: 'shop' as const,
    group: 'engine' as const,
    name: 'Engine diagnostics',
    description:
      'Misfires, sensors, and running faults. Factory scan tools, oscilloscope, thermal camera, bore-scope, and wiring diagrams.',
    time: '1–3 hours typical',
    price: 'Quoted after scan',
    icon: 'scan',
  },
  {
    id: 'tune-up',
    category: 'shop' as const,
    group: 'engine' as const,
    name: 'Tune-up',
    description: 'Spark plugs, ignition, filters, and the checks that restore idle and throttle response.',
    time: '1–3 hours',
    price: 'Quoted by vehicle',
    icon: 'wrench',
  },
  {
    id: 'timing-belt',
    category: 'shop' as const,
    group: 'engine' as const,
    name: 'Timing belt / chain replacement',
    description: 'Due-by-mileage or noise — belt or chain, tensioners, and water pump when the job calls for it.',
    time: 'Same day to several days',
    price: 'Quoted after inspection',
    icon: 'wrench',
  },
  {
    id: 'head-gasket',
    category: 'shop' as const,
    group: 'engine' as const,
    name: 'Cylinder head & gasket repairs',
    description: 'Overheating, coolant loss, and gasket failure diagnosed, then repaired in the bay.',
    time: 'Several days',
    price: 'Quoted after inspection',
    icon: 'wrench',
  },
  {
    id: 'engine-rebuild',
    category: 'shop' as const,
    group: 'engine' as const,
    name: 'Full engine rebuilds',
    description: 'Rebuild or replacement after a full assessment. Quoted before any teardown.',
    time: 'By assessment',
    price: 'Custom quote',
    icon: 'wrench',
  },
  {
    id: 'transmission',
    category: 'shop' as const,
    group: 'drivetrain' as const,
    name: 'Transmission service & fluid change',
    description: 'Fluid, filter, and pan service on automatics and manuals, to spec.',
    time: '1–3 hours',
    price: 'Quoted by vehicle',
    icon: 'oil',
  },
  {
    id: 'transmission-repair',
    category: 'shop' as const,
    group: 'drivetrain' as const,
    name: 'Transmission rebuilds & repairs',
    description: 'Slip, harsh shift, and no-drive faults diagnosed, then repaired or rebuilt.',
    time: 'By job',
    price: 'Quoted after inspection',
    icon: 'wrench',
  },
  {
    id: 'differential',
    category: 'shop' as const,
    group: 'drivetrain' as const,
    name: 'Differential & axle service',
    description: 'Diff fluid, seals, CV axles, and noise diagnosis on 2WD and 4WD.',
    time: '1–4 hours',
    price: 'Quoted after inspection',
    icon: 'wrench',
  },
  {
    id: 'transfer-case',
    category: 'shop' as const,
    group: 'drivetrain' as const,
    name: 'Transfer case repairs',
    description: '4WD / AWD transfer case service, leaks, and engagement faults.',
    time: 'By job',
    price: 'Quoted after inspection',
    icon: 'wrench',
  },
  {
    id: 'tires',
    category: 'shop' as const,
    group: 'tires' as const,
    name: 'Tire sales & installation',
    description:
      'New tires sold and fitted — mounting, balancing, TPMS, and a safety check. Cars, SUVs, and light trucks.',
    time: '45–90 min',
    price: 'Quoted by size',
    icon: 'tire',
  },
  {
    id: 'tire-balance',
    category: 'shop' as const,
    group: 'tires' as const,
    name: 'Tire balancing',
    description: 'Vibration from the wheels diagnosed and balanced on the machine.',
    time: '30–60 min',
    price: 'Quoted',
    icon: 'tire',
  },
  {
    id: 'puncture',
    category: 'shop' as const,
    group: 'tires' as const,
    name: 'Puncture repair',
    description: 'Repairable punctures patched to a road-ready standard. Sidewall damage is a replacement.',
    time: '30–60 min',
    price: 'Quoted',
    icon: 'tire',
  },
  {
    id: 'electrical',
    category: 'shop' as const,
    group: 'electrical' as const,
    name: 'Electrical system diagnostics',
    description: 'CAN / LIN network faults, modules, wiring, sensors — traced, not guessed.',
    time: '1–4 hours',
    price: 'Quoted after test',
    icon: 'scan',
  },
  {
    id: 'starter-alternator',
    category: 'shop' as const,
    group: 'electrical' as const,
    name: 'Alternator & starter replacement',
    description: 'No-charge and no-crank faults confirmed on the bench, then replaced and retested.',
    time: '1–3 hours',
    price: 'Quoted after test',
    icon: 'battery',
  },
  {
    id: 'adas',
    category: 'shop' as const,
    group: 'electrical' as const,
    name: 'ADAS calibration',
    description: 'Camera and radar calibration after glass, alignment, or collision-related work, where the vehicle allows.',
    time: 'By appointment',
    price: 'Quoted',
    icon: 'scan',
  },
  {
    id: 'ac',
    category: 'shop' as const,
    group: 'ac' as const,
    name: 'A/C system diagnostics',
    description: 'Cayman-ready cooling: leak checks, pressures, and why it is blowing warm.',
    time: '1–2 hours',
    price: 'Quoted after inspection',
    icon: 'ac',
  },
  {
    id: 'ac-recharge',
    category: 'shop' as const,
    group: 'ac' as const,
    name: 'A/C recharge',
    description: 'Recover, vacuum, and recharge to spec after the system is proven tight.',
    time: '1–2 hours',
    price: 'Quoted',
    icon: 'ac',
  },
  {
    id: 'ac-compressor',
    category: 'shop' as const,
    group: 'ac' as const,
    name: 'Compressor replacement',
    description: 'Failed compressor, clutch, or condenser replaced, then charged and performance-tested.',
    time: 'Same day to several days',
    price: 'Quoted after inspection',
    icon: 'ac',
  },
  {
    id: 'hvac',
    category: 'shop' as const,
    group: 'ac' as const,
    name: 'HVAC repairs',
    description: 'Heating, blend doors, blowers, and cabin climate faults — hot and cold.',
    time: '1–4 hours',
    price: 'Quoted after inspection',
    icon: 'ac',
  },
  {
    id: 'shocks',
    category: 'shop' as const,
    group: 'undercar' as const,
    name: 'Shock & strut replacement',
    description: 'Worn dampers replaced in pairs, then a road test.',
    time: '2–4 hours',
    price: 'Quoted after inspection',
    icon: 'wrench',
  },
  {
    id: 'suspension',
    category: 'shop' as const,
    group: 'undercar' as const,
    name: 'Suspension repairs',
    description: 'Bushings, ball joints, control arms, and knock diagnosis.',
    time: '1–4 hours',
    price: 'Quoted after inspection',
    icon: 'wrench',
  },
  {
    id: 'steering',
    category: 'shop' as const,
    group: 'undercar' as const,
    name: 'Steering system repairs',
    description: 'Rack, pump, tie rods, and assist faults — play, noise, and leaks.',
    time: 'By job',
    price: 'Quoted after inspection',
    icon: 'wrench',
  },
  {
    id: 'alignment',
    category: 'shop' as const,
    group: 'undercar' as const,
    name: 'Wheel alignment',
    description: 'Steering and suspension alignment after undercar work or a pull to one side.',
    time: '1–2 hours',
    price: 'Quoted',
    icon: 'wrench',
  },
  {
    id: 'undercarriage',
    category: 'shop' as const,
    group: 'undercar' as const,
    name: 'Chassis & undercarriage inspection',
    description: 'Lift inspection: rust, leaks, mounts, exhaust, and what is unsafe to leave.',
    time: '45–90 min',
    price: 'Quoted',
    icon: 'scan',
  },
  {
    id: 'european',
    category: 'shop' as const,
    group: 'specialty' as const,
    name: 'European vehicle specialists',
    description: 'European cars serviced with advanced OEM tools, the way the manufacturer intended.',
    time: 'By job',
    price: 'Custom quote',
    icon: 'wrench',
  },
  {
    id: 'asian',
    category: 'shop' as const,
    group: 'specialty' as const,
    name: 'Asian vehicle specialists',
    description: 'Toyota and other Asian makes, including a factory-trained diagnostic approach.',
    time: 'By job',
    price: 'Custom quote',
    icon: 'wrench',
  },
  {
    id: 'diesel',
    category: 'shop' as const,
    group: 'specialty' as const,
    name: 'Diesel engine service',
    description: 'Diesel diagnostics, fuel system, glow plugs, and scheduled service for light-duty diesels.',
    time: 'By job',
    price: 'Quoted after inspection',
    icon: 'wrench',
  },
  {
    id: 'ev-hybrid',
    category: 'shop' as const,
    group: 'specialty' as const,
    name: 'Hybrid / EV high-voltage service',
    description: 'EV and hybrid certified since 2010. High-voltage systems and everyday EV maintenance.',
    time: 'By appointment',
    price: 'Quoted after assessment',
    icon: 'battery',
  },
  {
    id: 'ev-battery',
    category: 'shop' as const,
    group: 'specialty' as const,
    name: 'EV battery replacement & upgrade',
    description:
      'Nissan LEAF, e-NV200, BMW i3, Mitsubishi Outlander PHEV / i-MiEV, and Toyota hybrid cell replacement. Vehicle is inspected first.',
    time: 'By assessment',
    price: 'Quoted after assessment',
    icon: 'battery',
  },
  {
    id: 'fleet',
    category: 'shop' as const,
    group: 'specialty' as const,
    name: 'Fleet vehicle maintenance',
    description: 'Scheduled service, inspections, and repairs for company cars and light commercial fleets.',
    time: 'By arrangement',
    price: 'Quoted',
    icon: 'fleet',
  },
  {
    id: 'performance',
    category: 'shop' as const,
    group: 'specialty' as const,
    name: 'Performance diagnostics',
    description: 'Driveability, power loss, and performance faults diagnosed with factory tools — not guesswork tunes.',
    time: 'By job',
    price: 'Quoted after scan',
    icon: 'scan',
  },
  {
    id: 'dvdl',
    category: 'shop' as const,
    group: 'inspection' as const,
    name: 'DVDL / safety inspection',
    description:
      'Free Cayman DVDL inspection. Original logbook and valid insurance required. Legal tint and dry roads for the brake test.',
    time: 'Same-day when roads are dry',
    price: 'Free',
    icon: 'scan',
  },
  {
    id: 'pre-purchase',
    category: 'shop' as const,
    group: 'inspection' as const,
    name: 'Pre-purchase vehicle inspection',
    description: 'Independent inspection before you buy — mechanical, electrical, and a scan of stored faults.',
    time: '1–2 hours',
    price: 'Quoted',
    icon: 'scan',
  },
  {
    id: 'pickup',
    category: 'mobile' as const,
    group: 'mobile' as const,
    name: 'Vehicle pickup & delivery',
    description:
      'Courtesy pickup and delivery from Savannah to West Bay, as far as Spotts. Combined with other shop work, pickup is covered.',
    time: 'Scheduled weekday',
    price: 'Quoted / complimentary with service',
    icon: 'van',
  },
  {
    id: 'mobile-service',
    category: 'mobile' as const,
    group: 'mobile' as const,
    name: 'Mobile mechanic visit',
    description:
      'On-site repairs at home, office, or hotel — batteries, scans, fluids, lights, and safety checks. Non-starts are a tow-in.',
    time: 'By appointment',
    price: 'Quoted',
    icon: 'van',
  },
  {
    id: 'roadside',
    category: 'mobile' as const,
    group: 'mobile' as const,
    name: 'Roadside assistance',
    description: 'On-the-spot help — jump, lockout, fuel, flat, and getting you moving without a full tow.',
    time: '24/7 dispatch',
    price: 'Quoted',
    icon: 'van',
  },
  {
    id: 'jumpstart',
    category: 'mobile' as const,
    group: 'mobile' as const,
    name: 'Jump start',
    description: '24/7 jump start on island. If it still will not run, we tow in.',
    time: '24/7 dispatch',
    price: 'Quoted',
    icon: 'battery',
  },
  {
    id: 'lockout',
    category: 'mobile' as const,
    group: 'mobile' as const,
    name: 'Lockout assistance',
    description: 'Locked out on Grand Cayman. We come to the vehicle.',
    time: '24/7 dispatch',
    price: 'Quoted',
    icon: 'pin',
  },
  {
    id: 'flat-tire',
    category: 'mobile' as const,
    group: 'mobile' as const,
    name: 'Flat tire',
    description:
      'Spare-wheel change or a safe plug on the road. Sidewall damage or no usable spare is a tow-in.',
    time: '24/7 dispatch',
    price: 'Quoted',
    icon: 'tire',
  },
  {
    id: 'fuel-delivery',
    category: 'mobile' as const,
    group: 'mobile' as const,
    name: 'Fuel delivery',
    description: 'Out of fuel on the road. We bring enough to get you to a station or home.',
    time: '24/7 dispatch',
    price: 'Quoted',
    icon: 'fuel',
  },
  {
    id: 'towing',
    category: 'tow' as const,
    group: 'tow' as const,
    name: 'Tow truck service',
    description: 'Cars, SUVs, pickups, luxury vehicles, accident recovery, and non-running vehicles island-wide.',
    time: '24/7 dispatch',
    price: 'Quoted by location',
    icon: 'tow',
  },
  {
    id: 'tow-in',
    category: 'tow' as const,
    group: 'tow' as const,
    name: 'Tow-in to the shop',
    description: 'Non-starts and unsafe-to-drive vehicles come in on the truck. Written request, then delivery to Barnes Drive.',
    time: '24/7 dispatch',
    price: 'Quoted by location',
    icon: 'tow',
  },
] as const

export const evNotes = [
  'Quote follows a full vehicle and high-voltage assessment. Year, chemistry, shipping, programming, and extra parts all affect the number.',
  'No financing. Used batteries are not installed in Nissan LEAFs. Client-supplied parts are not accepted.',
  'Upgrade rebuilds can take capacity to about 60 kWh — up to three times original range, vehicle and conditions depending.',
  'Warranty on rebuild/upgrade: 1 year parts on the HV assembly and 1 year labour on the installation.',
]

export const dvdlChecklist = [
  {
    n: '01',
    title: 'Lights & signals',
    tip: 'Even one blown bulb can fail the inspection.',
    items: [
      'Headlights — low and high beam',
      'Tail lights',
      'Brake lights',
      'Reverse lights',
      'Indicators — front and rear',
      'Hazard lights',
      'License plate light',
    ],
  },
  {
    n: '02',
    title: 'Tires & wheels',
    tip: 'DVDL checks safety, wear, and stability.',
    items: [
      'Tread depth above the minimum',
      'No cracks, bulges, or exposed cords',
      'All four tires the same size unless the manufacturer approved a mix',
      'Spare present and inflated',
      'Wheel nuts tight and secure',
    ],
  },
  {
    n: '03',
    title: 'Brakes',
    items: [
      'Pads not worn down',
      'Rotors not warped or excessively thin',
      'No brake-fluid leaks',
      'Parking brake holds properly',
      'Dry-road brake test — we reschedule if it rains',
    ],
  },
  {
    n: '04',
    title: 'Suspension & steering',
    items: [
      'No knocking or clunking',
      'Shocks and struts not leaking',
      'Steering wheel not shaking',
      'No excessive play in the steering',
    ],
  },
  {
    n: '05',
    title: 'Fluids & leaks',
    items: [
      'Engine oil',
      'Coolant',
      'Brake fluid',
      'Transmission fluid',
      'Power steering fluid',
      'No visible leaks under the vehicle',
    ],
  },
  {
    n: '06',
    title: 'Windshield, wipers & washer',
    items: [
      'Windshield free of major cracks',
      'Wipers working and not streaking',
      'Washer jets spraying properly',
    ],
  },
  {
    n: '07',
    title: 'Horn',
    items: ['Sounds clearly and consistently'],
  },
  {
    n: '08',
    title: 'Seatbelts & interior',
    items: [
      'All seatbelts latch and retract',
      'No dashboard warning lights — ABS, airbag, check engine',
      'Mirrors secure and not cracked',
      'Airbags in place, including Takata recall work if it applies',
    ],
  },
  {
    n: '09',
    title: 'Exhaust',
    items: ['No exhaust leaks', 'No loud or broken muffler', 'No black or blue smoke'],
  },
  {
    n: '10',
    title: 'Battery & electrical',
    items: ['Battery terminals clean', 'No loose wiring', 'No electrical shorts'],
  },
  {
    n: '11',
    title: 'Documents to bring',
    items: [
      'Original logbook — or inspection first if the vehicle is new to the island',
      'Valid insurance with a policy number',
      'Valid ID',
    ],
  },
]

export const dvdlPrep = [
  'Full safety check',
  'Fluid top-ups',
  'Brake inspection',
  'Tire and suspension check',
  'Lights and electrical testing',
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
  ...(features.tires ? ['Tire pressure sensor tools'] : []),
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
    text: features.tires
      ? 'Flat tires, lockouts, battery jump starts, and roadside help.'
      : 'Lockouts, battery jump starts, and roadside help.',
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
  'Flat tire — spare change or a safe plug',
  'Vehicle lockout support',
  'Fuel delivery',
  'Tow-in for non-starts',
  'Roadside recovery',
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
  return features.tires ? services : services.filter((s) => s.group !== 'tires')
}

export function publicPillars() {
  return features.tires ? pillars : pillars.filter((p) => p.id !== 'tires')
}

export const publicCopy = {
  howWeHelpTitle: features.tires ? 'Service. Tires. Mobile. Tow.' : 'Service. Mobile. Tow.',
  howWeHelpLead: features.tires
    ? 'Book the service shop, fit new tires, request pickup, or call for a tow. Same team, one number.'
    : 'Book the service shop, request pickup, or call for a tow. Same team, one number.',
  heroKicker: features.tires
    ? 'Grand Cayman service shop · mobile · towing · tires'
    : 'Grand Cayman service shop · mobile · towing',
  heroLead: features.tires
    ? 'From diagnostics and maintenance to mobile repairs, towing, and tires — Cole’s keeps Cayman moving.'
    : 'From diagnostics and maintenance to mobile repairs and towing — Cole’s keeps Cayman moving.',
  ourWorkTitle: features.tires
    ? 'Shop, tires, mobile, and tow — in Cayman.'
    : 'Shop, mobile, and tow — in Cayman.',
} as const

export function categoryLabel(category: 'shop' | 'mobile' | 'tow') {
  if (category === 'tow') return 'Towing'
  if (category === 'mobile') return 'Mobile'
  return 'Shop'
}

export function groupLabel(group: (typeof services)[number]['group']) {
  const labels = {
    maintenance: 'Maintenance',
    brakes: 'Brakes',
    engine: 'Engine',
    drivetrain: 'Drivetrain',
    tires: 'Tires & wheels',
    electrical: 'Electrical',
    ac: 'Heating & A/C',
    undercar: 'Steering & suspension',
    specialty: 'Specialty',
    inspection: 'Inspection',
    mobile: 'Mobile',
    tow: 'Roadside & towing',
  }
  return labels[group]
}

export function serviceCatalogJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: `${site.shopShort} services in Grand Cayman`,
    itemListElement: publicServices().map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.name,
        description: s.description,
        serviceType: groupLabel(s.group),
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Grand Cayman',
        },
        provider: {
          '@type': 'AutoRepair',
          name: site.shopName,
          url: site.website,
          telephone: site.phone,
        },
      },
    })),
  }
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
