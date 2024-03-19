/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query SiteData {\n    headerFooterLink {\n      communityItems {\n        text\n        url\n      }\n      developerItems {\n        url\n        text\n      }\n      governanceItems {\n        url\n        text\n      }\n    }\n\n    footerSection {\n      footerNewsletterHeading\n      footerNewsletterSubheading\n    }\n\n    globalLink {\n      twitterUrl\n      townsUrl\n      githubUrl\n      blogUrl\n    }\n\n    heroSection {\n      leftButtonText\n      rightButtonText\n      heroSectionRainbowHeading\n      heroSectionMainHeading\n      heroSectionDescription\n      leftButtonUrl\n      rightButtonUrl\n      topButtonText\n      topButtonUrl\n    }\n\n    benefitsSection {\n      benefits {\n        benefitUrl\n        benefitSubheading\n        benefitHeading\n        benefitButtonText\n      }\n    }\n\n    featuresSection {\n      featuresSubheading\n      featuresHeading\n      features {\n        label\n        subheading\n        heading\n        featureUrl\n      }\n    }\n\n    townsSection {\n      townsUrl\n      townsTopText\n      townsSubheading\n      townsHeading\n      townsButtonText\n    }\n\n    communitySection {\n      communitySubheading\n      communityHeading\n      communityLinks {\n        subheading\n        url\n        heading\n      }\n    }\n\n    _site {\n      globalSeo {\n        siteName\n        titleSuffix\n        twitterAccount\n        fallbackSeo {\n          title\n          twitterCard\n          image {\n            url\n          }\n          description\n        }\n      }\n      faviconMetaTags(variants: [icon, appleTouchIcon, msApplication]) {\n        attributes\n        content\n        tag\n      }\n    }\n  }\n": types.SiteDataDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SiteData {\n    headerFooterLink {\n      communityItems {\n        text\n        url\n      }\n      developerItems {\n        url\n        text\n      }\n      governanceItems {\n        url\n        text\n      }\n    }\n\n    footerSection {\n      footerNewsletterHeading\n      footerNewsletterSubheading\n    }\n\n    globalLink {\n      twitterUrl\n      townsUrl\n      githubUrl\n      blogUrl\n    }\n\n    heroSection {\n      leftButtonText\n      rightButtonText\n      heroSectionRainbowHeading\n      heroSectionMainHeading\n      heroSectionDescription\n      leftButtonUrl\n      rightButtonUrl\n      topButtonText\n      topButtonUrl\n    }\n\n    benefitsSection {\n      benefits {\n        benefitUrl\n        benefitSubheading\n        benefitHeading\n        benefitButtonText\n      }\n    }\n\n    featuresSection {\n      featuresSubheading\n      featuresHeading\n      features {\n        label\n        subheading\n        heading\n        featureUrl\n      }\n    }\n\n    townsSection {\n      townsUrl\n      townsTopText\n      townsSubheading\n      townsHeading\n      townsButtonText\n    }\n\n    communitySection {\n      communitySubheading\n      communityHeading\n      communityLinks {\n        subheading\n        url\n        heading\n      }\n    }\n\n    _site {\n      globalSeo {\n        siteName\n        titleSuffix\n        twitterAccount\n        fallbackSeo {\n          title\n          twitterCard\n          image {\n            url\n          }\n          description\n        }\n      }\n      faviconMetaTags(variants: [icon, appleTouchIcon, msApplication]) {\n        attributes\n        content\n        tag\n      }\n    }\n  }\n"): (typeof documents)["\n  query SiteData {\n    headerFooterLink {\n      communityItems {\n        text\n        url\n      }\n      developerItems {\n        url\n        text\n      }\n      governanceItems {\n        url\n        text\n      }\n    }\n\n    footerSection {\n      footerNewsletterHeading\n      footerNewsletterSubheading\n    }\n\n    globalLink {\n      twitterUrl\n      townsUrl\n      githubUrl\n      blogUrl\n    }\n\n    heroSection {\n      leftButtonText\n      rightButtonText\n      heroSectionRainbowHeading\n      heroSectionMainHeading\n      heroSectionDescription\n      leftButtonUrl\n      rightButtonUrl\n      topButtonText\n      topButtonUrl\n    }\n\n    benefitsSection {\n      benefits {\n        benefitUrl\n        benefitSubheading\n        benefitHeading\n        benefitButtonText\n      }\n    }\n\n    featuresSection {\n      featuresSubheading\n      featuresHeading\n      features {\n        label\n        subheading\n        heading\n        featureUrl\n      }\n    }\n\n    townsSection {\n      townsUrl\n      townsTopText\n      townsSubheading\n      townsHeading\n      townsButtonText\n    }\n\n    communitySection {\n      communitySubheading\n      communityHeading\n      communityLinks {\n        subheading\n        url\n        heading\n      }\n    }\n\n    _site {\n      globalSeo {\n        siteName\n        titleSuffix\n        twitterAccount\n        fallbackSeo {\n          title\n          twitterCard\n          image {\n            url\n          }\n          description\n        }\n      }\n      faviconMetaTags(variants: [icon, appleTouchIcon, msApplication]) {\n        attributes\n        content\n        tag\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;