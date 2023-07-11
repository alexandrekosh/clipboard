const input = document.querySelector('input')

function generator() {
    var radomString = Math.random().toString(35).slice(-10)

    input.value = radomString
}

function copyToClipboard() {
    navigator.clipboard.writeText(input.value).then(()=>{
        alert("Copiado!")
    })
}