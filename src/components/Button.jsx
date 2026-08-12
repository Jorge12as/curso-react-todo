function Button(props){

    return (
      <button {...props} className="bg-slate-500 p-2 rounded-md text-gray-200 hover:bg-slate-600">
        {props.children}
      </button>     
    );
}

export default Button;