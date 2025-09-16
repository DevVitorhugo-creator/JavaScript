function contar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    for (var c = ini.value; c <= fim.value; c += passo.value) {
        res.length.value.innerHTML = 'Contando:'
        res.length.value.innerHTML += ` ${c} \u{1F449}`
    }
}