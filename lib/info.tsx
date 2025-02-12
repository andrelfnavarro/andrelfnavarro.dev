import me from '../app/avatar.jpg';

export const name = 'André Navarro';
export const avatar = me;
export const about = () => {
  return (
    <>
      Hey, I&apos;m André. I work as a{' '}
      <b>Software Development Engineer II at Amazon</b> where I focus on
      expanding Fulfillment By Amazon in Brazil.
    </>
  );
};
export const bio = () => {
  return (
    <>
      I&apos;m a software engineer with over 5 years of experience in both front
      and backend development. I&apos;m passionate about frontend/mobile
      development and have worked a lot with React and React Native. I also have
      experience with Java and distributed systems at scale.
      <br />
      <br />
      I have a BoS in Computer Engineering from the University of São Paulo.
      <br />
      <br />I love trying out new technologies, such as Next.js (this), Expo,
      Astro, Qwik, and Svelte.
    </>
  );
};
