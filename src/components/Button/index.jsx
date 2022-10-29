import './styles.scss';

const Button = function({children, ...props}) {
  return (
    <button {...props} className="button">{children}</button>
  );
}

export default Button;