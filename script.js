const form = document.querySelector('#form');
const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.form__btn');
disableButton()
inputs.forEach((input)=>{
    input.addEventListener('input',function(){
        const errorhtml = document.querySelector(`#${input.id}-error`)
        if (!input.validity.valid){
            const message = input.validationMessage
            errorhtml.innerHTML = message
            input.classList.add('input-error')
        }else{
            errorhtml.innerHTML = ''
            input.classList.remove('input-error')
        }
        disableButton()
    })

})
function disableButton(){
    const inputarr = Array.from(inputs)
    const isvalid = inputarr.every((input)=>input.validity.valid)
    button.disabled = !isvalid
}
$(document).ready(function () {
    $("#form").on("submit", function (event) {
      event.preventDefault(); 
   
      
      const data = {
        name: $("#name").val(),
        surname: $("#surname").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        text: $("#text").val(),
      };
   
      
      $.ajax({
        url: "https://private-9d5e37a-testassignment.apiary-mock.com/send-form", 
        type: "post",
        data: data,
        success: function (response) {
          
          alert("Данные успешно отправлены!");
        },
        error: function (error) {
          
          alert(`Ошибка при отправке данных: ${error} `);
        },
      });
    });
  });