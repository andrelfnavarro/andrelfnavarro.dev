import Image from 'next/image';
import { ViewsIcon, GitHubIcon, LinkedInIcon } from './components/icons';
import { name, about, bio, avatar } from '@/lib/info';

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={'André Navarro'}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />

        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.uapp&hl=en&gl=US"
            className="flex items-center gap-2"
          >
            <ViewsIcon />
            +1M college students have used what I built
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/andrelfnavarro"
            className="flex items-center gap-2"
          >
            <GitHubIcon />I dump all my code here
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/andrelfnavarro"
            className="flex items-center gap-2"
          >
            <LinkedInIcon />
            Connect with me
          </a>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
    </section>
  );
}
