import 'aos/dist/aos.css';

export const initAnimation = () => {
  const isBrowser = typeof window !== 'undefined';
  const AOS = isBrowser ? require('aos') : undefined;
  AOS.init({
    duration: 1000,
  });
};
