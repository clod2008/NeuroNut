const instructorCurso = document.querySelector('#instructorCurso');

const instructores = {
    rosaAlmeida: {
        id:             'ins_001',
        nombre:         'Lic. Rosa de Almeida',
        faceboockUrl:   'https://es-la.facebook.com/roxy.dealmeida1',
        iGUrl:          'https://www.instagram.com/bioneuronutricion/?hl=es',
        img:            '../../images/teacher-1.jpg'
    }
}


class Instructor {
    id =            '';
    nombre =        '';
    faceboockUrl =  '';
    iGUrl =         '';
    img =           '';
    
    constructor(id='Sin ID', nombre='Sin Nombre', faceboockUrl='Sin Faceboock', iGUrl='Sin IG', img='Sin Img'){
        this.id = id;
        this.nombre = nombre;
        this.faceboockUrl = faceboockUrl;
        this.iGUrl = iGUrl;
        this.img = img;
    }
    
    crearInstructor() {
        instructorCurso.innerHTML=(`
        <div class="img-wrap d-flex align-items-stretch col-12">
            <div class="img align-self-stretch d-flex align-items-end" style="background-image: url(images/teacher-1.jpg);">
                <div class="text mb-4 text-md-center">
                    <h3>${this.nombre}</h3>
                    <span class="position mb-2">Contacto</span>
                    <div class="faded">
                        <ul class="ftco-social">
                            <li><a href="${this.faceboockUrl}" target="_blank"><i class="fab fa-facebook-f "></i></a></li>
                            <li><a href="${this.iGUrl}" target="_blank"><i class="fab fa-instagram "></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    `);}

    }

    const newIstructor = (inst)=>{
        const instructor = new Instructor(inst.id,inst.nombre,inst.faceboockUrl,inst.iGUrl,inst.img);

        instructor.crearInstructor()

    };
    newIstructor(instructores.rosaAlmeida)
