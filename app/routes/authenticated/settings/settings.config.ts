import {
  AvatarStyle,
  FontSize,
  LandingPage,
  Settings,
  SidebarLayout,
  Theme,
} from 'potber-client/services/settings';

/**
 * Defines all available options for seach setting.
 */
export const settingsConfig: Record<
  `${keyof Settings}Options`,
  { label: string; data: any }[]
> = {
  avatarStyleOptions: [
    {
      label: 'An',
      data: AvatarStyle.small,
    },
    {
      label: 'Aus',
      data: AvatarStyle.none,
    },
  ],

  sidebarLayoutOptions: [
    {
      label: 'Links (oben)',
      data: SidebarLayout.leftTop,
    },
    {
      label: 'Links (unten)',
      data: SidebarLayout.leftBottom,
    },
    {
      label: 'Rechts (oben)',
      data: SidebarLayout.rightTop,
    },
    {
      label: 'Rechts (unten)',
      data: SidebarLayout.rightBottom,
    },
  ],

  themeOptions: [
    {
      label: 'mods.de',
      data: Theme.default,
    },
    {
      label: 'mods.de (Hobelware)',
      data: Theme['default-round'],
    },
    {
      label: 'Schneemann',
      data: Theme.snowman,
    },
  ],

  fontSizeOptions: [
    {
      label: 'Klein',
      data: FontSize.small,
    },
    {
      label: 'Normal',
      data: FontSize.medium,
    },
    {
      label: 'Groß',
      data: FontSize.large,
    },
  ],

  darkenReadPostsOptions: [
    {
      label: 'Ja',
      data: true,
    },
    {
      label: 'Nein',
      data: false,
    },
  ],

  landingPageOptions: [
    {
      label: 'Forenübersicht',
      data: LandingPage.boardOverview,
    },
    {
      label: 'Home',
      data: LandingPage.home,
    },
    {
      label: 'Public Offtopic',
      data: LandingPage.pot,
    },
  ],

  autoRefreshSidebarOptions: [
    {
      label: 'An',
      data: true,
    },
    {
      label: 'Aus',
      data: false,
    },
  ],

  replaceForumUrlsOptions: [
    {
      label: 'Ja',
      data: true,
    },
    {
      label: 'Nein',
      data: false,
    },
  ],

  enableGesturesOptions: [
    {
      label: 'An',
      data: true,
    },
    {
      label: 'Aus',
      data: false,
    },
  ],

  debugOptions: [
    {
      label: 'An',
      data: true,
    },
    {
      label: 'Aus',
      data: false,
    },
  ],
};
