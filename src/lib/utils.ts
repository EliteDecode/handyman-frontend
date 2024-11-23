import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import rocket from "@/assets/images/rocket.svg";
import vision from "@/assets/images/vision.svg";
import target from "@/assets/images/target.svg";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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