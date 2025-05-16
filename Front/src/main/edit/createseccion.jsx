

function InterfasCreateBook(){

  return(
    <>
      <section id='CreateBook' >
        <h2> Ingrese los datos </h2>
        <aside>
          <form action="" className="Constructor">
            <div className="campo" id="campo-portada" >
              <p> Imagen de Portada </p>
              <input type="image" src="Foto de Portada" alt={'/Front/src/resours/'} />
            </div>
            <div className="campo-nombre, campo">
              <p> Nombre del libro </p>
              <input type="text" name="BookName" id="bookName" />
            </div>
            <div className="campo" id="campo-description" >
              <p> Descripcion del libro </p>
              <input type="text" name="BookDescription" id="bookDescription" />
            </div>
          </form>
        </aside>
      </section>
    </>
  );

}

export default InterfasCreateBook;