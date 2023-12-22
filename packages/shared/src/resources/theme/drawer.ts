const MOB_DRAWER_HEADER_HEIGHT = '181px'

export const Drawer = {
  variants: {
    drawerSubMenu: {
      dialog: {
        pointerEvents: 'auto',
        height: `calc(100% - ${MOB_DRAWER_HEADER_HEIGHT})`,
        top: 'auto !important',
      },
      dialogContainer: {
        pointerEvents: 'none',
        top: 'auto',
        bottom: 0,
        height: `calc(100% - ${MOB_DRAWER_HEADER_HEIGHT})`,
      },
      body: {
        py: 0,
        px: 0,
        position: 'relative',
      },
      overlay: {
        bg: 'transparent',
        pointerEvents: 'none',
        top: 'auto',
        bottom: 0,
        height: `calc(100% - ${MOB_DRAWER_HEADER_HEIGHT})`,
      },
    },
  },
}
