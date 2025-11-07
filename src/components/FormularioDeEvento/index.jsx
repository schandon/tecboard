import { CamposFormulario } from '../CamposFormulario';
import { EntradaDados } from '../EntradaDados';
import { Label } from '../Label';
import { TituloFormulario } from '../TituloFormulario';
import '../FormularioDeEvento/FormularioDeEvento.css'
import { Button } from '../Button';

export function FormularioDeEvento() {
  return (
    <form
      className="form-evento"
      action=""
    >
      <TituloFormulario>Teste 123 - Alexandre</TituloFormulario>
      <div className="campos">
        <CamposFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do Evento?</Label>
          <EntradaDados
            type="text"
            id="nomeEvento"
            placeholder="Summer dev Hits"
            name="nomeEvento"
          />
        </CamposFormulario>
        <CamposFormulario>
          <Label htmlFor="dataEvento">Data do Evento</Label>
          <EntradaDados
            type="date"
            id="dataEvento"
            name="dataEvento"
          />
        </CamposFormulario>
        <CamposFormulario>
          <Label htmlFor="temaEvento">Tema de Evento</Label>
          <EntradaDados
            type="text"
            id="temaEvento"
            name="temaEvento"
            placeholder='Festa de Música Eletrônica'
          />
        </CamposFormulario>
        <Button>Criar Evento</Button>
      </div>
    </form>
  );
}
