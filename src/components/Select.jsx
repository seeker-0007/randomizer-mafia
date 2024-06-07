export default function Select({ children, labelText, id, value, onChange }) {
  return (
    <li className="menu_item" >
      <label htmlFor={id}>{labelText}</label>
      <select id={id} value={value} onChange={onChange}>
        {children}
      </select>
    </li>
  );
}
