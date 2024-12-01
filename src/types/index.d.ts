declare interface PageHeroProps {
  title: string;
  subtext: string;
}

declare interface FooterCTAProps {
  title?: string;
}

declare type PrivacyInfos = {
  id: number;
  title: string;
  subInfos: { subTitle?: string; subtext: string; email?: string; linkText?: string; to?: string; }[];
}[];

declare interface PolicyDetailsProps {
  PolicyInfos: {
    id: number;
    title: string;
    subInfos: {
      subTitle?: string;
      subtext: string;
      email?: string;
      linkText?: string;
      to?: string;
    }[];
  }[];
}

declare interface TOCProps {
  policyLinks: {
    name: string;
    to: string;
  }[];
}

