const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');
//console.log(getId, assignAttribute);

const setCard =()=> {
 const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;

}

// const resetAtt =()=>{
    
// }