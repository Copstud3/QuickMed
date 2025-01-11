

const WorkCard = ({imgURL, name, note}) => {
  return (
    <div className="flex flex-col p-10 lg:w-[403px] h-[426px] bg-ash rounded-[30px] overflow-hidden">
            <h2 className="font-[600] text-[18px] text-left my-2">{name}</h2>
            <p className="text-left leading-6 text-slate-gray text-[14px]">{note}</p>
            <div className="flex justify-center">
            <img src={imgURL} className="w-42" />
            </div>
    </div>
  )
}

export default WorkCard
