import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import NewsSection from "./components/NewsSection";

export default function IndexPage() {
  return (
    <>
      <HeroSection />
      <MenuSection />
      <section className="BgImage"></section>
      <NewsSection />
    </>
  );
}
