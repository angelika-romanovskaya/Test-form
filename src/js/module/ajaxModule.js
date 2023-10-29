export const request = new XMLHttpRequest();

let form = document.querySelector(".form");
let msgGood = document.querySelector(".msgGood")

request.addEventListener("load", () => {
       if (request.status === 200) {
            form.reset();
            msgGood.innerHTML = `${request.response.msg}`
       } else{
         let objError = JSON.parse(request.response.fields)
           let error = Object.keys(JSON.parse(request.response.fields));
           console.log(objError)
           error.forEach(element => {
                let elem = document.querySelector(`[name = ${element}]`);
                let msg = elem.nextElementSibling;
                msg.innerHTML = `${objError[element]}`
                elem.classList.add('remove');
           });
           msgGood.innerHTML = `Ошибка отправки`
       }
});
