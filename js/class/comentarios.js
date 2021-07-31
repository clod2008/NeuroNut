// HTML Ref testimoniosDeAlumnos
const testimoniosDeAlumnos = document.querySelector('#testimoniosDeAlumnos')

class Comentario {

    nombre      = '';
    cargo       = '';
    active      = '';
    imgUrl      = '';
    comentario  = '';

    constructor(nombre = 'Sin nombre', cargo = 'Sin cargo', active = '', imgUrl = '', comentario = 'Sin comentario') {
       
        this.nombre = nombre;
        this.cargo = cargo;
        this.active = active;
        this.imgUrl = imgUrl;
        this.comentario = comentario;

    }

    crearComentario() {
        const testimonio = document.createElement('div');
        
        testimonio.innerHTML=(`
    
        <div class="testimony-wrap py-4">
            <div class="text">
                <p class="star">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </p>
                <p class="mb-4">${this.comentario}</p>
                <div class="d-flex align-items-center">
                    <div class="user-img" style="background-image: url(${this.imgUrl})"></div>
                    <div class="pl-3">
                        <p class="name">${this.nombre}</p>
                        <span class="position">${this.cargo}</span>
                    </div>
                </div>
            </div>
        </div>
        
        `);       
        testimoniosDeAlumnos.append(testimonio)
        testimonio.classList.add('carousel-item', `${this.active}`)
        
    }

}

// comentario 01
const comentario01 = new Comentario('Martin Maidana', 'Estudiante','active','images/person_1.jpg','Este sitio está Genial !!!!');
comentario01.crearComentario();
// comentario 02
const comentario02 = new Comentario('Claudio Uccello', 'CEO','false','images/person_2.jpg','Me encanta la claridad de la información');
comentario02.crearComentario();
// comentario 03
const comentario03 = new Comentario('Juan Pérez', '','false','images/person_3.jpg','UCDM me cambió la vida, Rosa es la majeor');
comentario03.crearComentario();
// comentario 04
const comentario04 = new Comentario('Horacio Cavac', 'Actor','false','images/person_4.jpg','Todo Genial');
comentario04.crearComentario();
