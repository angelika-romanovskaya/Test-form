const express = require("express");
const cors = require("cors");
const bp = require('body-parser');
const app = express();

const Validation = require('./validation.js');
let validations = new Validation();
const port = 9090;

app.use(cors());
app.use(bp.json())

app.post("/api/registration", (req, res) => {
  if (Math.random() > 0.5) {
    res.statusCode = 400;

    setTimeout(() => {
      res.send({
        status: "error",
        message: "Bad request",
      });
    }, Math.random() * 1000);

    return;
  }

  setTimeout(() => {
    res.statusCode = 200;
    res.send({
      status: "success",
      message: "You are registered",
    });
  }, Math.random() * 1000);
});

app.get("/api/ping", (req, res) => {
    res.statusCode = 200;
    res.send({
        status: "success",
        message: "Server is ready",
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/api/form", (req, res) => {
    let data = req.body;
    let error = {};
    let arr = validations.check(data.name, data.email, data.phone, data.massage);

    if(arr.length > 0){
        arr.forEach(element => {
            error[element.toString()]= "Поле не должно быть пустым"
        });
        if(data.email !== ""){
            if(validations.email(data.email) === false){
                error.email = "Некорректный ввод email"
            }
        }
    } else{
        if(validations.email(data.email) === false){
            error.email = "Некорректный ввод email"
        }
    }

    if(Object.keys(error).length !== 0){
        res.statusCode = 400;
        res.send({
            "status": "error",
            "fields": JSON.stringify(error)
        });
    } else{
        res.statusCode = 200;
        res.send({
            "status": "success",
            "msg": "Ваша заявка успешно отправлена"
        });
    }
});