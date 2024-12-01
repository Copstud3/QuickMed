
const FeaturesCard = ({imgURL, name, note}) => {
  return (
    <div className="flex flex-col p-10 lg:w-[380px] bg-ash rounded-[30px]">
      <img src={imgURL} width={100} />
            <h2 className="font-[600] text-[18px] text-left my-2">{name}</h2>
            <p className="text-left leading-6 text-slate-gray text-[16px]">{note}</p>
    </div>
  )
}

export default FeaturesCard
