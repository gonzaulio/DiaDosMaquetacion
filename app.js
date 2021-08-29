let usuarios = [];

let nuevousuario0 = {}
    nuevousuario0 = { "Nombre" : "Carolina", "Correo": "prueba0@gmail.com", "Numero": 678547242, "Destino": "Canarias"}
    usuarios.push(nuevousuario0);

let nuevousuario1 = {}
    nuevousuario1 = { "Nombre" : "Alejandro", "Correo": "Ale@gmail.com", "Numero": 644900994, "Destino": "Mayorca"}
    usuarios.push(nuevousuario1);

let nuevousuario2 = {}
    nuevousuario2 = { "Nombre" : "Julio", "Correo": "gonzo@gmail.com", "Numero": 644900458, "Destino": "Galicia"}
    usuarios.push(nuevousuario2);

function nuevoUsuario() {
    let nuevousuario = {}
    
    nuevousuario = { "Nombre" : document.getElementById("nombre").value, "Correo": document.getElementById("correo").value, "Numero": document.getElementById("numero").value, "Destino": document.getElementById("destino").value}
    usuarios.push(nuevousuario);
    console.log(usuarios);
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("destino").value = "";
}

function mostrarResultado() {

    if (document.getElementById("radio1").checked == true) {
        for (let index = 0; index < usuarios.length; index++) {
            if (usuarios[index].Destino == "Canarias") {
                console.log(usuarios[index]);
            }
        }
    }
    else if (document.getElementById("radio2").checked == true) {
        for (let index = 0; index < usuarios.length; index++) {
            if (usuarios[index].Destino == "Mayorca") {
                console.log(usuarios[index]);
            }
        }
    }
    else if (document.getElementById("radio3").checked == true) {
        for (let index = 0; index < usuarios.length; index++) {
            if (usuarios[index].Destino == "Galicia") {
                console.log(usuarios[index]);
            }
        }
    }
}
