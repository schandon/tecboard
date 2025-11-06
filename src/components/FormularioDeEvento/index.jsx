import { CamposFormulario } from "../CamposFormulario";
import { EntradaDados } from "../EntradaDados";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";

export function FormularioDeEvento(){
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