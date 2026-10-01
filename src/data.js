export const CONTACT = {
  phone: '+233 202914993',
  phoneHref: 'tel:+233202914993',
  email: 'westlifemotors@gmail.com',
  emailHref: 'mailto:westlifemotors@gmail.com',
  address: 'Opposite Apowa Police Station, Takoradi',
  hours: 'Mon-Sat: 8:00 - 18:00',
  facebook: 'https://web.facebook.com/profile.php?id=61594365103981',
  markets: ['Ghana', "Côte d'Ivoire"],
}

export const NAV_LINKS = [
  { href: '/#home', label: 'Home' },
  { href: '/#inventory', label: 'Inventory' },
  { href: '/#types', label: 'Vehicles' },
  { href: '/#about', label: 'About' },
  { href: '/#why', label: 'Why Us' },
  { href: '/#contact', label: 'Contact' },
]

export const HERO_SLIDES = [
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80',
]

export const BRANDS = [
  { name: 'Toyota', logo: '/brands/toyota.svg' },
  { name: 'Ford', logo: '/brands/ford.svg' },
  { name: 'GWM', logo: '/brands/gwm.svg' },
  { name: 'Haval', logo: '/brands/haval.svg' },
  { name: 'Changan', logo: '/brands/changan.svg' },
  { name: 'Jetour', logo: '/brands/jetour.svg' },
  { name: 'Samsung', logo: '/brands/samsung.svg' },
  { name: 'Foton', logo: '/brands/foton.svg' },
]

export const TRENDING = [
  {
    title: 'Sedans for city driving',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'SUVs for every terrain',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Pickups built for work',
    image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Trucks for heavy duty',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Commercial vans & buses',
    image: '/c72b40f3-bf0c-49f3-864c-611be2abaa37.jpg',
  },
]

export const VEHICLE_TYPES = [
  {
    name: 'Sedan',
    tag: 'Comfort',
    description: 'Stylish cars ideal for city driving and personal use.',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'SUV',
    tag: 'Adventure',
    description: 'Rugged, spacious vehicles for urban and off-road travel.',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Pickup',
    tag: 'Utility',
    description: 'Durable and versatile for business and everyday work.',
    image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Truck',
    tag: 'Heavy-duty',
    description: 'Built for logistics, construction, and industrial needs.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Commercial',
    tag: 'Business',
    description: 'Vans and buses for passenger or cargo transport.',
    image: '/c72b40f3-bf0c-49f3-864c-611be2abaa37.jpg',
  },
]

export const WHY_US = [
  {
    title: 'Global Partnerships',
    text: 'Trusted suppliers across America, Europe, Japan, and China, so you get quality vehicles with confidence.',
    icon: 'globe',
  },
  {
    title: 'Transparent Practices',
    text: 'Clear pricing, honest condition reports, and business practices built on integrity from day one.',
    icon: 'shield',
  },
  {
    title: 'Reliable Logistics',
    text: 'Efficient import and distribution from our Takoradi base across Ghana and Côte d’Ivoire.',
    icon: 'truck',
  },
  {
    title: 'Customer First',
    text: 'Personal guidance to match every client with the right vehicle for their lifestyle and budget.',
    icon: 'heart',
  },
]

export const FAQS = [
  {
    q: 'Do you import cars from America, Europe, Japan, and China?',
    a: 'Yes. Westlife Motors specializes in importing quality vehicles from America, Europe, Japan, and China for customers across Ghana and Côte d’Ivoire.',
  },
  {
    q: 'Where is your showroom located?',
    a: 'We are based opposite Apowa Police Station in Takoradi. Visit us during business hours or book a viewing ahead of time.',
  },
  {
    q: 'Can I reserve or view a vehicle before buying?',
    a: 'Absolutely. Contact us by phone or email to book a viewing. Our team will walk you through the vehicle, condition, and options.',
  },
  {
    q: 'Do you deliver outside Takoradi?',
    a: 'Yes. We support delivery and distribution across Ghana and into Côte d’Ivoire. Ask us about timing and logistics for your location.',
  },
  {
    q: 'Are prices listed online?',
    a: 'Pricing depends on the vehicle, specs, and import details. Contact us for a clear quote with no hidden surprises.',
  },
]

// Cars are managed from /admin and stored in MongoDB — see src/lib/carsApi.js.
// This default checklist/services pairing is offered as a starting point in the admin car form.
export const DEFAULT_CHECKLIST = ['Full inspection', 'Engine diagnostic', 'Brake check', 'Interior clean']
export const DEFAULT_SERVICES = [
  { label: 'Full diagnostic scan', amount: 'Included', percent: 18 },
  { label: 'Roadworthiness prep', amount: 'Included', percent: 24 },
  { label: 'Import clearance support', amount: 'Included', percent: 31 },
  { label: 'Delivery to Takoradi', amount: 'Included', percent: 14 },
]

export const CAR_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'pickup', label: 'Pickups' },
  { id: 'suv', label: 'SUVs' },
  { id: 'sedan', label: 'Sedans' },
  { id: 'commercial', label: 'Commercial' },
]
