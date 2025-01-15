interface Props {
  children?: React.ReactNode;
  type: string;
  handleClick?: (item: string) => void;
}

const Button = ({ children, type }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + type}>
        {children}
      </button>
    </div>
  );
};

export default Button;
