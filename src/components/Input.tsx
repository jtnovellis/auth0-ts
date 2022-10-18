import '../styles/Input.css';
import type { Form } from '../App';

interface InputProps {
  name: string;
  value: string;
  setFormData: React.Dispatch<React.SetStateAction<Form>>;
}
const Input = ({ name, value, setFormData }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <input
      name={name}
      type={name}
      value={value}
      onChange={handleChange}
      className='input'
    />
  );
};

export default Input;
