const photos = (folder, files) => files.map((file) => `/car-photos/${folder}/${file}`)

const DEFAULT_CHECKLIST = ['Full inspection', 'Engine diagnostic', 'Brake check', 'Interior clean']
const DEFAULT_SERVICES = [
  { label: 'Full diagnostic scan', amount: 'Included', percent: 18 },
  { label: 'Roadworthiness prep', amount: 'Included', percent: 24 },
  { label: 'Import clearance support', amount: 'Included', percent: 31 },
  { label: 'Delivery to Takoradi', amount: 'Included', percent: 14 },
]

// Keyed by SKU. `gallery` replaces the database photos; `addGallery` is appended after them.
export const CAR_UPDATES = {
  '#WM-RNG-002': {
    year: '2024',
    edition: 'Black Double Cab',
    power: 'Premium Pickup',
    summary:
      "Black 2024 Ford Ranger double cab with bold red FORD grille, side steps, and premium black leather interior with orange stitching, built for work and family on Ghana's roads.",
    tags: ['4x4', 'Double Cab', 'Leather Interior', 'Petrol'],
    gallery: photos('ford-ranger-2024', [
      '01-front-angle.jpg',
      '02-front.jpg',
      '03-side-angle.jpg',
      '04-rear-tailgate.jpg',
      '05-driver-seat.jpg',
      '06-dashboard.jpg',
      '07-centre-console.jpg',
      '08-passenger-side.jpg',
      '09-rear-seats.jpg',
    ]),
  },
  '#WM-POER-001': {
    year: '2020',
    edition: 'Black Double Cab',
    power: 'Roll Bar & Leather',
    priceLabel: 'GH₵ 330,000',
    estimate: 'GH₵ 330,000',
    summary:
      'Black 2020 Great Wall Poer double cab with a bold mesh grille, LED headlights, silver alloy wheels and a black roll bar. The cabin features black leather seats, a red-and-black sport steering wheel, a touchscreen and an automatic gearbox. A tough, comfortable pickup for work and family.',
    tags: ['Double Cab', 'Automatic', 'Leather Interior', 'Roll Bar', 'Petrol'],
    addGallery: photos('gwm-poer-2020-black', [
      '01-front-angle.jpg',
      '02-front.jpg',
      '03-rear-side-roll-bar.jpg',
      '04-tailgate-open.jpg',
      '05-dashboard.jpg',
      '06-driver-seat.jpg',
      '07-driver-door-open.jpg',
      '08-passenger-side.jpg',
      '09-rear-seats.jpg',
      '10-rear-seats-door-open.jpg',
      '11-rear-seats-side.jpg',
    ]),
  },
  '#WM-POER-003': {
    year: '2020',
    edition: 'Red Off-Road',
    power: 'Snorkel & Fender Flares',
    priceLabel: 'GH₵ 350,000',
    estimate: 'GH₵ 350,000',
    summary:
      'Bold red 2020 Great Wall Poer double cab built for adventure, with a raised snorkel, black fender flares, black alloy wheels on all-terrain tyres, a black roll bar and side steps. Inside, a striking red and black diamond-stitched leather interior with matching dash trim, power seats, a touchscreen, rear air vents and an automatic gearbox.',
    tags: ['4x4', 'Double Cab', 'Snorkel', 'Leather Interior', 'Petrol'],
    addGallery: photos('gwm-poer-2020-red', [
      '01-front.jpg',
      '02-rear-side-roll-bar.jpg',
      '03-front-wheel-flare.jpg',
      '04-rear.jpg',
      '05-tailgate-open.jpg',
      '06-engine-bay.jpg',
      '07-dashboard.jpg',
      '08-driver-seat.jpg',
      '09-driver-door-open.jpg',
      '10-door-panel.jpg',
      '11-rear-seats.jpg',
      '12-rear-seats-door-open.jpg',
      '13-rear-console.jpg',
    ]),
  },
  '#WM-POER-004': {
    year: '2020',
    edition: 'Blue 4x4',
    power: 'Premium Two-Tone Cabin',
    priceLabel: 'GH₵ 350,000',
    estimate: 'GH₵ 350,000',
    summary:
      'Striking blue 2020 Great Wall Poer 4x4 double cab with a chrome grille, LED headlights, POER tailgate lettering, a star-detailed sports bar, two-tone alloy wheels and side steps. Inside, a premium brown and cream diamond-stitched leather interior with power seats, a touchscreen and an automatic gearbox.',
    tags: ['4x4', 'Double Cab', 'Sports Bar', 'Leather Interior', 'Petrol'],
    addGallery: photos('gwm-poer-2020-blue', [
      '01-front.jpg',
      '02-side-doors-open.jpg',
      '03-rear-side-4x4.jpg',
      '04-rear-poer-tailgate.jpg',
      '05-tailgate-open.jpg',
      '06-tailgate-side.jpg',
      '07-dashboard.jpg',
      '08-driver-seat.jpg',
      '09-front-seats-console.jpg',
      '10-rear-seats.jpg',
      '11-rear-seats-door-open.jpg',
    ]),
  },
}

const fotonGallery = photos('foton-tunland-2021', [
  '01-front-angle.jpg',
  '02-front.jpg',
  '03-rear.jpg',
  '04-rear-wheel-sports-bar.jpg',
  '05-tailgate-open.jpg',
  '06-dashboard.jpg',
  '07-driver-seat.jpg',
  '08-door-panel.jpg',
  '09-rear-seats.jpg',
])

export const EXTRA_CARS = [
  {
    id: 'foton-tunland-2021',
    category: 'pickup',
    meta: 'Pickup · Foton',
    name: 'Foton Tunland',
    shortName: 'Tunland',
    year: '2021',
    edition: 'Black Double Cab',
    sku: '#WM-TUN-030',
    origin: 'China',
    transmission: 'Automatic',
    drive: '4x4',
    seats: '5 Seats',
    fuel: 'Petrol',
    power: 'Chrome Roll Bar & Sports Bar',
    location: 'Takoradi',
    priceLabel: 'GH₵ 280,000',
    estimate: 'GH₵ 280,000',
    summary:
      'Black 2021 Foton Tunland double cab 4x4 with a bold red FOTON grille, chrome roll bar with GENERAL sports bar, red-accent alloy wheels, side steps and twin chrome exhausts. Inside, navy and cream diamond-stitched leather seats with gold dash trim give it a premium finish. Strong, practical, and ready for work or weekend.',
    image: fotonGallery[0],
    gallery: fotonGallery,
    tags: ['4x4', 'Double Cab', 'Sports Bar', 'Leather Interior', 'Petrol'],
    condition: { restored: 18, inspected: 56, original: 26 },
    checklist: DEFAULT_CHECKLIST,
    services: DEFAULT_SERVICES,
  },
]

export function applyCarUpdate(car) {
  const update = car && CAR_UPDATES[car.sku]
  if (!update) return car

  const { gallery, addGallery, ...fields } = update
  const base = gallery ?? car.gallery ?? []
  const merged = [...base, ...(addGallery ?? []).filter((src) => !base.includes(src))]

  return { ...car, ...fields, gallery: merged, image: merged[0] ?? car.image }
}
