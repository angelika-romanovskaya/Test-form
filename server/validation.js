module.exports = class ValidationClass{
    email = function(email){
        let emailCheck = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(email);
        return emailCheck;
    }

    check = function(name, email, phone, massage){
        let array = new Array();
        if(name === ""){
            array.push("name");
        }
        if(email === ""){
            array.push("email");
        }
        if(phone === ""){
            array.push("phone");
        }
        if(massage === ""){
            array.push("massage");
        }
        return array;
    }
}

