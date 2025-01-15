interface Props {
  children?: React.ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  handleClick: () => void;
}

const Button = ({ children, color = "primary", handleClick }: Props) => {
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
