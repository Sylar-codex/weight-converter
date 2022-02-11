document.getElementById('input-kt').addEventListener('input', (weightconverter3) => {
    let kt = weightconverter3.target.value
    document.getElementById('kt-g').innerHTML = kt * 1000000000
    document.getElementById('kt-lb').innerHTML = kt * 2204622.6219
    document.getElementById('kt-kg').innerHTML = kt * 1000000
    document.getElementById('kt-t').innerHTML = kt * 1000
})
function Toggle() {
    document.getElementById('first-list').classList.toggle("show");
}
document.getElementById('icon').addEventListener('click', Toggle)