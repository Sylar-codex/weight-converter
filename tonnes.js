document.getElementById('input-t').addEventListener('input', (weightconverter3) => {
    let t = weightconverter3.target.value
    document.getElementById('t-g').innerHTML = t * 1000000
    document.getElementById('t-lb').innerHTML = t * 2204.62
    document.getElementById('t-kg').innerHTML = t * 1000
    document.getElementById('t-kt').innerHTML = t * 0.001
})
function Toggle() {
    document.getElementById('first-list').classList.toggle("show");
}
document.getElementById('icon').addEventListener('click', Toggle);
