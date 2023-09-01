import { useState, useEffect } from 'react';

export const useMediaQuery = (width: number) => {
  const [matches, setMatches] = useState(
    window.matchMedia(`(min-width: ${width}px)`).matches
  );

  useEffect(() => {
    window
      .matchMedia(`(min-width: ${width}px)`)
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return matches;
};
