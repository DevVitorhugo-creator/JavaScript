function contar() {
    let ini = document.getElementById('inicio')
    let end = document.getElementById('fim')
    let pass = document.getElementById('passo')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || end.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(end.value)
        let p = Number(pass.value)
        if (p == 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
    }
    
}