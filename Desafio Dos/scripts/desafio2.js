const btnTotal = document.getElementById('btnTotal');

btnTotal.addEventListener('click', () => {
  const value1 = parseInt(document.getElementById('value1').value);
  const value2 = parseInt(document.getElementById('value2').value);
  const value3 = parseInt(document.getElementById('value3').value);
  const totalStickers = value1 + value2 + value3;
  if (totalStickers <= 10){
    message = `Llevas la cantidad de stickers ${totalStickers}`;
  } else {
    message = 'Llevas demasiados stickers :(';
  }
  result.innerHTML = `
        <h2>${message}</h2>
    `;
});