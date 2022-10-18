import '../styles/Button.css';
interface ButtonProps {
  children: React.ReactNode;
  handleClick?: () => void;
}

const Button = ({ children, handleClick }: ButtonProps) => {
  return (
    <button onClick={handleClick} className='button'>
      {children}
    </button>
  );
};

export default Button;
