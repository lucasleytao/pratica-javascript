
//** Pratica - lista 1 **

//1. Faça um Programa que mostre a mensagem "Alo mundo" na tela.
console.log('Hello word!')

//2. Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].
let num1 = 14
//let num1 = prompt('Informe um número inteiro qualquer')
console.log(`O valor da variável é: ${num1}`) //neste caso, devo utilizar o sinal de crase ou grave

//3. Faça um Programa que peça dois números e imprima a soma.
let num2 = 10, num3 = 4
console.log('A soma dos valores corresponde à: ' + (num2 + num3))

//4. Faça um Programa que peça as 4 notas bimestrais e mostre a média.
// let aluno = prompt('Informa seu nome: ')//inputs do usuario
// let nota1 = prompt('Insira a nota 1: ')
// let nota2 = prompt('Insira a nota 2')

// let nota1c = parseFloat(nota1) //converte string em int
// let nota2c = parseFloat(nota2)
// let media = (nota1c + nota2c) / 2
// console.log(`Aluno: ${aluno}`)
// console.log('Média do bimestre: ' + media)

// if (media >= 7) {
//     console.log('[ Aprovado ]')
// } else if (media >= 5 && media < 7) {
//     console.log('[ Prova final ]')
// } else {
//     console.log('[ Reprovado ]')
// }

//5. Faça um Programa que converta metros para centímetros.
// let metro = prompt('Insira um valor em metros')//em caso de float deve-se usar .
// let metroc = parseFloat(metro)
// let cent = metroc * 100

// console.log('A conversão de metro para cm corresponde à: ' + cent + ' cm')

// 6. Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
//area = pi.r^2
let raio = 15
const pi = 3.1416
let area = pi * raio**2
console.log('A área do circulo corresponde a: ' + area)

// 7. Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
//areaq = lado**2
let lado = 15
let areaq = lado**2
console.log('A área do quadrado corresponde a: '+ areaq)
console.log('O dobro da área corresponde a: '+ areaq*2)

// 8. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
// let h = prompt('Quanto você ganha por hora?')
// let hm = prompt('Quantas horas você trabalha no mês?')
// let hora = parseFloat(h) //converte o tipo de dado
// let hmes = parseFloat(hm)
// console.log('Seu salário mensal corresponde a: '+ hora*hmes)

// 9. Faça um Programa que peça a temperatura em graus Farenheit, transforme e mostre a temperatura em graus Celsius.
//C = (F-32) / 1.8).
let f = 70
let c = (f - 32) / 1.8
console.log(`Temperatura ${f}° Farenheit corresponde à ${c.toFixed(1)}° Celsius`) //toFixed(1)limita n de casas dec a esq.

// 10. Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Farenheit.
//F = C * 1.8 + 32
let cel = 15
let far = cel * 1.8 + 32
console.log(`Temperatura ${cel}° Celsius corresponde à ${far.toFixed(1)}° Farenheit`)

// //11. Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
// a. o produto do dobro do primeiro com metade do segundo .
// b. a soma do triplo do primeiro com o terceiro.
// c. o terceiro elevado ao cubo.

let n1 = 3 
let n2 = 5 //int
let n3 = 4.2 //ponto flutuante

console.log((n1*2)*(n2/2))
console.log((n1*3) + n3)
console.log((n3**3).toFixed(3))

// 12. Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
let altura = 1.71
let form = 72.7 * altura - 58

console.log(`O peso ideal para a sua altura, corresponde a: ${form.toFixed(2)}Kg`)

// 13. Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
// . Para homens: (72.7*h) - 58
// a. Para mulheres: (62.1*h) - 44.7
let ah = 1.71
let am = 1.49
let formh = 72.7 * ah - 58
let formm = 62.1 * am - 44.7

console.log(`O peso ideal para a altura ${ah}m corresponde a: ${formh.toFixed(2)}Kg para homens`)
console.log(`O peso ideal para a altura ${am}m corresponde a: ${formm.toFixed(2)}Kg para mulheres`)

// 14. João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.

let peso = 80
let exc = peso - 50
let mlt = 4 * exc

if (exc > 0) {
    console.log(`ATENÇÃO! ** Quantidade total * ${exc} kg acima do limite estabelecido`)
    console.log(`Multa: ${mlt} reais`)
} else  {
    console.log('LIBERADO! ** Quantidade de Kg dentro do limite estabelecido!')
}

// 15. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
// . salário bruto.
// a. quanto pagou ao INSS.
// b. quanto pagou ao sindicato.
// c. o salário líquido.
// d. calcule os descontos e o salário líquido, conforme a tabela abaixo: e. + Salário Bruto : R$ f. - IR (11%) : R$ g. - INSS (8%) : R$ h. - Sindicato ( 5%) : R$ = Salário Liquido : R$
// Obs.: Salário Bruto - Descontos = Salário Líquido.
let hra = 8 //horas dia
let valorh = 9.375 //valor hora
let sal = valorh * hra * 24 //salario mes
let ir = (sal * 11)/100
let inss = (sal * 8)/100
let sind = (sal * 5)/100

console.log('** Holerite')

console.log(`+ Salário Bruto: ${sal}`)
console.log('-----------------------------')
console.log('- Imposto de Renda (11%): '+ ir)
console.log('- INSS (8%): '+ inss)
console.log('- Sindicato (5%)'+ sind)
console.log('-----------------------------')
console.log('= Salário Líquido: '+ (sal-ir-inss-sind))  
























   


