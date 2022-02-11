document.getElementById('inputpounds').addEventListener('input', (weightconverter) => {
    let lbs = weightconverter.target.value
    document.getElementById('outputkg').innerHTML = lbs / 2.2046
    document.getElementById('g1').innerHTML = lbs * 453.592
    document.getElementById('t1').innerHTML = lbs / 2205
    document.getElementById('kt').innerHTML = lbs / 2205000
})

function Toggle() {
    document.getElementById('first-list').classList.toggle("show");
}
document.getElementById('icon').addEventListener('click', Toggle);



// document.getElementById('inputgrams').addEventListener('input', (weightconverter1) => {
//     let gr = weightconverter1.target.value
//     document.getElementById('outputkg1').innerHTML = gr * 1000
// })

//document.getElementById('outputkg').style.visibility = 'hidden'
// document.getElementById('btn gyu').addEventListener('submit', (e) => {
//     //document.getElementById('outputkg').style.visibility = 'visible';

//     let lbs = e.target.value

//     document.getElementById('outputkg').innerHTML = lbs / 2.2046
// })