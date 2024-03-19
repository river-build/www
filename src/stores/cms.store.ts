import {
  BenefitsSectionRecord,
  CommunitySectionRecord,
  FeaturesSectionRecord,
  FooterSectionRecord,
  GlobalLinkRecord,
  HeaderFooterLinkRecord,
  HeroSectionRecord,
  Site,
  TownsSectionRecord,
} from '@/gql/graphql'
import { create } from 'zustand'

export type CMSData = {
  _site: Site
  heroSection: HeroSectionRecord
  benefitsSection: BenefitsSectionRecord
  featuresSection: FeaturesSectionRecord
  townsSection: TownsSectionRecord
  communitySection: CommunitySectionRecord
  headerFooterLink: HeaderFooterLinkRecord
  globalLink: GlobalLinkRecord
  footerSection: FooterSectionRecord
}

type CMSStore = {
  cmsData: CMSData | null
  setCmsData: (data: CMSData) => void
}

const useCMSState = create<CMSStore>((set) => ({
  cmsData: null,
  setCmsData: (data) => set({ cmsData: data }),
}))

export default useCMSState
