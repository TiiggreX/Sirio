import { Link } from 'react-router'
import { OpenClouse } from '../functions/openClouse'

const LinkButton = ({ text, to }) => {
  return(
    <Link to={to} >
      <button  >
        { text }
      </button>
    </Link>
  )
}

const LateralButton = () => {
  return <button 
    className="Button_Lateral" 
    onClick={() => OpenClouse()}
    >
    =
    </button>
};

export { LinkButton, LateralButton }