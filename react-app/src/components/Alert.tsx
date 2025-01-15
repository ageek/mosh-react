import { ReactNode } from "react";

// The children prop is a special prop that React automatically passes to components.
// It contains whatever content you include between the opening and closing tags of
// a component. Think of it like the content inside HTML tags.
interface Props {
  children: ReactNode;
}
const Alert = ({ children }: Props) => {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        {children}
      </div>
    </div>
  );
};

export default Alert;
