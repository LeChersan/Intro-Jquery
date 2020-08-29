// [] corchete - arreglos o listas
// {} llaves - objetos o diccionario
let empleados = [
    {nombre: "Kira", app: "Chersan", email: "kira@mail.com", ph: 56789009, frase: "What we do in life ecos in eternity", puesto: "junior 1", img: "img/user.png"},    
    {nombre: "Simon", app: "Sanchez", email: "simon@mail.com", ph: 56789009, frase: "What we do in life ecos in eternity", puesto: "junior 1", img: "img/user.png"},    
    {nombre: "Milla", app: "Mendez", email: "milla@mail.com", ph: 56789009, frase: "What we do in life ecos in eternity", puesto: "junior 1", img: "img/user.png"},    
    {nombre: "Oliver", app: "O'brien", email: "oliver@mail.com", ph: 56789009, frase: "What we do in life ecos in eternity", puesto: "junior 1", img: "img/user.png"},    
    {nombre: "Marc", app: "Solis", email: "marc@mail.com", ph: 56789009, frase: "What we do in life ecos in eternity", puesto: "junior 1", img: "img/user.png"},    
    {nombre: "Gus", app: "Machado", email: "gus@mail.com", ph: 56789009, frase: "What we do in life ecos in eternity", puesto: "junior 1", img: "img/user.png"},    
]

// console.log(empleados[3].email)
// console.log(empleados[5].nombre)
// console.log(empleados)


for (let index = 0; index < empleados.length; index++) {
    
    let userCard = '<tr>'+
                        '<td>'+
                           '<img src="'+empleados[index].img+'" width="100px" alt="">'+
                        '</td>'+
                        '<td>'+
                            '<h3> '+empleados[index].nombre+'</h3>'+
                            '<p> '+empleados[index].puesto+'</p>'+
                            '<hr style="background-color:azure">'+
                            '<p> '+empleados[index].frase+'</p>'+
                        '</td>'+
                    '</tr>';
    // console.log(empleados[index].nombre)

    $('#contentUsers').append(userCard)
      
}

// #contentUsers