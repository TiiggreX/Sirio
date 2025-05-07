const buttonStyle = {
  width: '40px',
  heigth: '22px',
}
function OpenClouse(){
  const page = document.getElementById('nav-container');

  if(page !== null && page.style.display === 'none'){
    page.style.display = 'flex';
  }
  else if(page !== null && page.style.display === 'flex'){
    page.style.display = 'none';
  }
  else {
    page.style.display = 'flex';
  }
}
const BotonLateral = () => {
  return <button 
    style={buttonStyle} 
    className="Button_Lateral" 
    onClick={() => OpenClouse()}
    >
    =
    </button>
};

export default BotonLateral