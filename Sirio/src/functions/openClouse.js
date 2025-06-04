
export function OpenClouse(){
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