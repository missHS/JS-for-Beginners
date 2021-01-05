let mySymbol = Symbol();

let person = {
    Name: "John",
    Age: 35,
    partTime: false
    };

let header = document.getElementById('message');
header.style.color = 'red';
showMessage(person.Age);



const button = document.getElementById('see-review');

button.addEventListener('click', function(){

    const review = document.getElementById('review');
    if(review.classList.contains('d-none')){
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW';
    }
    else{
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }
   


});

