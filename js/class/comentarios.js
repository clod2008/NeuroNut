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

//cursoEtudiadiado
const cursoTomado  = {
    UCDM1: {
        textLink: 'UCDM1',
        url: '../../cursoUCDM1.html'
    },
    UCDM2: {
        textLink: 'UCDM2',
        url: '../../cursoUCDM2.html'
    },
}
// comentario 01
const TESTIMONIO_NERINA ='La Experiencia de UCDM con Rosa marcó en mi vida un antes y un después. Me enseñó a ver las cosas de una manera más amplia, más sana. En los cursos aprendí a conocerme y mirar al otro desde un lugar diferente. La experiencia de Psicoterapia me ayudó a sanar temas muy profundos. Sigo tomando sus cursos, ya que considero que es un camino de ida como dicen... y hay mucho por recorrer... Cada encuentro es una bendición!! GRACIAS GRACIAS GRACIAS'
const comentario01 = new Comentario('Nerina Stevanelli',`<a href="${cursoTomado.UCDM1.url}" target="_self">Estudiante ${cursoTomado.UCDM1.textLink}</a>`,'active','images/person_1.jpg',TESTIMONIO_NERINA);
comentario01.crearComentario();
// comentario 02
const testimonioJorge = 'Cuando me dí la oportunidad de participar en las ediciones de UCDM dictado por Rosa De Almeida, permití que la vida me muestre el camino que vine a buscar, el mío, el que siempre sabía que existía en mi pero no podía encontrar. Mi camino de crecimiento. Aprendí a acrecentar mi nivel de consciencia, a transformar mi percepción de la realidad y la incorporación de las grandes lecciones que cambiarían mi propia vida.<br><br> '
const comentario02 = new Comentario('Jorge Tramontin',`<a href="${cursoTomado.UCDM1.url}" target="_self">Estudiante ${cursoTomado.UCDM1.textLink}</a>`,'false','images/person_2.jpg',testimonioJorge);
comentario02.crearComentario();
// comentario 03
const testimonioAndrea = '... Gracias a Dios, que todo lo resuelve en el momento justo, la Licenciada Rosa de Almeida, una querida amiga, comenzó́ a incursionar en el estudio de Un Curso de Milagros y luego de formarse comenzó a dictar cursos para compartir lo aprendido...<br><br><br>'
const comentario03 = new Comentario('Andrea Burden',`<a href="${cursoTomado.UCDM1.url}" target="_self">Estudiante ${cursoTomado.UCDM1.textLink}</a>`,'false','images/person_3.jpg',testimonioAndrea);
comentario03.crearComentario();
// comentario 04
const testimonioGisela = '...Agradecida eternamente a Rosa,  amiga, compañera, maestra,  a quien  pude y puedo ver transformándose constantemente. El despertar esta allí, y solo hay que darse la oportunidad de verlo, de conectar con el espíritu de los otros.   Intentare e intento vibrar con un total compromiso y con la elección de hacer un camino nuevo, perdonándome en  todo el viaje. Bendiciones a todos!!! <br><br> '
const comentario04 = new Comentario('Griselda Roldán',`<a href="${cursoTomado.UCDM1.url}" target="_self">Estudiante ${cursoTomado.UCDM1.textLink}</a>`,'false','images/person_4.jpg',testimonioGisela);
comentario04.crearComentario();

