export const formatarReal = (valor:number):string => {
    return `R$${valor.toFixed(2).replace('.', ',')}`
}

export const arredondar = (valor:number, casas:number = 2):number => {
    const fator:number = Math.pow(10,casas)
    return Math.round(valor*fator)/fator
}

export const emMaiusculas = (text:string) => text.toUpperCase()

export const alinhar = (texto:string, largura:number = 16):string => {
    let saida:string = texto
    while (saida.length < largura) {
        saida = ' ' + saida
    }
    return saida
}

export const repetir = (caractere:string, quantidade:number = 58) => {
    let saida:string = ''
    for (let i = 0; i < quantidade; i++) {
        saida += caractere
    }
    return saida
}