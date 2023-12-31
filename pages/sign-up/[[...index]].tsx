import { SignUp } from "@clerk/nextjs";
import { NextSeo } from 'next-seo';
export default function Page() {
  return (
    <section id="sign-in-page" className="flex flex-col items-center justify-center min-h-screen py-2 px-2">
      <NextSeo
        title="Gemino - Sign Up"
        description="Gemino is an AI powered language learning platform that helps you learn faster."
        canonical="https://gemino.arun.codes/"
        openGraph={{
          url: 'https://gemino.arun.codes/',
          title: 'Gemino',
          description: 'Gemino is an AI powered language learning platform that helps you learn faster.',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_BASE_URL}/og.png`,
              width: 800,
              height: 600,
              alt: 'Gemino',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Gemino',
        }}
        twitter={{
          handle: '@aruncsdev',
          site: '@aruncsdev',
          cardType: 'summary_large_image',
        }}
      />
      <SignUp />
    </section>
  );
}
