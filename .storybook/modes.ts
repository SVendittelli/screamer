export const themeModes = {
  dark: {
    theme: "dark",
  },
  light: {
    theme: "light",
  },
};

export const viewportModes = {
  mobile: {
    viewport: "mobile",
  },
  tablet: {
    viewport: "tablet",
  },
  laptop: {
    viewport: "laptop",
  },
  desktop: {
    viewport: "desktop",
  },
};

export const allModes = {
  ...themeModes,
  ...viewportModes,
};
