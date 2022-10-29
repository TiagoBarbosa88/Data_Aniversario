function onChangeDate() {
let nasc = document.getElementById('data').value


const today = new Date();
const birthDate = new Date(nasc);
  const age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  
   return document.getElementById('idade').innerText = `Voçê ${age} anos de idade`;
}
