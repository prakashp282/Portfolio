import type { NextPage } from "next";
import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";

export const meta = {
  description:
    "Prakash Patel is a full-stack developer based in Pune, Maharashtra. He is passionate about writing codes and developing web applications to solve real-life challenges.",
  author: "Prakash Patel",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/PrakashPatel-og.png`,
  siteName: "Prakash Patel",
  imageAlt: "Prakash Patel portfolio website",
};

const Home: NextPage = () => {
  return (
    <>
      <AppHead
        title="Prakash Patel - A Full-stack Developer"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Loader>Prakash Patel</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-lightaccent selection:text-bglight dark:selection:bg-darkaccent dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
