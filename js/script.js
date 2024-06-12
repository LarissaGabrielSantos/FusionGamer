/*let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},4000)


function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}
*/
//pagamento

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    const name = document.getElementById('name').value;
    const cardNumber = document.getElementById('card-number').value;
    const validDate = document.getElementById('valid-date').value;
    const cvv = document.getElementById('cvv').value;

    console.log('Payment Method:', paymentMethod);
    console.log('Name:', name);
    console.log('Card Number:', cardNumber);
    console.log('Valid Date:', validDate);
    console.log('CVV:', cvv);

    alert('Pagamento efetuado com sucesso! Retorne a página inicial');
});

