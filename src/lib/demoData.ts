import rocket from "@/assets/images/rocket.svg";
import vision from "@/assets/images/vision.svg";
import target from "@/assets/images/target.svg";
import toolImg from "@/assets/images/tools.png";
import plugImg from "@/assets/images/plug.png";
import tapImg from "@/assets/images/tap.png";
import { Clock3, MapPin, Phone, Mail } from "lucide-react";

export const cardDetails = [
  {
    title: "Mission",
    desc: "To create a reliable, efficient, and user-friendly platform that empowers handymen while providing customers with fast access to skilled professionals for every job, big or small.",
    icon: rocket,
  },
  {
    title: "Vision",
    desc: "To become Nigeria's most trusted and widely used platform for connecting people with high-quality, skilled artisans, while fostering growth and opportunities for local professionals.",
    icon: vision,
  },
  {
    title: "Goal",
    desc: "Connecting artisans with local clients through a trusted platform, Handyman empowers professionals to expand their reach while giving customers quick, reliable access to skilled services.",
    icon: target,
  },
];

export const sliderDetails = [
  {
    title: "lorem ipsum dolor",
    desc: "sit amet comsectur",
  },
  {
    title: "lorem ipsum dolor",
    desc: "sit amet comsectur",
  },
  {
    title: "lorem ipsum dolor",
    desc: "sit amet comsectur",
  },
  {
    title: "lorem ipsum dolor",
    desc: "sit amet comsectur",
  },
  {
    title: "lorem ipsum dolor",
    desc: "sit amet comsectur",
  },
  {
    title: "lorem ipsum dolor",
    desc: "sit amet comsectur",
  },
];

export const privacyInfos: PrivacyInfos[] = [
  {
    id: 1,
    title: "Information We Collect",
    subInfos: [
      {
        subTitle: "Personal Information",
        subtext:
          "When you register, book a service, or contact us, we collect information such as your name, email address, phone number, and physical address.",
      },
      {
        subTitle: "Usage Information",
        subtext:
          "We collect data on how you interact with the app, including IP address, browser type, and usage data (e.g., pages viewed and actions taken).",
      },
      {
        subTitle: "Location Data",
        subtext:
          "With your permission, we may collect precise location data to provide location-based service suggestions.",
      },
    ],
  },
  {
    id: 2,
    title: "How We Use Your Information",
    subInfos: [
      {
        subTitle: "To Facilitate Requests",
        subtext:
          "Your data helps us connect you with suitable service providers and enables accurate booking and location-based service recommendations.",
      },
      {
        subTitle: "Communication",
        subtext:
          "We may use your email or phone number to send booking confirmations, reminders, and updates on services or policy changes.",
      },
      {
        subTitle: "Improving Users Experience",
        subtext:
          "Usage data assists us in analyzing user behavior and optimizing our app's design, features, and overall functionality.",
      },
      {
        subTitle: "Marketing",
        subtext:
          "Occasionally, we may send promotional information. You can opt-out of receiving marketing communications by following the unsubscribe link provided in the email.",
      },
    ],
  },
  {
    id: 3,
    title: "How We Share Your Information",
    subInfos: [
      {
        subTitle: "Service Providers",
        subtext:
          "We share your details (e.g., contact information and address) with the service provider handling your request.",
      },
      {
        subTitle: "Third Party Vendors",
        subtext:
          "We may use third-party services for payment processing, analytics, and communication. These providers only receive the necessary information to perform their functions.",
      },
      {
        subTitle: "Legal Requirements",
        subtext:
          "We may disclose information if required by law or to protect the rights, property, or safety of Handyman, its users, or the public.",
      },
    ],
  },
  {
    id: 4,
    title: "Your Choices and Rights",
    subInfos: [
      {
        subTitle: "Access Correction",
        subtext:
          "You can view, edit, or delete your profile information through your account settings.",
      },
      {
        subTitle: "Opting Out",
        subtext:
          "You may unsubscribe from marketing emails and adjust notification settings for certain communications.",
      },
      {
        subTitle: "Data Deletion",
        subtext:
          "To delete your account, please contact support at [support@handyman.com]. Note that certain information may be retained for legal or business purposes.",
      },
    ],
  },
  {
    id: 5,
    title: "Security Measures",
    subInfos: [
      {
        subTitle: "Data Protection",
        subtext:
          "We implement industry-standard security measures, including encryption and access controls, to safeguard your information.",
      },
      {
        subTitle: "Breach Notification",
        subtext:
          "If a data breach occurs, we will notify affected users as required by law.",
      },
    ],
  },
  {
    id: 6,
    title: "Children’s Privacy",
    subInfos: [
      {
        subtext:
          "Our services are not intended for children under 13. We do not knowingly collect or store information from children under 13.",
      },
    ],
  },
  {
    id: 7,
    title: "Changes to this Privacy",
    subInfos: [
      {
        subtext:
          "We may update this Privacy Policy to reflect changes in our practices or legal requirements. The 'Effective Date' at the top of this page indicates the last revision.",
      },
    ],
  },
  {
    id: 8,
    title: "Contact Us",
    subInfos: [
      {
        subtext:
          "If you have any questions about this Privacy Policy, please contact us at",
        email: "support@handyman.com",
      },
    ],
  },
];

