export const themeModes = {
  dark: {
    backgrounds: { value: "#333333" },
    theme: "dark",
  },
  light: {
    backgrounds: { value: "#f8f8f8" },
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
