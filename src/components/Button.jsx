
const Button = ({label, mb, padding, className}) => {
  return (
    <button className={` rounded-full py-[12px] px-[24px] text-white ${mb && 'mb-[32px]'} ${padding && 'mb-[90px]'} ${className}`}>
        {label}
    </button>
  )
}

export default Button
