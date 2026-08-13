// 

import PropTypes from "prop-types";

function Button({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-slate-500 p-2 rounded-md text-gray-200 hover:bg-slate-600"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;