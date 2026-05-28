import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "East Sac Dental",
    tagline: "Your Smile, Our Priority Always",
    phone: "(916) 452-7874",
    phoneHref: "tel:+19164527874",
    email: "info@eastsacdental.com",
    address: "1000 Folsom Blvd",
    city: "East Sacramento",
    serviceAreas: ["East Sacramento", "Sacramento", "Elk Grove"],
    license: "DDS 12345",
    since: "1998",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "ocean",
    niche: "dentist",
  },

  services: [
    { icon: "star", title: "Dental Cleanings & Exams", desc: "Maintain optimal oral health with thorough cleanings and comprehensive examinations.", urgent: false },
    { icon: "sparkles", title: "Teeth Whitening", desc: "Brighten your smile with professional teeth whitening treatments for a dazzling look.", urgent: false },
    { icon: "shield-check", title: "Emergency Dentistry", desc: "Immediate care for dental emergencies, relieving pain and addressing urgent issues promptly.", urgent: true },
    { icon: "home", title: "Family Dentistry", desc: "Comprehensive dental care for all ages, ensuring healthy smiles for your entire family.", urgent: false },
    { icon: "wrench", title: "Same-Day Crowns – CEREC", desc: "Get high-quality dental crowns in a single visit with advanced CEREC technology.", urgent: false },
    { icon: "heart", title: "Dental Anxiety Management", desc: "Gentle and compassionate care to help ease your dental anxiety and make visits comfortable.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "East Sacramento", stars: 5, text: "I had a dental emergency on a Saturday morning and East Sac Dental got me in right away. Dr. Smith was incredibly kind and fixed my chipped tooth perfectly. The staff was so understanding of my anxiety. Highly recommend their prompt and caring service!" },
    { name: "Michael T.", location: "Sacramento", stars: 5, text: "My entire family comes here for our cleanings and check-ups. They are fantastic with my kids, making their visits fun and stress-free. The Curodont treatment I received was truly innovative, and my enamel feels stronger. A truly professional and friendly practice." },
    { name: "Jessica R.", location: "Elk Grove", stars: 5, text: "I've always been nervous about dental work, but East Sac Dental changed that. Their laser dentistry for my gum treatment was painless and efficient. The team explained everything clearly, and I felt completely at ease. My smile makeover looks incredible!" }
  ],

  trustBadges: [
    "Curodont – Enamel Regeneration", "Laser Dentistry Experts", "Same-Day Crowns – CEREC", "Emergency Dental Care", "Family-Friendly Practice", "Dental Anxiety Management"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 25, label: "Years in Business", suffix: "+", decimals: 0 },
    { value: 10000, label: "Happy Smiles", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Flexible Scheduling", desc: "We offer convenient appointment times to fit your busy lifestyle, including early mornings and evenings." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "Clear and upfront cost estimates for all treatments, with no hidden fees or surprises." },
    { icon: "award", title: "Experienced Dentists", desc: "Our team of highly skilled and compassionate dentists are dedicated to providing top-tier care." },
    { icon: "thumbs-up", title: "Patient-Centered Care", desc: "Your comfort and well-being are our top priority, with personalized treatment plans." },
    { icon: "phone", title: "24/7 Online Booking", desc: "Easily schedule or reschedule appointments anytime, anywhere through our user-friendly online portal." },
    { icon: "heart", title: "Modern Technology", desc: "Utilizing the latest dental advancements for precise diagnoses and effective, comfortable treatments." }
  ],

  formServiceOptions: ["Dental Cleanings & Exams", "Teeth Whitening", "Emergency Dentistry", "Family Dentistry", "Same-Day Crowns – CEREC", "Dental Anxiety Management"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!