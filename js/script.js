// Membuat glass untuk home page
// membuat glass1
const glass1 = document.createElement('div');
const teksGlass1 = document.createTextNode('');
glass1.setAttribute('class', 'glass1');
glass1.appendChild(teksGlass1);
// membuat glass2
const glass2 = document.createElement('div');
const teksglass2 = document.createTextNode('');
glass2.setAttribute('class', 'glass2');
glass2.appendChild(teksglass2);
// membuat glass3
const glass3 = document.createElement('div');
const teksGlass3 = document.createTextNode('');
glass3.setAttribute('class', 'glass3');
glass3.appendChild(teksGlass3);
// membuat glass3
const glass4 = document.createElement('div');
const teksGlass4 = document.createTextNode('');
glass4.setAttribute('class', 'glass4');
glass4.appendChild(teksGlass4);


const containerGlass = document.querySelector('.container-glass');
containerGlass.appendChild(glass1);
containerGlass.appendChild(glass2);
containerGlass.appendChild(glass3);
containerGlass.appendChild(glass4);
