// lib/data.js

export const portfolioData = {
  // 1. GLOBAL CONTACT INFO (Updated with real details from your image)
  contact: {
    phone: "919898697991", // WhatsApp number (Without +)
    displayPhone: "+91 98986 97991",
    whatsappMessage: "Hi, I viewed your portfolio and want to inquire about printing a premium wedding album.",
    location: "Ahmedabad, Gujarat",
    address: "GF - Raspan Arcade, Raspan Cross Road, Nikol, Ahmedabad - 382350",
    email: "allbum@coloursphotobooks.in",
  },

  // 2. HERO SECTION
  hero: {
    heading: "Premium Wedding Albums That Look as Good as Your Memories",
    subtext: "Handcrafted in Ahmedabad, delivered worldwide. We preserve your most cherished moments in exquisite, archival-grade heirloom books.",
    ctaTexts: {
      whatsapp: "Get Quote on WhatsApp",
      gallery: "Explore the Gallery",
    },
  },

  // 3. COLLECTION / PRODUCTS (Data for the cards)
  collectionItems: [
    {
      id: 1,
      title: "Wedding Albums",
      description: "Flush-mount layflat designs with thick, museum-grade pages.",
      price: "Starts ₹12,000",
      image: "/images/album-1.png", 
    },
    {
      id: 2,
      title: "Photobooks",
      description: "Perfect for anniversaries and travel. Slim, elegant, and modern.",
      price: "Starts ₹2,500",
      image: "/images/album-2.png",
    },
    {
      id: 3,
      title: "Mini Books",
      description: "Great for gifting to parents. Pocket-sized memories.",
      price: "Starts ₹1,200",
      image: "/images/album-3.png",
    },
    {
      id: 4,
      title: "Album Boxes",
      description: "Handcrafted wooden and acrylic boxes for safe keeping.",
      price: "Starts ₹3,500",
      image: "/images/album-4.png",
    },
  ],

  // 4. PROCESS STEPS
  processSteps: [
    {
      id: 1,
      title: "1. Share Photos",
      description: "Upload your high-res photos to our secure cloud drive or send via WhatsApp.",
    },
    {
      id: 2,
      title: "2. Design & Material",
      description: "Choose your album size, cover material, and review the digital layout design.",
    },
    {
      id: 3,
      title: "3. Get Delivered",
      description: "Your handcrafted heirloom is printed and shipped directly to your doorstep.",
    },
  ], // <-- Yahan comma zaroori tha

  // 5. ABOUT PAGE DATA
  about: {
    hero: {
      headingPart1: "Preserving Your Most Beautiful Moments, ",
      headingItalic: "Forever.",
      subtext: "Heirloom Press was born out of a simple belief: some memories are too precious to only exist on a screen. They deserve to be felt, shared, and passed down."
    },
    story: {
      title: "Our Craftsmanship Roots",
      paragraphs: [
        "Operating out of our dedicated studio in Ahmedabad, we merge traditional bookbinding techniques with state-of-the-art print technology.",
        "Every photobook that leaves our facility is a labor of love. From color-correcting your digital files to carefully pressing the thick, flush-mount pages, we obsess over the details so you don't have to.",
        "Whether it's a grand wedding or an intimate family milestone, our goal remains the same: to give your digital photos a physical home that feels as luxurious and heavy as the memories they hold."
      ],
      image: "/images/about-craftsmanship.png" // Update path if needed
    },
    values: [
      {
        id: 1,
        title: "Archival Quality",
        desc: "We source museum-grade papers and premium leathers that stand the test of time, ensuring your legacy never fades."
      },
      {
        id: 2,
        title: "Handcrafted Care",
        desc: "Every album is bound and inspected by skilled artisans right here in our workshop, treating your memories like our own."
      },
      {
        id: 3,
        title: "Timeless Design",
        desc: "We strip away the clutter. Our layouts are designed to be elegant, minimal, and entirely focused on your photographs."
      }
    ]
  }
}; 