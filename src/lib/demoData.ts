import rocket from "@/assets/icons/rocket.svg";
import vision from "@/assets/icons/vision.svg";
import target from "@/assets/icons/target.svg";
import toolImg from "@/assets/images/tools.png";
import plugImg from "@/assets/images/Roller.png";
import tapImg from "@/assets/images/Plumbing.png";
import serviceImg1 from "@/assets/images/serviceImg1.jpg";
import serviceImg2 from "@/assets/images/serviceImg2.jpg";
import serviceImg3 from "@/assets/images/serviceImg3.jpg";
import serviceImg4 from "@/assets/images/serviceImg4.jpg";
import serviceImg5 from "@/assets/images/serviceImg5.jpg";
import valueIcon1 from "@/assets/icons/valueIcon1.png";
import valueIcon2 from "@/assets/icons/valueIcon2.png";
import valueIcon3 from "@/assets/icons/valueIcon3.png";
import valueIcon4 from "@/assets/icons/valueIcon4.png";
import valueIcon5 from "@/assets/icons/valueIcon5.png";
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
    title: "Carpentry",
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
    image: serviceImg1,
    title: "Verified Handymen",
    subtext:
      "Gain peace of mind knowing that all artisans on our platform are thoroughly vetted. We conduct background checks and skill assessments to ensure only qualified professionals join our network.",
  },
  {
    id: 2,
    image: serviceImg2,
    title: "Fast & Easy Booking",
    subtext:
      "We’ve made finding the right professional as easy as 1-2-3. With just a few clicks, you can search for the service you need, view profiles, and schedule an appointment at a time that works for you.",
  },
  {
    id: 3,
    image: serviceImg3,
    title: "Location-Based Matching",
    subtext:
      "Time is precious, and we aim to save yours by connecting you with artisans nearest to you. Our advanced location-based matching system uses your current location to recommend the best professionals in your vicinity, ensuring faster response times and quicker arrivals. ",
  },
  {
    id: 4,
    image: serviceImg4,
    title: "Flexible Payment Options",
    subtext:
      "We believe in providing convenience at every step, including when it’s time to pay. Choose from multiple payment methods such as bank transfers, credit/debit cards, or mobile payments, and rest assured that your transactions are secure.",
  },
  {
    id: 5,
    image: serviceImg5,
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

export const contactFAQS = [
  {
    id: 1,
    question: "Can I schedule an appointment?",
    answer:
      "Yes, you can schedule an appointment. When booking a service, you can select a time and date for the service, either immediately or for a future date. You also have the flexibility to reschedule or cancel the appointment if needed.",
  },
  {
    id: 2,
    question: "How do you ensure quality and safety?",
    answer:
      "We ensure quality and safety by verifying artisans' identities, skills, and past work. Customers can leave ratings and reviews, helping us maintain high standards. We also provide guidelines for artisans and encourage clear communication between customers and artisans.",
  },
  {
    id: 3,
    question: "How do I book a handyman?",
    answer:
      "To book a handyman, simply sign up or log in to the platform, search for the service you need, and browse through available service providers. Once you find a handyman, select a time and date, confirm your details, and proceed to payment. After payment, you'll receive a booking confirmation.",
  },
  {
    id: 4,
    question: "How do I get a price estimate?",
    answer:
      "To get a price estimate, select the service you need, view the handyman's profile, and check their pricing details. You can also contact the handyman directly through in-app chat for a more personalized quote based on your specific requirements.",
  },
  {
    id: 5,
    question: "Do you offer same day service?",
    answer:
      "Yes, we offer same-day service depending on the handyman's availability. You can check the provider’s real-time availability and book the service for the same day if they are available.",
  },
  {
    id: 6,
    question: "How can I contact customer support?",
    answer:
      "You can contact customer support through the in-app help section, where you’ll find FAQs, chat support, and a ticket system for any issues or inquiries.",
  },
  {
    id: 7,
    question: 'What is "Chat with Handyman"?',
    answer:
      "Chat with Handyman is a feature that lets you consult with a handyman online. You can describe your problem, share photos or videos, and receive advice or troubleshooting tips. This is ideal for minor issues or if you want to know whether an in-person service is necessary.",
  },
  {
    id: 8,
    question: 'What is "Book a Handyman"?',
    answer:
      '"Book a Handyman" allows you to schedule an in-person appointment with a professional handyman. You can select the service you need, choose a preferred date and time, confirm your address, and book directly through the platform.',
  },
  {
    id: 9,
    question:
      'What’s the difference between "Chat with Handyman" and "Book a Handyman"?',
    answer:
      "Chat with Handyman is best for quick consultations, troubleshooting, or advice. It’s done entirely online via in-app messaging while Book a Handyman is ideal for hands-on services that require the handyman to visit your location and complete the task.",
  },
  {
    id: 10,
    question: "What is the escrow service?",
    answer:
      "Our escrow service securely holds your payment until the handyman has completed the job to your satisfaction. Once the service is marked as complete, the funds are released to the handyman.",
  },
  {
    id: 11,
    question: "How does the escrow service work?",
    answer:
      "When you book a service, your payment is deposited into an escrow account. The funds are held securely until both you and the handyman confirm the job is complete. Only then is the payment released.",
  },
  {
    id: 12,
    question: "Why do I need an escrow service?",
    answer:
      "The escrow service ensures a fair and transparent transaction for both customers and handymen. It protects your money until you’re satisfied with the service provided.",
  },
  {
    id: 13,
    question: "When is the payment released to the handyman?",
    answer:
      "The payment is released after you confirm that the service has been completed to your satisfaction through the app.",
  },
  {
    id: 14,
    question: "What happens if there is a dispute?",
    answer:
      "In the event of a dispute, the funds remain in escrow while our support team mediates to resolve the issue fairly for both parties.",
  },
  {
    id: 15,
    question: "Is there an additional fee for the escrow service?",
    answer:
      "No, the escrow service is included as part of our commitment to ensuring secure and trustworthy transactions.",
  },
  {
    id: 16,
    question: "Can I cancel a booking while my funds are in escrow?",
    answer:
      "Yes, you can cancel a booking. Depending on the timing and reason for cancellation, our refund policy will determine the outcome. Funds in escrow are returned to you if the service has not started.",
  },
];

export const coreValues = [
  {
    img: valueIcon1,
    title: "Customer First",
    desc: "Our customers are at the heart of everything we do. We prioritize your needs and work tirelessly to provide a seamless, satisfying experience.",
  },
  {
    img: valueIcon2,
    title: "Excellence in Service",
    desc: "We strive to deliver the highest quality in every interaction, ensuring every job is completed to perfection.",
  },
  {
    img: valueIcon3,
    title: "Trust and Transparency",
    desc: "We build relationships based on honesty, openness, and security.",
  },
  {
    img: valueIcon4,
    title: "Empowering Communities",
    desc: "We believe in uplifting local communities by connecting skilled professionals with opportunities.",
  },
  {
    img: valueIcon5,
    title: "Sustainability and Responsibility",
    desc: "We are committed to eco-friendly practices and responsible business operations.",
  },
];
