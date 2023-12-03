import Banner from "@/components/Baner";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LatestArticles from "@/components/LatestArticles";
import ShopCollection from "@/components/ShopCollection";
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Categories />
      <Banner />
      <ShopCollection />
      <LatestArticles />
    </>
  );
}
