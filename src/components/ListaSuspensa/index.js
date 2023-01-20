import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
  const {label, itens, obrigatorio, valor} = props;

  return (
    <div className='lista-suspensa'>
      <label>{label}</label>
      <select 
        required={obrigatorio}
        onChange={event => props.aoAlterar(event.target.value)}
        value={valor} 
      >
        <option value=""></option>
        {itens.map(item => <option key={item} value={item}>{item}</option>)}
      </select>
    </div>
  );
}

export default ListaSuspensa;