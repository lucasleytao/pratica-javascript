
//** Lista de exercícios 1 **

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

    













   


