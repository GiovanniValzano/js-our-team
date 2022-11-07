/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/

//variabili globali 
const container = document.querySelector('.secondo-blocco')




// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const arrayTeam = [membro1 = {nome: 'Wayne Barnett', ruolo: 'Founder & CEO', foto: 'img/wayne-barnett-founder-ceo.jpg'} , membro2 = {nome: 'Angela Caroll', ruolo: 'Chief Editor', foto: 'img/angela-caroll-chief-editor.jpg'}, membro3 = {nome: 'Walter Gordon', ruolo: 'Office Manager', foto: 'img/walter-gordon-office-manager.jpg'} , membro4 = {nome: 'Angela Lopez', ruolo: 'Social Media Manger', foto: 'img/angela-lopez-social-media-manager.jpg'} , membro5 = {nome: 'Scott Estrada', ruolo: 'Developer', foto: 'img/scott-estrada-developer.jpg'} , membro6 = {nome: 'Barbara Ramos', ruolo: 'Graphic Designer', foto: 'img/barbara-ramos-graphic-designer.jpg'} ]



// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
console.table(arrayTeam)



// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

for (let i = 0; i < arrayTeam.length; i++) {
    // per vedere se funziona
    console.log(`Studente numero ${i}: ${arrayTeam[i].nome} ${arrayTeam[i].ruolo} ${arrayTeam[i].foto}`)
    //stampa delle immagini 
    container.innerHTML += (`
    <div class=card> <img src=${arrayTeam[i].foto}> 
    <h2>${arrayTeam[i].nome}</h2> 
    <div> ${arrayTeam[i].ruolo}</div></div>
    `)
}