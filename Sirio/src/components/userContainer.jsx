
export const ContentUser = ({ nombre, edad, genero, description }) => {
  return(
    <span className='UserContaniner' >
        <div className='InfoContainer' >
        <p className='contentUserName' > {`Nombre :`+ nombre } </p>
        <p className='contentUserAge' > {`Edad : ${edad} `} </p>
        <p className='contentUserGender' > {`Genero : ${genero} `} </p>
        <p className='contentUserDescription' > {`Descrpción : ${description} `} </p>
      </div>
    </span>
  )
}