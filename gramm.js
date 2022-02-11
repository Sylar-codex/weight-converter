document.getElementById('inputgrams').addEventListener('input', (weightconverter1) => {
    let gr = weightconverter1.target.value
    document.getElementById('outputkg1').innerHTML = gr * 0.001
    document.getElementById('p11').innerHTML = gr / 454
    document.getElementById('t11').innerHTML = gr * 0.000001
    document.getElementById('kt1').innerHTML = gr * 0.000000001
})
function Toggle() {
    document.getElementById('first-list').classList.toggle("show");
}
document.getElementById('icon').addEventListener('click', Toggle);
