// links data
console.log('Valor de cada pagina ',page)
const links = {
    home: { 
            url: 'index.html',
            page: 'home',
            textLink: 'Home',
            activo: ()=> {if (links.home.page == page){ return 'active'} else {return ''}
            }
        },
    about: { 
            url: 'about.html',
            page: 'about',
            textLink: 'Acerca',
            activo: ()=> {if (links.about.page == page){ return 'active'} else {return ''}
            }
        },
    course: { 
            url: 'course.html',
            page: 'course',
            textLink: 'Cursos',
            activo: ()=> {if (links.course.page == page){ return 'active'} else {return ''}
            },
            cursos: {
                UCDM1: {
                    url: 'cursoUCDM1.html',
                    page: 'UCDM1',
                    textLink: 'Un Curso de Milagros 1',
                    activo: ()=> {if (links.course.cursos.UCDM1.page == page){ return 'active'} else {return ''}
                    }
                },
                UCDM2: {
                    url: 'cursoUCDM2.html',
                    page: 'UCDM2',
                    textLink: 'Un Curso de Milagros Estudiantes avanzados',
                    activo: ()=> {if (links.course.cursos.UCDM2.page == page){ return 'active'} else {return ''}
                    }
                },
                NeuroNut: {
                    url: 'cursoNeuroNut.html',
                    page: 'NeuroNut',
                    textLink: 'Creando un Nuevo Sendero 1',
                    activo: ()=> {if (links.course.cursos.NeuroNut.page == page){ return 'active'} else {return ''}
                    }
                }
            }
        },
    instructor: { 
            url: 'instructor-details.html',
            page: 'instructor',
            textLink: 'acerca de Rosa',
            activo: ()=> {if (links.instructor.page == page){ return 'active'} else {return ''}
            }
        },  
    blog: { 
            url: 'blog.html',
            page: 'blog',
            textLink: 'Noticias',
            activo: ()=> {if (links.blog.page == page){ return 'active'} else {return ''}
            }
        },
    contact: { 
            url: 'contact.html',
            page: 'contact',
            textLink: 'Contactos',
            activo: ()=> {if (links.contact.page == page){ return 'active'} else {return ''}
            }
        }
}
// HTML Ref
const navBar = document.getElementById('navBar');
const footerPlace = $('footer')


// Crea la navBar
navBar.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div class="container">
            <a class="navbar-brand" href="${links.home.url}"><img id="navBarLogo" src="./images/150w/logoNeuroNut.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="oi oi-menu"></span> Menu
            </button>
            <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item ${links.home.activo()}"><a href="${links.home.url}" class="nav-link">${links.home.textLink}</a></li>
                <li id="cursos" class="nav-item ${links.course.activo()} dropdown">
                    <a  href="#" 
                        class="nav-link dropdown-toggle"
                        role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false"
                    >
                ${links.course.textLink}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="${links.course.url}">Todos nuestros cursos</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="${links.course.cursos.UCDM1.url}">
                ${links.course.cursos.UCDM1.textLink}
                </a>
                <a class="dropdown-item" href="${links.course.cursos.UCDM2.url}">
                ${links.course.cursos.UCDM2.textLink}
                </a>
                <a class="dropdown-item" href="${links.course.cursos.NeuroNut.url}">
                ${links.course.cursos.NeuroNut.textLink}
                </a>
                </div>
                </li>
                <li class="nav-item ${links.instructor.activo()}"><a href="${links.instructor.url}" class="nav-link">${links.instructor.textLink}</a></li>
                <li class="nav-item ${links.blog.activo()}"><a href="${links.blog.url}" class="nav-link">${links.blog.textLink}</a></li>
                <li class="nav-item ${links.contact.activo()}"><a href="${links.contact.url}" class="nav-link">${links.contact.textLink}</a></li>
                </ul>
                </div>
        </div>
    </nav>
    `;
        
        // console.log(links.course.cursos.UCDM1.page)
        // línea del boton about
        // <li class="nav-item ${links.about.activo()}"><a href="${links.about.url}" class="nav-link">${links.about.textLink}</a></li>

// ************ Footer ***************

const dateCopy = (new Date().getFullYear());
const createBy = {
    name: 'APSIS',
    url:  'https://apsis.com.ar'
};
const contactacData ={
    faceboock: 'https://web.facebook.com/roxy.dealmeida1',
    instagram: 'https://www.instagram.com/bioneuronutricion/',
    email:      'roxy.966@live.com.ar'
};


footerPlace.append(`
        <div class="container">
            <div class="row mb-5">
                <div class="col-md pt-5">
                    <div class="ftco-footer-widget pt-md-5 mb-4">
                        <h2 class="ftco-heading-2">Seguinos en nuestras redes</h2>
                        <p>En nuestras cuentas de las redes sociales vas a encontrar todas las novedades y respuestas a tus dudas.</p>
                        <ul class="ftco-footer-social list-unstyled float-md-left float-lft">
                            <li><a href="${contactacData.instagram}" target="_blank"><i class="fab fa-instagram fa-2x"></i></span></a></li>
                            <li><a href="${contactacData.faceboock}" target="_blank"><i class="fab fa-facebook-f fa-2x"></i></span></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-md pt-5">
                    <div class="ftco-footer-widget pt-md-5 mb-4">
                        <h2 class="ftco-heading-2">Nuestros Cursos</h2>
                        <ul class="list-unstyled">
                            <li><a href="${links.course.cursos.UCDM1.url}" class="py-2 d-block"     >${links.course.cursos.UCDM1.textLink}</a></li>
                            <li><a href="${links.course.cursos.UCDM2.url}" class="py-2 d-block"     >${links.course.cursos.UCDM2.textLink}</a></li>
                            <li><a href="${links.course.cursos.NeuroNut.url}" class="py-2 d-block"  >${links.course.cursos.NeuroNut.textLink}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md pt-5">
                    <div class="ftco-footer-widget pt-md-5 mb-4">
                        <h2 class="ftco-heading-2">Sigamos en contácto</h2>
                        <div class="block-23 mb-3">
                            <ul>
                                <li><i class="fas fa-map-marker-alt icon"></i><span class="text">Oldman 704, Loma Verde, Escobar, Buenos Aires, Argentina</span></li>
                                <li><a href="https://wa.me/5493484365955?text=Me%20interesa%20conocer%20más%20sobre%20los%20cursos"><i class="fab fa-whatsapp icon"></i><span class="text"> +54 9 3484 36-5955
                                            210</span></a></li>
                                <li><a href="mailto:${contactacData.email}"><span class="icon fa fa-paper-plane"></span><span
                                            class="text">${contactacData.email}</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                    <p>
                        Copyright &copy;<id="dateCopy">${dateCopy}</id=> All rights reserved |
                         This site is made by <a href="${createBy.url}"target="_blank">${createBy.name}</a>
                    </p>
                </div>
            </div>
        </div>
`);

footerPlace.addClass( "ftco-footer ftco-no-pt")