export const privacyLinks = [
  { name: "Information We Collect", to: "privacy-1" },
  { name: "How We Use Your Information", to: "privacy-2" },
  { name: "How We Share Your Information", to: "privacy-3" },
  { name: "Your Choices and Rights", to: "privacy-4" },
  { name: "Security Measures", to: "privacy-5" },
  { name: "Children’s Privacy", to: "privacy-6" },
  { name: "Changes to This Privacy Policy", to: "privacy-7" },
  { name: "Contact Us", to: "privacy-8" },
];

export const popularServices = [
  {
    id: 1,
    icon: toolImg,
    title: "Capentry",
    subtext:
      "Whether you need custom furniture, repairs, or cabinetry, our skilled carpenters provide craftsmanship that lasts.",
  },
  {
    id: 2,
    icon: plugImg,
    title: "Electrical",
    subtext:
      "From wiring and lighting installations to appliance repair, our electricians are ready to handle all your electrical needs with precision and safety.",
  },
  {
    id: 3,
    icon: tapImg,
    title: "Plumbing",
    subtext:
      "Our expert plumbers can assist with everything from leaky faucets to full bathroom installations, ensuring quality service for all water-related issues.",
  },
];

export const servicesInfos = [
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/0d22/231f/f74d1d1a92301ca3a8e688251fe9308b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FcbH514QWoMahG0djzsZImfaWb~RhJhL74Edo0d~67nsg-9DVGa1~5qJwp71ltPpFQwjmit9FP~bdme1C7sHOfdlwSpv~ELHDWO-7Bfz62IiW9QKpK7ksp9CKUTQAiWsP5v42CA5PCE~VVrmREnJwipK46KNe4HfaPCrR0ArxemyWU2YLxWMHGtSauizi1N-eBatRiJIKZ0M6jI8sOQDjLmazYG47Q3V0AspfZjEdQ5MNuE22XadgXWTHm5VibxWTp~~mXnIQHV9exhm2UlBC39y8oOORHkriWXuRAUmlFGTb5Yc1MUDVX9MymDaVKIUzFImxUxYGafT2jZRCD98Og__",
    title: "Verified Handymen",
    subtext:
      "Gain peace of mind knowing that all artisans on our platform are thoroughly vetted. We conduct background checks and skill assessments to ensure only qualified professionals join our network.",
  },
  {
    id: 2,
    image:
      "https://s3-alpha-sig.figma.com/img/88b8/b617/0f4f1b0a769400d0f78f4b0b10ad30a0?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZw-PqgRy34ntEByubddLllZW5il5vKl2svB2mBV3HqtT3REFPhuvPvlPjLrC7aw7O2buMotutZjF-mRHcKnpUbAMcOabelkAevJdwN8gGDOeVudkooz0UnkhO0s-9B3zEDirthSLn78Yj26eWkq10ozTRLYVogKItZoGjz2EjAnpgLBGOUqgSk1rMVttao5K65gSI-TkXAafrzQxYWLTrIrdHVC7F3PQ-3hc0zaZjizldm86IZvyfp~E60yea1K3bBu6UxkKF26xFxhet-tSfPbNQ7JVYYv~PIkp5oFQnEUKgWSB1dRrCxxzkxvAVoaONSqpN0gE3BI5FCqMZUIQw__",
    title: "Fast & Easy Booking",
    subtext:
      "We’ve made finding the right professional as easy as 1-2-3. With just a few clicks, you can search for the service you need, view profiles, and schedule an appointment at a time that works for you.",
  },
  {
    id: 3,
    image:
      "https://s3-alpha-sig.figma.com/img/7b6a/1b72/e7a93f1f45a8455009c86e414bc65e06?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BfkB438ZkRmOHWXdQACjy~i~45RoNTHd38pbiAFojo4GiOVvYfib5hlsUbP21h6wRVFxEa8KFBMMRVR~rkEN92jceuSVHFFwcuj0u4MXJyPiBzGOnSUTDiNu3slRz8rdlA-q24ZsXPcFaXA8eR6EaxwD9yHo5skVpBdv7XjVmNEOIe8TNtNfXEAbWrh2meuebIfx52ucVibDSPydbM405Whrn6G3mhiUfY-5TYPszuzGamRw9Q2i4Q20AYGoLsQwENezVDDEAs50NWRRzI110DhsySFKZrv1JyIe7ibiqjkVe~yM51SlG-pMMKe8bLN21ZP8DHIDgDE0tfNR77aFWw__",
    title: "Location-Based Matching",
    subtext:
      "Time is precious, and we aim to save yours by connecting you with artisans nearest to you. Our advanced location-based matching system uses your current location to recommend the best professionals in your vicinity, ensuring faster response times and quicker arrivals. ",
  },
  {
    id: 4,
    image:
      "https://s3-alpha-sig.figma.com/img/3182/eb87/318904efbef5565e91af2464275da977?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=buSGSJdAMvd1amKWQj1U9OKDMpi3TJur6vTLc-4rqzjyGcgd0p~ATEQxG6F6FqWP9syPPpELImrKEubaMaQfSnurBnBjkA0v9rQtu5yO6M5A1rQjF7Ffu-EP6JciLJd7t9Vbf5qMlnCCRT59HHskb257rM2cp-TwgixezIU5aZhGuuAI0M9wHSTNEpWU2pgte0yMgdUv6aaQbtMouye2bD6ZPfCm-WyM0CTUA4~v92YRTO2KtD6nzWy1R9aYp7ilzwS~0z7uYwjXetlq~cKT3f~FoKUeX3OEjWtOIyXnF-EQu4zcCZV8nrej~Tpl8E4WhAlRtkWRUkOka7OgqM6FDg__",
    title: "Flexible Payment Options",
    subtext:
      "We believe in providing convenience at every step, including when it’s time to pay. Choose from multiple payment methods such as bank transfers, credit/debit cards, or mobile payments, and rest assured that your transactions are secure.",
  },
  {
    id: 5,
    image:
      "https://s3-alpha-sig.figma.com/img/3e95/190e/16ac0b96e211bb185e32a7d2c74c1332?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=arYl7e1ffCNjoQu6QnH7~veeST8pX1LPRUPRHWEn57Yet6cjSs7TYRt7imAt4Kg9KKb8i0VlDdF3mJdekm2dZLWVpSa8jxGSqW-OpMd0rLXIx1KsmKyK2TX-vKSYN63r~JRo2jXeJLHh0s7gtIo-jyA-k2x~uMW9RR8pV~bF5fR-Ng3ApYjCoIlGjTVyxJRb7QzU3WBPu~GpI94xI0Yx4kCXU7dgFti7xB2zs2Fq~RuE24JX68Xc0bPe7W-9fY8M0uEuBh5yG0P6ATtof-VSLOyCieNKnUhavmifaul2ydErlChJ5l7NIcsDb9gFlr5BRYr4VK1FslkiOvd-AU4hDw__",
    title: "Customer Reviews & Ratings",
    subtext:
      "Make informed choices by reading honest feedback from other users like you. Each professional on our platform is rated and reviewed based on past services, allowing you to see what others have to say about their quality of work, punctuality, and professionalism.",
  },
];

