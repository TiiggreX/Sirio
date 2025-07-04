
export const Input = ({ text, type, src }) => {
  return(
    <div className={text}  >
      <input type={type} src={src} id={text} placeholder={text} />
    </div>
  )
}

export const TextArea = ({ text, type, src }) => {
  return(
    <div className={text}  >
      <textarea type={type} src={src} id={text} placeholder={text} />
    </div>
  )
}