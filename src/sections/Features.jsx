import FeaturesCard from "../components/FeaturesCard"
import { features } from "../constants"

const Features = () => {
  return (
    <section id="features" className="text-center py-10 max-md:mt-[-80px]">
      <div className="lg:mx-[480px] ">
        <h2 className="text-navy text-4xl font-[600]">Less time on paperwork, more time with patients</h2>
        <p className="text-slate-gray text-[18px] mt-4 mb-16">Discover the features that make clinical notes effortless</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-2 gap-[36px] lg:mx-[350px]">
        {features.map((feature)=> (
            <FeaturesCard key={feature.name} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default Features
