import toolbox from "@/assets/images/toolBox.png";
import electrical from "@/assets/images/Electrical.png";
import tools from "@/assets/images/tools.png";
import plumbing from "@/assets/images/Plumbing.png";
import roller from "@/assets/images/Roller.png";
import gardening from "@/assets/images/gardening.svg";
import cleaning from "@/assets/images/cleaning.svg";
import Hairdresser from "@/assets/images/Hairdresser.svg";
import cushion from "@/assets/images/cushion.svg";

export const serviceListings = [
  {
    title: "Capentry",
    image: toolbox,
    description: "Custom furniture and home repairs.",
    available: true,
    link: "/dashboard/services-provider",
  },
  {
    title: "Electrical",
    image: electrical,
    description: "Professional electrical installations and maintenance.",
    available: true,
    link: "/dashboard/services-provider",
  },
  {
    title: "Plumbing",
    image: plumbing,
    description: "Fix leaks, install fixtures, and resolve water flow issues.",
    available: true,
    link: "/dashboard/services-provider",
  },
  {
    title: "Cleaning",
    image: cleaning,
    description: "Home and office cleaning tailored to your needs.",
    available: true,
    link: "/dashboard/services-provider",
  },
  {
    title: "General Repairs",
    image: tools,
    description: "Your go-to professionals for odd jobs and quick fixes.",
    available: true,
    link: "/dashboard/services-provider",
  },
  {
    title: "Painting",
    image: roller,
    description: "Enhance your space with expert painting solutions.",
    available: true,
    link: "/dashboard/services-provider",
  },
  {
    title: "Gardening Services",
    image: gardening,
    description: "Transform your outdoor space with our gardeners.",
    available: false,
    link: "/dashboard/services-provider",
  },
  {
    title: "Hair & Beauty",
    image: Hairdresser,
    description: "Book appointments with the best stylists and beauticians.",
    available: false,
    link: "/dashboard/services-provider",
  },
  {
    title: "Tailoring",
    image: cushion,
    description: "Expert tailoring for bespoke outfits and garment adjustments",
    available: false,
    link: "/dashboard/services-provider",
  },
];

