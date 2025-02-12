import { ArrowIcon, GitHubIcon, LinkedInIcon } from '../components/icons';

export const metadata = {
  title: 'About',
  description: 'Software Development Engineer II at Amazon.',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>

      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey, I&apos;m André. Most of my friends know me as <b>Del</b> online.
      </p>

      <div>
        <p>
          I&apos;m currently a <b>Software Development Engineer II at Amazon</b>
          , where I focus on developing and innovating our tech stack.
        </p>

        <br />

        <p>
          Previously, I worked at <b>TikTok</b> as a Solutions Engineer and
          spent close to 4 years at <b>Umatch</b> as a Technical Lead, leading
          our mobile and web development teams.
        </p>

        <br />

        <p>
          I&apos;m passionate about many creative pursuits, including
          bouldering, learning languages (German, Italian, etc), videogames
          (LoL), and of course, coding. This combination of interests is what
          ultimately led me to my current role in building a new way for people
          to meet.
        </p>

        <br />

        <p className="mb-8">
          I <b>love</b> building for the end user. From something as simple as a
          single HTML file - all the way to large and complex multi-layered
          applications. Web and mobile development are incredible. At the same
          time that it&apos;s a very complex and challenging field, it&apos;s
          also very rewarding when we get to see the results of our work
          affecting people&apos;s lives.
        </p>

        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/andrelfnavarro"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/andrelfnavarro"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <LinkedInIcon />
              <div className="ml-3">LinkedIn</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
