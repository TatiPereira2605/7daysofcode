let linguagem1 = 'Front'|| 'front' || 'front-end'||'Front-end';
let linguagem2 = 'Back'|| 'back' || 'back-end'||'Back-end';


let areaEscolhida = prompt('Você quer seguir para área de Front-End ou para a área de Back-End');
    if (areaEscolhida == linguagem1) {
    prompt('Você quer aprender React ou Vue?');
}   else if (areaEscolhida == linguagem2) {
    prompt('Você quer aprender C# ou Java?');
}   else {
    alert('Escolha inválida! Reinicie a página!');
}

let carreira = prompt('Você quer se especializar ou ser Fullstack? Digite 1 para especialização ou 2 para FullStack');
    if (carreira == 1) {
    alert('Que ótimo, logo você será um especialista!');
}   else if (carreira == 2) {
    alert('Que ótimo, logo você será profissional completo!');
}   else {
    alert('Você precisa digitar 1 para especialização ou 2 para FullStack. Recomece atualizando a página!');
}
let tecnologias = [];
let maisTecnologia = true;

    while (maisTecnologia) {
    let resposta = prompt("Qual tecnologia você gostaria de aprender?");
        tecnologias.push(resposta);
    maisTecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Responda com 'ok' para continuar ou 'não' para parar.") === "ok";
        }
    alert("Você gostaria de aprender as seguintes tecnologias: " + tecnologias.join(", "));