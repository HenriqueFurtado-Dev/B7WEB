let nome = 'Carlos henrique gomes pereira de almeida'

resultado = nome.indexOf('almeida')
//console.log(resultado)

if(nome.indexOf('gomes') > -1 ) {
    console.log(`O nome começa na posição ${resultado}`)
} else {
    console.log('Não encontrado')
}