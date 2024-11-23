declare interface PageHeroProps {
  title: string;
  subtext: string;
}

declare type PrivacyInfos = {
  id: number;
  title: string;
  subInfos: { subTitle?: string; subtext: string; email?: string }[];
};
