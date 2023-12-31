import { UserProfile } from "@clerk/nextjs";
import { NextSeo } from 'next-seo';
const UserProfilePage = () => (
  <section className="pb-12">
    <NextSeo
      title="Gemino - Edit Profile"
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
    <UserProfile
      path="/user-profile"
      routing="path"
    />
  </section>
);

export default UserProfilePage;
