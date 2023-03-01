import me from '../app/avatar.jpg';

export const name = 'André Navarro';
export const avatar = me;
export const about = () => {
  return (
    <>
      Hey, I'm André. I work as the <b>Technical Lead at Umatch</b> where my
      team helps college students find their perfect match.
    </>
  );
};
export const bio = () => {
  return (
    <>
      I'm a fullstack software engineer. I'm passionate about frontend
      development and have worked a lot with React and React Native. I also love
      trying out new technologies, such as Next.js (this), Expo, Astro, Qwik and
      Svelte.
    </>
  );
};
