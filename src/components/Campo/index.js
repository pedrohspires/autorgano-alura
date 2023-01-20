import './Campo.css';

const Campo = (props) => {
  const { type = 'text', label, placeholder, obrigatorio } = props;
  
  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input 
        type={type}
        value={props.valor} 
        onChange={event => props.aoAlterar(event.target.value)} 
        required={obrigatorio} 
        placeholder={placeholder}
      />
    </div>
  );
}

export default Campo;