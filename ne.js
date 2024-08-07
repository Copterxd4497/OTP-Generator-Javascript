let btn = document.querySelector('.btn.mt-4'); 
let insult = document.querySelector('.generate_OTP');

function random() {
    let numbers = [];
    for(let i = 0; i < 5; i++){
        let number = create_randomnumber();
        numbers.push(number);
    }
    console.log(numbers);
    return numbers.join('');
}

function create_randomnumber() {
    return Math.floor(Math.random() * 10);
}

function display(){
    let super_result = random(); 
    insult.textContent = super_result;
}

btn.onclick = display;