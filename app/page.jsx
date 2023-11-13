import { Hero, Features, CoreFeatures, QualityFeatures, ProductFunction, Pricing, FreeTutorial, FAQs, } from "./sections";

const Homepage = () => (
  <div>
    <Hero />
    <Features />
    <CoreFeatures />
    <QualityFeatures />
    <ProductFunction />
    <Pricing />
    <FreeTutorial />
    <FAQs />
  </div>
);

export default Homepage