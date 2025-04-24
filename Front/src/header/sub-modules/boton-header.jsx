const Button = ({ text, page, setPage }) => {
  return <button 
    onClick={() => setPage(page = text)}
    > { text } 
  </button>
};

export default Button;