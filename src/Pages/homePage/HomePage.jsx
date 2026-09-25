import AiDayPlanning from "../components/AiDayPlanning";
import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
import Featured from "../components/Featured";
import FooterSection from "../components/FooterSection";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import NextStudySession from "../components/NextStudySession";
import Pricing from "../components/Pricing";
import Review from "../components/Review";
import Stats from "../components/Stats";
import Studying from "../components/Studying";

function HomePage() {
  return (
      <div>
        <Navbar />
        <Banner />
        <Stats />
        <Studying />
        <Featured />
        <HowItWorks />
        <AiDayPlanning />
        <Review />
        <Pricing />
        <FAQ />
        <NextStudySession />
        <FooterSection />
      </div>
  )
}

export default HomePage
