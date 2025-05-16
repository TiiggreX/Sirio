import { Route, Routes } from "react-router-dom"
import Edición from "./edición"
import InterfasCreateBook from "./createseccion"

export const EdiciónRender = () => {
  return(
    <>
      <Routes>
        <Route index element={<> <Edición /> </>} />
        <Route path="CreateSeccion" element={<> <InterfasCreateBook /> </>} />
      </Routes>
    </>
  )
}