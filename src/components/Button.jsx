import PropTypes from "prop-types";

function Button(children, ...props) {
  return (
    <button
      {...props}
      className="bg-slate-500 p-2 rounded-md text-gray-200 hover:bg-slate-600"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
