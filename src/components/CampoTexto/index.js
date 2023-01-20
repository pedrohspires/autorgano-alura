import './CampoTexto.css';

const CampoTexto = (props) => {
  const { label, placeholder, obrigatorio } = props;
  
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input 
        value={props.valor} 
        onChange={event => props.aoAlterar(event.target.value)} 
        required={obrigatorio} 
        placeholder={placeholder}
      />
    </div>
  );
}

export default CampoTexto;