export const contactDetails: ContactDetails = [
  {
    id: 1,
    title: "Address",
    desc: "24, Cole Abiola Crescent, Lekki",
    icon: MapPin,
  },
  {
    id: 2,
    title: "Office Hours",
    desc: "Monday - Friday 08:00am-05:00pm",
    icon: Clock3,
  },
  {
    id: 3,
    title: "Phone",
    desc: "+234-111-222-333 +234-111-222-333",
    icon: Phone,
  },
  {
    id: 4,
    title: "Email Address",
    desc: "info@handyman.com info@handyman.com",
    icon: Mail,
  },
];

export const contactFAQS: ContactFAQS = [
  {
    id: 1,
    question: "What type of services do you offer?",
    answer:
      "We offer a wide range of services including plumbing, electrical work, painting, carpentry, furniture assembly, and general home repairs. Check out our Services page for more details.",
  },
  {
    id: 2,
    question: "Can i Schedule an appointment?",
    answer:
      "We offer a wide range of services including plumbing, electrical work, painting, carpentry, furniture assembly, and general home repairs. Check out our Services page for more details.",
  },
  {
    id: 3,
    question: "How do you ensure quality and safety?",
    answer:
      "We offer a wide range of services including plumbing, electrical work, painting, carpentry, furniture assembly, and general home repairs. Check out our Services page for more details.",
  },
  {
    id: 4,
    question: "How do i book Handyman?",
    answer:
      "We offer a wide range of services including plumbing, electrical work, painting, carpentry, furniture assembly, and general home repairs. Check out our Services page for more details.",
  },
  {
    id: 5,
    question: "How do i get the price estimate?",
    answer:
      "We offer a wide range of services including plumbing, electrical work, painting, carpentry, furniture assembly, and general home repairs. Check out our Services page for more details.",
  },
  {
    id: 6,
    question: "Do you offer same day service?",
    answer:
      "We offer a wide range of services including plumbing, electrical work, painting, carpentry, furniture assembly, and general home repairs. Check out our Services page for more details.",
  },
  {
    id: 7,
    question: "How can i contact customer’s support?",
    answer:
      "We offer a wide range of services including plumbing, electrical work, painting, carpentry, furniture assembly, and general home repairs. Check out our Services page for more details.",
  },
];
