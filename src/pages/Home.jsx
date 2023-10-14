import Banner from "../components/Banner";
import BannerReverse from "../components/BannerReverse";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import ProudProducts from "../components/ProudProducts";
import TrendingSlider from "../components/TrendingSlider";
import Banner1 from "../images/banner/scoot-backpack.png";
import Banner2 from "../images/banner/way-backpack.png";

function Home() {
  return (
    <>
      <Hero />
      <ProudProducts />
      <Banner
        title="SCOOT BACKPACK"
        text="A trendy backpack with space for all your essentials, made from durable Tarpaulin with adjustable leather straps."
        img={Banner1}
      />
      <TrendingSlider />
      <BannerReverse
        title="PLAY, COMFORT AND QUOTIDIAN EASE"
        text="Made for effortless, everyday routines, Drawstring prioritises comfort, modern functionality and quick access."
        img={Banner2}
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
