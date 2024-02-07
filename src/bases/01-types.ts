export const name = 'Carlos'
export const age: number = 30
export const isValid: boolean = true

export const templateString = ` Esto es un string
multilinea
que puede tener
" dobles
' simples
inyectar valores ${ name }
expresiones ${ 1 + 1}
números: ${ age }
booleanos: ${ isValid }
`

console.log(templateString);