const darkTheme = {
  accent1: '#99f5ff',
  accent2: '#7b61ff',
  accent3: '#ffc93f',
};

const lightTheme = {
  accent1: '#7b61ff',
  accent2: '#2e83ff',
  accent3: '#ffa927',
};

type Theme = typeof darkTheme;

export const getThemeColor = (name: keyof Theme, theme: 'dark' | 'light') => {
  return theme === 'dark' ? darkTheme[name] : lightTheme[name];
};
