import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const cardDetails = [
  {
    title: "Mission",
    desc: "To create a reliable, efficient, and user-friendly platform that empowers handymen while providing customers with fast access to skilled professionals for every job, big or small.",
  },
  {
    title: "Vision",
    desc: "To become Nigeria's most trusted and widely used platform for connecting people with high-quality, skilled artisans, while fostering growth and opportunities for local professionals.",
  },
  {
    title: "Goal",
    desc: "Connecting artisans with local clients through a trusted platform, Handyman empowers professionals to expand their reach while giving customers quick, reliable access to skilled services.",
  },
];