declare interface PageHeroProps {
  title: string;
  subtext: string;
}

declare interface FooterCTAProps {
  title?: string;
}
declare interface AccordionProps {
  question: string;
  answer: string;
}

declare type PrivacyInfos = {
  id: number;
  title: string;
  subInfos: { subTitle?: string; subtext: string; email?: string }[];
};

declare type ContactDetails = {
  id: number;
  title: string;
  desc: string;
  icon: iconType;
}[];

declare type ContactFAQS = {
  id: number;
  question: string;
  answer: string;
}[];
