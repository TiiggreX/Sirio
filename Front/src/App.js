import { useState } from 'react'
import Header from "./header/header";
import Main from "./main/main"

function App() {
  const title = document.getElementById('title').textContent;
  const [page, setPage] = useState('Inicio')

  return (
    <>
      <div>
        <Header title={title} page={page} setPage={setPage} />
        <Main page={page} />
      </div>
    </>
  );
}

export default App;