import FeaturesCard from "../components/FeaturesCard"
import { features } from "../constants"

const Features = () => {
  return (
    <section id="features" className="text-center py-10 mx-10">
      <div className="xl:mx-44 ">
        <h2 className="text-navy text-4xl font-[600]">Less time on paperwork, more time with patients</h2>
        <p className="text-slate-gray text-[18px] mt-4 mb-16">Discover the features that make clinical notes effortless</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-2 gap-[30px] xl:mx-44">
        {features.map((feature)=> (
            <FeaturesCard key={feature.name} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default Features
