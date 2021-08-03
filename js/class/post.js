
// HTML Ref ultimosPost
const ultimosPost = document.querySelector('#ultimosPost');
// HTML Ref todosLosPost
const todosLosPost = document.querySelector('#todosLosPost');



const noticiaPost01 = {
    autor       : 'Claudio Uccello',
    fecha       : '25_7_2021',
    titulo      : 'Nota Uno',
    imgUrl      : 'images/image_1.jpg',
    copete      : 'Texto del copete de la Nota 1',
    link        : 'blog.html#',
    textoPpal   : 'Acá va el cuerpo del texto de la nota, esta información aparece cuando el usuario presiona el botón de "Saber Más".',
    id          : 'not01'
}

const noticiaPost02 = {
    autor       : 'Lic. Rosa Almeida',
    fecha       : '25_5_2021',
    titulo      : 'Nota Dos',
    imgUrl      : 'images/image_2.jpg',
    copete      : 'La extensión del copete debe de tener entre 65 y  caracteres con espacios (2 líneas) y 126 caracteres con espacios (4 líneas)',
    link        : 'blog.html#',
    textoPpal   : 'Acá va el cuerpo del texto de la nota, esta información aparece cuando el usuario presiona el botón de "Saber Más".',
    id          : 'not02'
}

const noticiaPost03 = {
    autor       : 'Martín Maidana',
    fecha       : '13_7_2021',
    titulo      : 'Nota Tres',
    imgUrl      : 'images/image_3.jpg',
    copete      : 'Texto del copete de la Nota 3',
    link        : 'blog.html#',
    textoPpal   : 'Acá va el cuerpo del texto de la nota, esta información aparece cuando el usuario presiona el botón de "Saber Más".',
    id          : 'not03'
}

class Post {

    id          = '';
    autor       = '';
    fecha       = '';
    titulo      = '';
    imgUrl      = '';
    copete      = '';
    link        = '';


    constructor(id = 'Sin Id', autor = 'Sin Autor', fecha = 'Sin Fecha', titulo = 'Sin Título', imgUrl = 'Sin Imagen', copete = 'Sin Copete', link = 'Sin Link'){

        this.id = id;
        this.autor = autor;
        this.fecha = fecha;
        this.titulo = titulo;
        this.imgUrl = imgUrl;
        this.copete = copete;
        this.link = link+id;

        }

        crearPost() {
            const post = document.createElement('div');

            post.innerHTML=(`
            
            
                <div name="${ this.id}" class="blog-entry">
                    <a href="${this.link}" class="block-20"
                        style="background-image: url('${this.imgUrl}');">
                    </a>
                    <div class="text d-block">
                        <div class="meta">
                            <p>
                                <a><span class="fa fa-calendar mr-2"></span>${this.fecha}</a>
                                <a><span class="fa fa-user ml-2"></span><span class="ml-2">${this.autor}</span></a>
                            </p>
                        </div>
                        <h3 class="heading"><a>${this.titulo}</a></h3>
                        <p>${this.copete}</p>
                        <p><a href="${this.link}" class="saberMas">Saber Más --></a></p>
                    </div>
                </div>
            

        `);
        post.classList.add('col-md-4', 'card',)
        ultimosPost.append(post);
        ultimosPost.classList.add('row', 'd-flex',)
    
    }   
}



class PostCompleto {

    id          = '';
    autor       = '';
    fecha       = '';
    titulo      = '';
    imgUrl      = '';
    copete      = '';
    link        = '';
    textoPpal   = '';


    constructor( id = 'Sin id', autor = 'Sin Autor', fecha = 'Sin Fecha', titulo = 'Sin Título', imgUrl = 'Sin Imagen', copete = 'Sin Copete', link = 'Sin Link', textoPpal = 'Sin Texto Prinsipal'){

        this.id =  id;
        this.autor = autor;
        this.fecha = fecha;
        this.titulo = titulo;
        this.imgUrl = imgUrl;
        this.copete = copete;
        this.link = link+id;
        this.textoPpal = textoPpal;

        }

        crearPost() {
            const post = document.createElement('div');
            console.log(this.id)

            post.innerHTML=(`
            

            <div name="${this.id}" class="blog-entry col-md-4">
                <a href="${this.link}" class="block-20"
                    style="background-image: url('${this.imgUrl}');">
                </a>
                <div class="text d-block">
                    <div class="meta">
                        <p>
                            <a><span class="fa fa-calendar mr-2"></span>${this.fecha}</a>
                            <a><span class="fa fa-user ml-2"></span><span class="ml-2">${this.autor}</span></a>
                        </p>
                    </div>
                    <h3 class="heading"><a>${this.titulo}</a></h3>
                    <p>${this.copete}</p>
                    <p><a href="${this.link}" class="btn btn-secondary py-2 px-3">Saber Más</a></p>
                </div>
            </div>
            <div class="col-md-8 staff-detail">
                <h3>${this.titulo}</h3>
                <p>${this.textoPpal}</p>
            </div>
            
 
                
            

        `);
        post.classList.add('col-md-12', 'row', 'postContenedor')
        todosLosPost.append(post);
        todosLosPost.classList.add('row', 'd-flex',)
    
    }   
}

const newPost = (noticia)=> {
      const post = new Post(`${noticia.id}`,
                            `${noticia.autor}`, 
                            `${noticia.fecha}`,    
                            `${noticia.titulo}`,
                            `${noticia.imgUrl}`,
                            `${noticia.copete}`,
                            `${noticia.link}`);
    
    post.crearPost()          
}

const newPostCompleto = (noticia)=> {
    const post = new PostCompleto
                         (`${noticia.id}`,
                          `${noticia.autor}`, 
                          `${noticia.fecha}`,    
                          `${noticia.titulo}`,
                          `${noticia.imgUrl}`,
                          `${noticia.copete}`,
                          `${noticia.link}`,
                          `${noticia.textoPpal}`);
  
  post.crearPost()          
}





// inserta pos dentro de ID : #ultimosPost
const agregarUltimosPost = ()=> {
    if(ultimosPost == null){
        console.warn('ultimosPost(): no se encuentra ID')
    } else{
        newPost(noticiaPost01)
        newPost(noticiaPost02)
        newPost(noticiaPost03)
    }
};

const agregarTodosLosPost = ()=> {
    if(todosLosPost == null){
        console.warn('ultimosPost(): no se encuentra ID')
    } else{
        newPostCompleto(noticiaPost03)
        newPostCompleto(noticiaPost02)
        newPostCompleto(noticiaPost01)
    }
};



agregarUltimosPost()
agregarTodosLosPost()