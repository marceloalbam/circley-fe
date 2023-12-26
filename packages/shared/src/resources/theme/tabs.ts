import { COLOR_MAP_PRIMARY } from '../../constants'

const tabStyle = (store: string) => {
  return {
    tablist: {
      justifyContent: { base: 'space-around', md: 'center' },
      gap: { base: 0, md: 12, lg: 16 },
    },
    tab: {
      letterSpacing: '1px',
      lineHeight: '1.2',
      fontSize: 'xl',
      fontWeight: '500',
      px: 0,
      borderBottom: '2px solid transparent',
      _selected: {
        borderColor: COLOR_MAP_PRIMARY[store as string],
      },
    },
    tabpanels: {
      p: 0,
      pt: 10,
    },
    tabpanel: {
      p: 0,
    },
  }
}

export const Tabs = {
  variants: {
    'pdp-default': { ...tabStyle('circley') },
    'pdp-circley': { ...tabStyle('circley') },
    'pdp-highhorse': { ...tabStyle('highhorse') },
    'pdp-reinsman': { ...tabStyle('reinsman') },
    'pdp-tucker': { ...tabStyle('tucker') },
  },
}
