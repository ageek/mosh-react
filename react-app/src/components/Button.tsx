interface Props {
  children?: React.ReactNode;
  color: string;
  handleClick: () => void;
}

const Button = ({ children, color, handleClick }: Props) => {
  return (
    <div>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
