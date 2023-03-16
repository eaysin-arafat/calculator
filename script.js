let result = document.getElementById('MyResult')

function DeletMe () {
    result.value = ''
}

function calculator (NewValue) {
    result.value += NewValue
}

function Answer () {
    let a = result.value
    let b = eval(a)
    result.value = b

}