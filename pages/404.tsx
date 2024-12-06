import type { NextPage } from "next";

import AppHead from "@/components/AppHead";
import Footer from "@/components/Footer";
import LinkButton from "@/components/LinkButton";

import { meta } from "pages";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <AppHead
        title="Prakash Patel - A Full-stack Developer"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="h-screen flex flex-col justify-center selection:bg-lightaccent selection:text-bglight dark:selection:bg-darkaccent dark:selection:text-bgdark">
          <div className="flex justify-center items-center flex-col mt-auto">
            <h1 className="text-8xl xs:text-9xl font-bold text-lightaccent dark:text-darkaccent">
              404
            </h1>
            <div className="text-lg xs:text-2xl my-2">
              Page Not Found :&apos;&#40;
            </div>
            <div className="max-w-xs text-center mb-10">
              It seems the page you&apos;re looking for does not exist, or there
              might be a typo in the URL.
            </div>
            <div className="flex space-x-4">
              <LinkButton href="/" outline>
                Go back Home
              </LinkButton>
            </div>
          </div>
          <Footer noPadding />
        </div>
      </div>
    </>
  );
};

export default Home;
