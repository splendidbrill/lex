import Image from "next/image";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import HomePage from "./components/HomePage";
import GsapTimeline from "./components/GsapTimeline";
import SpotlightCard from "./components/SpotlightCard";



export default function Home() {
 return (
  <div >
    {/* <Hero />
    <BentoGrid /> */}
    <HomePage />
    <GsapTimeline />
    import SpotlightCard from './SpotlightCard';
  
<SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
  Hi
</SpotlightCard>
  </div>
 )
}