export const serviceProviders = [
  {
    id: 1,
    name: "Ifeanyi Nwafor",
    bioData:
      "I have over 15 years of experience transforming residential and commercial spaces, I am renowned for delivering precise, high-quality results that bring walls to life. My expertise spans various styles, from classic interiors to modern, minimalist designs, ensuring each project aligns with the client’s unique vision. My commitment to professionalism is reflected in my punctuality, cleanliness, and respect for clients' spaces, making me a preferred choice for homeowners and businesses alike. I am available for both small touch-ups and large-scale projects, My services are reliable and are tailored to create vibrant, welcoming spaces in any setting.",
    skill: "Painter",
    minPrice: 12000,
    maxPrice: 15000,
    priceDescription: "Basic Painting",
    available: true,
    averageRating: 4.4,
    rating: 3.5,
    profileImg:
      "https://images.unsplash.com/photo-1615947454195-f8950f188cc0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhlYWQlMjBzaG90fGVufDB8fDB8fHww",
    town: "Benin City",
    state: "Edo",
    yearsOfExperience: 3,
    certificates: 2,
    bookingsCompleted: 17,
    previousJobs: [
      "https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhbGwlMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1706011284240-82bbf5bae9f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMHJvb20lMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1692726041603-4ff554fca6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNvb2wlMjByb29tJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1706430433638-b9f3183a496e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvb2wlMjByb29tJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1661963211494-558f6f7aa721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGNvb2wlMjByb29tJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1676320514040-aa62563f44df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGNvb2wlMjByb29tJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
    ],
    certificaitons: [
      {
        name: "Amiable Painters; Certificate of participation",
        image:
          "https://marketplace.canva.com/EAF7h2vFXaU/2/0/1600w/canva-blue-and-gold-elegant-curved-certificate-of-achievement-certificate-HTxQpZIhLas.jpg",
      },
      {
        name: "Painters Association of Nigeria",
        image:
          "https://marketplace.canva.com/EAFy42rCTA0/1/0/1600w/canva-blue-minimalist-certificate-of-achievement-_asVJz8YgJE.jpg",
      },
    ],
    reviews: [
      {
        name: "Emeka Okonkwo",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        date: "05 March 2025",
        review:
          "Excellent work! Very professional and detailed. My home looks stunning after the painting. I will definitely hire him again.",
        isVerified: true,
      },
      {
        name: "Amina Yusuf",
        img: "https://randomuser.me/api/portraits/women/45.jpg",
        rating: 4,
        date: "22 February 2025",
        review:
          "Great job fixing my electrical issues. He was efficient and explained everything well. The pricing was also fair!",
        isVerified: false,
      },
      {
        name: "James Adewale",
        img: "https://randomuser.me/api/portraits/men/51.jpg",
        rating: 4.8,
        date: "14 January 2025",
        review:
          "Superb service! He installed my ceiling fan perfectly. I appreciate the professionalism and quick work.",
        isVerified: true,
      },
      {
        name: "Ngozi Chukwuma",
        img: "https://randomuser.me/api/portraits/women/33.jpg",
        rating: 3.9,
        date: "09 December 2024",
        review:
          "He did a good job, but I wish he had cleaned up better after the work. Overall, I’m satisfied with the service.",
        isVerified: false,
      },
      {
        name: "Isaac Bako",
        img: "https://randomuser.me/api/portraits/men/29.jpg",
        rating: 5,
        date: "28 November 2024",
        review:
          "Absolutely fantastic! The best carpenter I have ever hired. My new kitchen cabinets are stunning.",
        isVerified: true,
      },
      {
        name: "Mariam Lawal",
        img: "https://randomuser.me/api/portraits/women/41.jpg",
        rating: 4.2,
        date: "17 November 2024",
        review:
          "The gardener did a great job revamping my backyard! It looks so much fresher now. Highly recommended.",
        isVerified: true,
      },
      {
        name: "Tunde Falade",
        img: "https://randomuser.me/api/portraits/men/36.jpg",
        rating: 3.5,
        date: "05 October 2024",
        review:
          "The service was okay, but he arrived 30 minutes late. The work was good, though.",
        isVerified: false,
      },
      {
        name: "Chioma Okafor",
        img: "https://randomuser.me/api/portraits/women/38.jpg",
        rating: 4.7,
        date: "21 September 2024",
        review:
          "He cleaned my entire apartment very well. Everything looks spotless! I’ll be using his services again.",
        isVerified: true,
      },
      {
        name: "Victor Uche",
        img: "https://randomuser.me/api/portraits/men/40.jpg",
        rating: 5,
        date: "07 August 2024",
        review:
          "Excellent customer service! He installed my new AC unit perfectly. Highly recommended!",
        isVerified: true,
      },
      {
        name: "Zainab Sanni",
        img: "https://randomuser.me/api/portraits/women/30.jpg",
        rating: 4.3,
        date: "15 July 2024",
        review:
          "Great experience. He fixed my water heater and even gave me maintenance tips!",
        isVerified: true,
      },
      {
        name: "Gabriel Ayodele",
        img: "https://randomuser.me/api/portraits/men/35.jpg",
        rating: 3.8,
        date: "30 June 2024",
        review:
          "Good service, but I wish the response time was faster. The work was done well, though.",
        isVerified: false,
      },
      {
        name: "Fatima Hassan",
        img: "https://randomuser.me/api/portraits/women/37.jpg",
        rating: 4.9,
        date: "12 May 2024",
        review:
          "The best electrician I’ve ever hired! My home is much safer now with the rewiring he did.",
        isVerified: true,
      },
      {
        name: "Kenechukwu Okoro",
        img: "https://randomuser.me/api/portraits/men/47.jpg",
        rating: 4.6,
        date: "25 April 2024",
        review:
          "Really efficient plumber! Fixed my bathroom pipes within an hour. I'm impressed.",
        isVerified: true,
      },
      {
        name: "Blessing Eze",
        img: "https://randomuser.me/api/portraits/women/50.jpg",
        rating: 5,
        date: "10 March 2024",
        review:
          "I love how he transformed my garden! Everything looks so neat and fresh. He’s really skilled.",
        isVerified: true,
      },
      {
        name: "Umar Abdullahi",
        img: "https://randomuser.me/api/portraits/men/39.jpg",
        rating: 4,
        date: "27 February 2024",
        review:
          "Good job fixing my door hinges, but I wish he was a bit more detailed. Still, I appreciate the service.",
        isVerified: false,
      },
      {
        name: "Chiamaka Umeh",
        img: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4.5,
        date: "14 January 2024",
        review:
          "Very polite and professional! He repaired my leaking roof within a few hours. Great work!",
        isVerified: true,
      },
      {
        name: "Samuel Onu",
        img: "https://randomuser.me/api/portraits/men/48.jpg",
        rating: 3.7,
        date: "02 December 2023",
        review:
          "The cleaning was okay, but I expected a bit more attention to detail. Still, a decent service.",
        isVerified: false,
      },
      {
        name: "Rukayat Bello",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        date: "18 November 2023",
        review:
          "Amazing carpenter! He custom-built my bookshelves, and they look fantastic. Highly skilled!",
        isVerified: true,
      },
      {
        name: "Osas Ighodaro",
        img: "https://randomuser.me/api/portraits/women/49.jpg",
        rating: 4.4,
        date: "09 October 2023",
        review:
          "He installed my kitchen sink perfectly. Very neat and professional work.",
        isVerified: true,
      },
      {
        name: "Bolu Adeyemi",
        img: "https://randomuser.me/api/portraits/men/34.jpg",
        rating: 4.2,
        date: "22 September 2023",
        review:
          "Nice work with my electrical rewiring. It took longer than expected, but the quality is top-notch!",
        isVerified: true,
      },
    ],
  },
  {
    id: 2,
    name: "Chioma Adigwe",
    bioData:
      "A professional electrician with over 7 years of experience in wiring installations, electrical repairs, and troubleshooting power failures. I ensure all my services comply with industry standards, prioritizing safety and efficiency.",
    skill: "Electrician",
    minPrice: 10000,
    maxPrice: 18000,
    priceDescription: "Wiring & Repair Services",
    available: false,
    rating: 4.5,
    town: "Port Harcourt",
    state: "Rivers",
    yearsOfExperience: 7,
    profileImg:
      "https://images.unsplash.com/photo-1558531304-a4773b7e3a9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWQlMjBzaG90fGVufDB8fDB8fHww",
    certificates: 2,
    bookingsCompleted: 19,
    averageRating: 4.4,
    previousJobs: [
      "https://images.unsplash.com/photo-1571175441581-dcfe10e4b201?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1590631726950-6ff17f74b612?w=500&auto=format&fit=crop&q=60",
    ],
    certificaitons: [
      {
        name: "Nation Power Grid; Certificate of participation",
        image:
          "https://piktochart.com/wp-content/uploads/2023/05/large-271.jpg",
      },
      {
        name: "Electrical Association of Nigeria",
        image:
          "https://marketplace.canva.com/EAFtLMllF3s/1/0/1600w/canva-blue-and-gold-simple-certificate-zxaa6yB-uaU.jpg",
      },
    ],
    reviews: [
      {
        name: "Emeka Okonkwo",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        date: "05 March 2025",
        review:
          "Excellent work! Very professional and detailed. My home looks stunning after the painting. I will definitely hire him again.",
        isVerified: true,
      },
      {
        name: "Amina Yusuf",
        img: "https://randomuser.me/api/portraits/women/45.jpg",
        rating: 4,
        date: "22 February 2025",
        review:
          "Great job fixing my electrical issues. He was efficient and explained everything well. The pricing was also fair!",
        isVerified: false,
      },
      {
        name: "James Adewale",
        img: "https://randomuser.me/api/portraits/men/51.jpg",
        rating: 4.8,
        date: "14 January 2025",
        review:
          "Superb service! He installed my ceiling fan perfectly. I appreciate the professionalism and quick work.",
        isVerified: true,
      },
      {
        name: "Ngozi Chukwuma",
        img: "https://randomuser.me/api/portraits/women/33.jpg",
        rating: 3.9,
        date: "09 December 2024",
        review:
          "He did a good job, but I wish he had cleaned up better after the work. Overall, I’m satisfied with the service.",
        isVerified: false,
      },
      {
        name: "Isaac Bako",
        img: "https://randomuser.me/api/portraits/men/29.jpg",
        rating: 5,
        date: "28 November 2024",
        review:
          "Absolutely fantastic! The best carpenter I have ever hired. My new kitchen cabinets are stunning.",
        isVerified: true,
      },
      {
        name: "Mariam Lawal",
        img: "https://randomuser.me/api/portraits/women/41.jpg",
        rating: 4.2,
        date: "17 November 2024",
        review:
          "The gardener did a great job revamping my backyard! It looks so much fresher now. Highly recommended.",
        isVerified: true,
      },
      {
        name: "Tunde Falade",
        img: "https://randomuser.me/api/portraits/men/36.jpg",
        rating: 3.5,
        date: "05 October 2024",
        review:
          "The service was okay, but he arrived 30 minutes late. The work was good, though.",
        isVerified: false,
      },
      {
        name: "Chioma Okafor",
        img: "https://randomuser.me/api/portraits/women/38.jpg",
        rating: 4.7,
        date: "21 September 2024",
        review:
          "He cleaned my entire apartment very well. Everything looks spotless! I’ll be using his services again.",
        isVerified: true,
      },
      {
        name: "Victor Uche",
        img: "https://randomuser.me/api/portraits/men/40.jpg",
        rating: 5,
        date: "07 August 2024",
        review:
          "Excellent customer service! He installed my new AC unit perfectly. Highly recommended!",
        isVerified: true,
      },
      {
        name: "Zainab Sanni",
        img: "https://randomuser.me/api/portraits/women/30.jpg",
        rating: 4.3,
        date: "15 July 2024",
        review:
          "Great experience. He fixed my water heater and even gave me maintenance tips!",
        isVerified: true,
      },
      {
        name: "Gabriel Ayodele",
        img: "https://randomuser.me/api/portraits/men/35.jpg",
        rating: 3.8,
        date: "30 June 2024",
        review:
          "Good service, but I wish the response time was faster. The work was done well, though.",
        isVerified: false,
      },
      {
        name: "Fatima Hassan",
        img: "https://randomuser.me/api/portraits/women/37.jpg",
        rating: 4.9,
        date: "12 May 2024",
        review:
          "The best electrician I’ve ever hired! My home is much safer now with the rewiring he did.",
        isVerified: true,
      },
      {
        name: "Kenechukwu Okoro",
        img: "https://randomuser.me/api/portraits/men/47.jpg",
        rating: 4.6,
        date: "25 April 2024",
        review:
          "Really efficient plumber! Fixed my bathroom pipes within an hour. I'm impressed.",
        isVerified: true,
      },
      {
        name: "Blessing Eze",
        img: "https://randomuser.me/api/portraits/women/50.jpg",
        rating: 5,
        date: "10 March 2024",
        review:
          "I love how he transformed my garden! Everything looks so neat and fresh. He’s really skilled.",
        isVerified: true,
      },
      {
        name: "Umar Abdullahi",
        img: "https://randomuser.me/api/portraits/men/39.jpg",
        rating: 4,
        date: "27 February 2024",
        review:
          "Good job fixing my door hinges, but I wish he was a bit more detailed. Still, I appreciate the service.",
        isVerified: false,
      },
      {
        name: "Chiamaka Umeh",
        img: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4.5,
        date: "14 January 2024",
        review:
          "Very polite and professional! He repaired my leaking roof within a few hours. Great work!",
        isVerified: true,
      },
      {
        name: "Samuel Onu",
        img: "https://randomuser.me/api/portraits/men/48.jpg",
        rating: 3.7,
        date: "02 December 2023",
        review:
          "The cleaning was okay, but I expected a bit more attention to detail. Still, a decent service.",
        isVerified: false,
      },
      {
        name: "Rukayat Bello",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        date: "18 November 2023",
        review:
          "Amazing carpenter! He custom-built my bookshelves, and they look fantastic. Highly skilled!",
        isVerified: true,
      },
      {
        name: "Osas Ighodaro",
        img: "https://randomuser.me/api/portraits/women/49.jpg",
        rating: 4.4,
        date: "09 October 2023",
        review:
          "He installed my kitchen sink perfectly. Very neat and professional work.",
        isVerified: true,
      },
      {
        name: "Bolu Adeyemi",
        img: "https://randomuser.me/api/portraits/men/34.jpg",
        rating: 4.2,
        date: "22 September 2023",
        review:
          "Nice work with my electrical rewiring. It took longer than expected, but the quality is top-notch!",
        isVerified: true,
      },
    ],
  },
  {
    id: 3,
    name: "Emeka Okonkwo",
    bioData:
      "An expert plumber with over 10 years of experience. I specialize in both residential and commercial plumbing services, including pipe installations, leak repairs, and water system maintenance. I am committed to providing efficient and cost-effective solutions to all plumbing needs.",
    skill: "Plumber",
    minPrice: 8000,
    maxPrice: 12000,
    priceDescription: "Pipe Repair & Maintenance",
    available: true,
    rating: 5,
    town: "Lagos",
    state: "Lagos",
    yearsOfExperience: 10,
    profileImg:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZCUyMHNob3R8ZW58MHx8MHx8fDA%3D",
    certificates: 3,
    bookingsCompleted: 25,
    previousJobs: [
      "https://images.unsplash.com/photo-1578496479763-389cd3222bc3?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1563201515-a66645cdd6c2?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1604969679213-5f2dedf4f263?w=500&auto=format&fit=crop&q=60",
    ],
    reviews:[]
  },
  {
    id: 4,
    name: "Kelechi Eze",
    bioData:
      "A skilled carpenter with expertise in creating custom furniture and home fixtures. I specialize in kitchen cabinets, wardrobes, doors, and other wooden structures, providing top-notch craftsmanship and durable designs.",
    skill: "Carpenter",
    minPrice: 15000,
    maxPrice: 25000,
    priceDescription: "Custom Furniture & Repairs",
    available: true,
    rating: 4.8,
    town: "Abuja",
    state: "FCT",
    yearsOfExperience: 6,
    profileImg:
      "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWQlMjBzaG90fGVufDB8fDB8fHww",
    certificates: 1,
    bookingsCompleted: 30,
    previousJobs: [
      "https://images.unsplash.com/photo-1600491220364-c4f62dfbb3f0?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1598214886806-5be1b2c731d1?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1535055212440-589976c0fdaa?w=500&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: 5,
    name: "Adewale Johnson",
    bioData:
      "With over a decade of experience in plumbing, I specialize in leak detection, pipe repairs, and complete plumbing installations. I ensure quality service with durable solutions, making sure clients never have to worry about frequent repairs.",
    skill: "Plumber",
    minPrice: 15000,
    maxPrice: 20000,
    priceDescription: "Basic plumbing repairs",
    available: true,
    rating: 5,
    town: "Lagos",
    state: "Lagos",
    yearsOfExperience: 10,
    certificates: 3,
    bookingsCompleted: 25,
    previousJobs: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593951763945-8db671db4f69?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1598425238124-1071ed9f6592?w=500&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: 6,
    name: "Chinedu Okafor",
    bioData:
      "As a certified electrician, I specialize in wiring, lighting installation, and electrical maintenance. My expertise ensures safe, high-quality installations that meet all safety regulations.",
    skill: "Electrician",
    minPrice: 12000,
    maxPrice: 18000,
    priceDescription: "Basic electrical wiring",
    available: true,
    rating: 4.5,
    town: "Enugu",
    state: "Enugu",
    yearsOfExperience: 8,
    profileImg:
      "https://images.unsplash.com/photo-1606800052045-4cd7c146c37b?w=500&auto=format&fit=crop&q=60",
    certificates: 2,
    bookingsCompleted: 20,
    previousJobs: [
      "https://images.unsplash.com/photo-1553787499-6adb5f1f2174?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1526121168364-ff09ee9e8d34?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1536894077284-606ae64d2c42?w=500&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: 7,
    name: "Musa Garba",
    bioData:
      "A professional carpenter with vast experience in making furniture, woodworks, and home fittings. My craftsmanship is tailored to provide durable and aesthetically pleasing wooden designs.",
    skill: "Carpenter",
    minPrice: 10000,
    maxPrice: 18000,
    priceDescription: "Custom furniture making",
    available: true,
    rating: 4,
    town: "Abuja",
    state: "FCT",
    yearsOfExperience: 7,
    profileImg:
      "https://images.unsplash.com/photo-1598257006626-6f3b694fbed1?w=500&auto=format&fit=crop&q=60",
    certificates: 1,
    bookingsCompleted: 15,
    previousJobs: [
      "https://images.unsplash.com/photo-1578973291076-f3b253f1e36f?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1540024691883-c7772365116a?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1580128637555-9377f2e56966?w=500&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: 8,
    name: "Esther Oladimeji",
    bioData:
      "A dedicated gardener passionate about transforming outdoor spaces into beautiful, lush gardens. From lawn maintenance to landscape design, I provide top-tier services.",
    skill: "Gardener",
    minPrice: 8000,
    maxPrice: 12000,
    priceDescription: "Lawn maintenance",
    available: true,
    rating: 4.8,
    town: "Ibadan",
    state: "Oyo",
    yearsOfExperience: 5,
    profileImg:
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500&auto=format&fit=crop&q=60",
    certificates: 2,
    bookingsCompleted: 18,
    previousJobs: [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1554493848-60abf948b9f7?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1530276379917-0e21dfaeab02?w=500&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: 9,
    name: "Blessing Uche",
    bioData:
      "I provide exceptional cleaning services for homes, offices, and commercial spaces. With years of experience, I ensure thorough sanitation, leaving your environment fresh and spotless.",
    skill: "Cleaner",
    minPrice: 7000,
    maxPrice: 12000,
    priceDescription: "Deep cleaning service",
    available: true,
    rating: 4.7,
    town: "Port Harcourt",
    state: "Rivers",
    yearsOfExperience: 6,
    profileImg:
      "https://images.unsplash.com/photo-1613769042458-ff735c5a85b5?w=500&auto=format&fit=crop&q=60",
    certificates: 1,
    bookingsCompleted: 22,
    previousJobs: [
      "https://images.unsplash.com/photo-1560448075-bb0b14131870?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1578926375605-eaf7559b145e?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1581578016211-7d27b29e3bb9?w=500&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: 10,
    name: "David Bassey",
    bioData:
      "I specialize in metal fabrication, welding repairs, and custom metal works. With precision and attention to detail, I ensure durability in every project.",
    skill: "Welder",
    minPrice: 13000,
    maxPrice: 18000,
    priceDescription: "Custom metal welding",
    available: true,
    rating: 4.6,
    town: "Calabar",
    state: "Cross River",
    yearsOfExperience: 9,
    profileImg:
      "https://images.unsplash.com/photo-1570829460009-e2dd5ee18160?w=500&auto=format&fit=crop&q=60",
    certificates: 3,
    bookingsCompleted: 19,
    previousJobs: [
      "https://images.unsplash.com/photo-1565683042356-00ac79df351d?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1595209028508-d8b92d38d54d?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1553521044-1797f3e27298?w=500&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: 11,
    name: "Emmanuel Obi",
    bioData:
      "As a professional bricklayer, I specialize in building construction, plastering, and block laying. My work ensures structural integrity and long-lasting results.",
    skill: "Bricklayer",
    minPrice: 10000,
    maxPrice: 15000,
    priceDescription: "Wall construction",
    available: true,
    rating: 4.2,
    town: "Owerri",
    state: "Imo",
    yearsOfExperience: 8,
    profileImg:
      "https://images.unsplash.com/photo-1562096026-69bd63e9e6b9?w=500&auto=format&fit=crop&q=60",
    certificates: 1,
    bookingsCompleted: 14,
    previousJobs: [
      "https://images.unsplash.com/photo-1595277198969-4e4b3c6d50b1?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1579447091086-7cf76b4e0a66?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593504049359-74330189a345?w=500&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: 12,
    name: "Yusuf Adamu",
    bioData:
      "An expert automobile mechanic specializing in vehicle repairs, diagnostics, and maintenance services. I ensure efficient and reliable repairs to keep your car running smoothly.",
    skill: "Mechanic",
    minPrice: 15000,
    maxPrice: 25000,
    priceDescription: "Engine diagnostics & repair",
    available: true,
    rating: 4.8,
    town: "Kano",
    state: "Kano",
    yearsOfExperience: 12,
    profileImg:
      "https://images.unsplash.com/photo-1598273200618-d60cbd88d8e6?w=500&auto=format&fit=crop&q=60",
    certificates: 3,
    bookingsCompleted: 30,
    previousJobs: [
      "https://images.unsplash.com/photo-1580137189272-8751f2d91a58?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1565043591403-ec2c8c577f37?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1605701227331-10c67dc0cfb3?w=500&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: 13,
    name: "Amina Bello",
    bioData:
      "A professional fashion designer specializing in custom-made outfits for all occasions. My designs are tailored to perfection, combining style with comfort.",
    skill: "Tailor",
    minPrice: 12000,
    maxPrice: 20000,
    priceDescription: "Custom dressmaking",
    available: true,
    rating: 4.9,
    town: "Kaduna",
    state: "Kaduna",
    yearsOfExperience: 7,
    profileImg:
      "https://images.unsplash.com/photo-1561181320-36c98479c211?w=500&auto=format&fit=crop&q=60",
    certificates: 2,
    bookingsCompleted: 28,
    previousJobs: [
      "https://images.unsplash.com/photo-1565203924946-bf133b95ea7d?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1514320291846-0cde4c2479c6?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1512769313653-9d30e72156d5?w=500&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: 14,
    name: "Chinedu Okafor",
    bioData:
      "I am an expert plumber specializing in pipe installations, leakage repairs, and drainage system maintenance. I ensure quality and durable plumbing solutions.",
    skill: "Plumber",
    minPrice: 8000,
    maxPrice: 15000,
    priceDescription: "Pipe installation and repairs",
    available: true,
    rating: 4.5,
    town: "Onitsha",
    state: "Anambra",
    yearsOfExperience: 10,
    profileImg:
      "https://images.unsplash.com/photo-1576502200916-3808e07386a5?w=500&auto=format&fit=crop&q=60",
    certificates: 2,
    bookingsCompleted: 18,
    previousJobs: [
      "https://images.unsplash.com/photo-1616546032065-4b66c47a4be4?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1598133894006-85ebd32abf67?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1581579181262-05e229c18104?w=500&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: 15,
    name: "Samuel Adeyemi",
    bioData:
      "I am a professional painter specializing in interior and exterior wall painting, wallpaper installation, and decorative finishes.",
    skill: "Painter",
    minPrice: 9000,
    maxPrice: 17000,
    priceDescription: "House painting services",
    available: true,
    rating: 4.4,
    town: "Ibadan",
    state: "Oyo",
    yearsOfExperience: 8,
    profileImg:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=500&auto=format&fit=crop&q=60",
    certificates: 1,
    bookingsCompleted: 21,
    previousJobs: [
      "https://images.unsplash.com/photo-1519995192088-3f9a917f46a4?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9b?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1571175441418-7f032938f916?w=500&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: 16,
    name: "Peter Ojo",
    bioData:
      "I offer expert electrical services, including wiring, lighting installation, and home automation setups for residential and commercial buildings.",
    skill: "Electrician",
    minPrice: 12000,
    maxPrice: 22000,
    priceDescription: "Electrical wiring and installation",
    available: true,
    rating: 4.7,
    town: "Abuja",
    state: "FCT",
    yearsOfExperience: 11,
    profileImg:
      "https://images.unsplash.com/photo-1605433249704-3d1286e1d87e?w=500&auto=format&fit=crop&q=60",
    certificates: 3,
    bookingsCompleted: 25,
    previousJobs: [
      "https://images.unsplash.com/photo-1562322414-6c7b282a9c00?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1578586349397-0d966632d99b?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1612277794545-7e349698ac9b?w=500&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: 17,
    name: "Ahmed Suleiman",
    bioData:
      "A professional barber specializing in modern haircuts, beard grooming, and hair treatments. I offer home services for convenience.",
    skill: "Barber",
    minPrice: 5000,
    maxPrice: 12000,
    priceDescription: "Haircut and beard trim",
    available: true,
    rating: 4.8,
    town: "Sokoto",
    state: "Sokoto",
    yearsOfExperience: 7,
    profileImg:
      "https://images.unsplash.com/photo-1578496479763-1c1c4372b1ec?w=500&auto=format&fit=crop&q=60",
    certificates: 1,
    bookingsCompleted: 20,
    previousJobs: [
      "https://images.unsplash.com/photo-1617760446598-7e5638c8f94c?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1612536138511-16828e73db12?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1617760432495-20dbe2b0a027?w=500&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: 18,
    name: "Stella Eze",
    bioData:
      "I specialize in bridal, casual, and professional makeup services. I use top-quality products to enhance natural beauty for all occasions.",
    skill: "Makeup Artist",
    minPrice: 15000,
    maxPrice: 30000,
    priceDescription: "Bridal and event makeup",
    available: true,
    rating: 4.9,
    town: "Lagos",
    state: "Lagos",
    yearsOfExperience: 6,
    profileImg:
      "https://images.unsplash.com/photo-1543900694-133f37abaaa5?w=500&auto=format&fit=crop&q=60",
    certificates: 2,
    bookingsCompleted: 32,
    previousJobs: [
      "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1519494026892-67c5ad6faff9?w=500&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: 19,
    name: "Henry Johnson",
    bioData:
      "A professional chef specializing in continental and local dishes. I offer home cooking services for events and private dining.",
    skill: "Chef",
    minPrice: 20000,
    maxPrice: 50000,
    priceDescription: "Personalized meal preparation",
    available: true,
    rating: 4.8,
    town: "Enugu",
    state: "Enugu",
    yearsOfExperience: 9,
    profileImg:
      "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?w=500&auto=format&fit=crop&q=60",
    certificates: 3,
    bookingsCompleted: 28,
    previousJobs: [
      "https://images.unsplash.com/photo-1528716321603-798ee168b338?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1564759093641-42d86def8258?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1572449043416-55f4685c9bb5?w=500&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: 20,
    name: "Ifeanyi Nwafor",
    bioData:
      "I have over 15 years of experience transforming residential and commercial spaces...",
    skill: "Painter",
    minPrice: 12000,
    maxPrice: 15000,
    priceDescription: "Basic Painting",
    available: true,
    rating: 4,
    town: "Benin City",
    state: "Edo",
    yearsOfExperience: 3,
    profileImg:
      "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=500",
    certificates: 2,
    bookingsCompleted: 17,
    previousJobs: [
      "https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?w=500",
      "https://plus.unsplash.com/premium_photo-1706011284240-82bbf5bae9f2?w=500",
    ],
  },
  {
    id: 21,
    name: "Emeka Okafor",
    bioData:
      "An experienced plumber specializing in residential and commercial plumbing solutions...",
    skill: "Plumber",
    minPrice: 10000,
    maxPrice: 14000,
    priceDescription: "Basic Plumbing Repair",
    available: true,
    rating: 5,
    town: "Enugu",
    state: "Enugu",
    yearsOfExperience: 5,
    profileImg:
      "https://images.unsplash.com/photo-1622205926491-68a7db848cc2?w=500",
    certificates: 3,
    bookingsCompleted: 25,
    previousJobs: [
      "https://images.unsplash.com/photo-1603898037227-09c665ab6729?w=500",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500",
    ],
  },
  {
    id: 22,
    name: "Chioma Adeyemi",
    bioData:
      "Dedicated to delivering top-notch electrical installations and maintenance...",
    skill: "Electrician",
    minPrice: 15000,
    maxPrice: 20000,
    priceDescription: "Basic Wiring & Repairs",
    available: true,
    rating: 4.5,
    town: "Ibadan",
    state: "Oyo",
    yearsOfExperience: 7,
    profileImg:
      "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d?w=500",
    certificates: 4,
    bookingsCompleted: 30,
    previousJobs: [
      "https://images.unsplash.com/photo-1581093458797-379fd2b2df63?w=500",
      "https://images.unsplash.com/photo-1576073719850-284e91d550f8?w=500",
    ],
  },
  {
    id: 23,
    name: "John Adebayo",
    bioData:
      "Experienced carpenter skilled in furniture making, cabinetry, and home renovations...",
    skill: "Carpenter",
    minPrice: 18000,
    maxPrice: 25000,
    priceDescription: "Basic Furniture Work",
    available: true,
    rating: 4.2,
    town: "Lagos",
    state: "Lagos",
    yearsOfExperience: 6,
    profileImg:
      "https://images.unsplash.com/photo-1593113609938-50b6f0047af7?w=500",
    certificates: 3,
    bookingsCompleted: 22,
    previousJobs: [
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a3?w=500",
      "https://images.unsplash.com/photo-1598257006626-3a391dc7799f?w=500",
    ],
  },
  {
    id: 24,
    name: "Janet Chukwu",
    bioData:
      "Professional cleaner with a keen eye for detail, offering home and office cleaning services...",
    skill: "Cleaner",
    minPrice: 5000,
    maxPrice: 10000,
    priceDescription: "Basic Home Cleaning",
    available: true,
    rating: 4.8,
    town: "Abuja",
    state: "FCT",
    yearsOfExperience: 4,
    profileImg:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500",
    certificates: 2,
    bookingsCompleted: 28,
    previousJobs: [
      "https://images.unsplash.com/photo-1594633313448-9b7f4f193bb7?w=500",
      "https://images.unsplash.com/photo-1585421514287-27b349d91401?w=500",
    ],
  },
  {
    id: 25,
    name: "Michael Obi",
    bioData:
      "Experienced gardener offering landscaping, lawn maintenance, and plant care services...",
    skill: "Gardener",
    minPrice: 12000,
    maxPrice: 18000,
    priceDescription: "Basic Gardening Service",
    available: true,
    rating: 4.3,
    town: "Owerri",
    state: "Imo",
    yearsOfExperience: 5,
    profileImg:
      "https://images.unsplash.com/photo-1600158319971-6c804f7ed210?w=500",
    certificates: 2,
    bookingsCompleted: 19,
    previousJobs: [
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500",
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500",
    ],
  },
  {
    id: 26,
    name: "Grace Uche",
    bioData:
      "A highly skilled tailor specializing in custom-made outfits, alterations, and fashion design...",
    skill: "Tailor",
    minPrice: 7000,
    maxPrice: 15000,
    priceDescription: "Basic Outfit Stitching",
    available: true,
    rating: 4.7,
    town: "Aba",
    state: "Abia",
    yearsOfExperience: 8,
    profileImg:
      "https://images.unsplash.com/photo-1600443163092-406c4b5f5695?w=500",
    certificates: 5,
    bookingsCompleted: 35,
    previousJobs: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500",
      "https://images.unsplash.com/photo-1603386329227-3d20a5fa6a04?w=500",
    ],
  },
  {
    id: 27,
    name: "Daniel Okeke",
    bioData:
      "Specialized in welding and metal fabrication for residential and commercial projects...",
    skill: "Welder",
    minPrice: 15000,
    maxPrice: 25000,
    priceDescription: "Basic Metal Fabrication",
    available: true,
    rating: 4.6,
    town: "Port Harcourt",
    state: "Rivers",
    yearsOfExperience: 9,
    profileImg:
      "https://images.unsplash.com/photo-1600612323903-d3953c39a4e6?w=500",
    certificates: 3,
    bookingsCompleted: 40,
    previousJobs: [
      "https://images.unsplash.com/photo-1558377536-dbee56e00f91?w=500",
      "https://images.unsplash.com/photo-1617202000885-0f8d6f06e84c?w=500",
    ],
  },
];
