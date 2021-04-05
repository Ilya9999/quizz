let arrayEng = ['cat','dog','mouse'];
let arrayRus = ['кошка','собака','мыша'];

for(let i = 0; i < arrayEng.length; i++){
    let ask = prompt('Переведите слово ' + arrayEng[i])
    if(ask === arrayRus[i]){
        alert('Все верно это ' + arrayRus[i])
    } else if (ask === null){
        alert('Жалко что вы уходите , это было слово ' + arrayRus[i])
        break;
    } else {
        alert('Нет это ' + arrayRus[i])
    }
}

