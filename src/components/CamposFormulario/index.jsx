import './CamposFormulario.css'

export function CamposFormulario({children}){
  return (
    <fieldset className='campos-form'>
      {children}
    </fieldset>
  )
}