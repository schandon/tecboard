import './App.css'

function FormularioDeEvento(){
  return(
    <form className="form-evento" action="">
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor="">Qual o nome do Evento?</label>
        <input type="text" id='nome' />
      </fieldset>
    </form>
  )
}
function App() {
  return (
    <>
      <header>
        <img src="/Logo.png" alt="" />  
      </header>
      <section>
        <img src="/Hero Image com texto_L.png" alt="" />  
      </section>
      <FormularioDeEvento/>      
    </>
  )
}

export default App
