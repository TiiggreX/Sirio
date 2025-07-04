import { Formulario } from './formulario'

function InterfasCreateBook(){
  return(
    <>
      <section id='CreateBook' >
        <h3> Ingrese los datos </h3>
        <aside>
          <Formulario />
        </aside>
      </section>
    </>
  );
}

export default InterfasCreateBook;