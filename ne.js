let btn = document.querySelector('.btn.mt-4'); 
let insult = document.querySelector('.generate_OTP');

function random() {
    let numbers = [];
    for(let i = 0; i < 5; i++){
        let number = create_randomnumber();
        numbers.push(number);
    }
    return numbers.join('');
}

function create_randomnumber() {
    return Math.floor(Math.random() * 10);
}

let super_result = random(); 

btn.addEventListener('click', () => {
    insult.textContent = super_result;
});