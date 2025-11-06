import './App.css'

function TituloFormulario(props){
  return(
    <h2>
      {props.children}
    </h2>
  )
}

function CamposFormulario({children}){
  return (
    <fieldset>
      {children}
    </fieldset>
  )
}

function Label({children}){
    return (
    <label>
      {children}
    </label>
  )
}

function EntradaDados(props){
  return ( <input {...props} />)
}
function FormularioDeEvento(){
  return(
    <form className="form-evento" action="">
      <TituloFormulario>
        Teste 123 - Alexandre
      </TituloFormulario>
      <CamposFormulario>
        <Label htmlFor="">Qual o nome do Evento?</Label>
        <EntradaDados type="text" id='nome' placeholder='Summer dev Hits'/>
      </CamposFormulario>
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
