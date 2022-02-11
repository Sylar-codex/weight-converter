document.getElementById("inputkg").addEventListener('input', (weightconverter2) => {
    let kg = weightconverter2.target.value
    document.getElementById('kg-g').innerHTML = kg * 1000
    document.getElementById('kg-lb').innerHTML = kg * 2.20462
    document.getElementById('kg-t').innerHTML = kg * 0.001
    document.getElementById('kg-kt').innerHTML = kg * 0.000001
})

function Toggle() {
    document.getElementById('first-list').classList.toggle("show");
}
document.getElementById('icon').addEventListener('click', Toggle);
