import "./style.scss";

interface InputProps {
  value?: string;
  id: string;
  name: string;
  placeholder: string;
  className: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      type="text"
    //   value={props.value}
      placeholder={props.placeholder}
      id={props.id}
      name={props.name}
      className={props.className}
    />
  );
};

export default Input;
