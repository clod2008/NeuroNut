const contUCDM1 = {
    imagenURL: 'images/3d-silhouette-man-with-arms-raised-against-sunset-ocean-landscape.jpg',
    url: 'cursoUCDM1.html',
    claim: 'Septiembre 2021',
    title: 'UN CURSO DE MILAGROS <br> NIVEL 1',
    instructor: 'LIC. ROSA DE ALMEIDA',
    id: 'UCDM1',
    precio: 3000,
    linkDePago: 'https://clod2008.github.io/NeuroNut/linkDePagoUCDM1.html',
    buttonId: 'linkPago-UCDM1',
    ariaDisabled: false,
    buttonDisable: ''
}

const contUCDM2 = {
    imagenURL: 'images/Blanco-y-negro.jpg',
    url: 'cursoUCDM2.html',
    claim: 'Superá tus límites',
    title: 'Un Curso de Milagros<br>Estudiantes avanzados',
    instructor: 'LIC. ROSA DE ALMEIDA',
    id: 'UCDM2',
    precio: 3500,
    linkDePago: 'https://clod2008.github.io/NeuroNut/linkDePagoUCDM2.html',
    buttonId: 'linkPago-UCDM2',
    ariaDisabled: false,
    buttonDisable: ''
}

const contNeuro = {
    imagenURL: 'images/2728.jpg',
    url: 'cursoNeuroNut.html',
    claim: 'Nuticion Mental',
    title: 'Bio Neuro Nutrición<br><br>',
    instructor: 'LIC. ROSA DE ALMEIDA',
    id: 'NeuroNut',
    precio: 'PRÓXIMAMANTE',
    linkDePago: 'https://clod2008.github.io/NeuroNut/linkDePagoUCDM1.html',
    buttonId: 'linkPago-NeuroNut',
    ariaDisabled: true,
    buttonDisable: 'disabled'
}


const   cursosVihgentes = document.getElementById('cursosVihgentes')


const crearCursoDestacado = (curso)=> {
    
    const place = document.getElementById(curso.id);

    
    place.innerHTML=(`<div class="project-wrap">
    <a href="${curso.url}" class="img" style="background-image: url(${curso.imagenURL});">
    <span class="price">${curso.claim}</span>
    </a>
        <div class="text p-4">
                <h3><a href="${curso.url}">${curso.title}</a></h3>
                <p class="advisor">Maestra de Dios<br>y Psicoterapeuta del Espíritu<br><span class="">${curso.instructor}</span></p>
                <ul class="d-flex justify-content-between">
                <li>Code: ${curso.id}</li>
                    <li class="price">$ ${curso.precio}</li>
                    </ul>
                    </div>
            <div class="d-flex justify-content-center align-items-center">
                <img class="mercadoPagoImg img-fluid col-4  mt-3 mb-3" src="./images/SVG/mercadoPagoCjaH.svg" alt="">
                <a href="${curso.linkDePago}" class="btn btn-primary ${curso.buttonDisable}" tabindex="-1" role="button" aria-disabled="${curso.ariaDisabled}" target="_blank">Pagar este curso</a>   
            </div> 
        </div>
        `);

    };
    
      
    const cusrsosDisponibles = (curso, col)=> {
        const   cursoItem = document.createElement('div');
        cursoItem.classList.add( `col-md-${col}`);
        cursoItem.innerHTML = (`<div class="project-wrap">
                                    <a href="${curso.url}" class="img" style="background-image: url(${curso.imagenURL});">
                                        <span class="price">${curso.claim}</span>
                                    </a>
                                    <div class="text p-4">
                                        <h3><a href="${curso.url}">${curso.title}</a></h3>
                                        <p class="advisor">Maestra de Dios<br>y Psicoterapeuta del Espíritu<br><span class="">${curso.instructor}</span></p>
                                        <ul class="d-flex justify-content-between">
                                            <li>Code: ${curso.id}</li>
                                            <li class="price">$ ${curso.precio}</li>
                                        </ul>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <img class="mercadoPagoImg img-fluid col-4 mt-3 mb-3" src="./images/SVG/mercadoPagoCjaH.svg" alt="">
                                        <a href="${curso.linkDePago}" class="btn btn-primary ${curso.buttonDisable}" tabindex="-1" role="button" aria-disabled="${curso.ariaDisabled}" target="_blank">Pagar este curso</a>
                                    </div> 
                                </div>
                                `);
        cursosVihgentes.append(cursoItem)

    }
    
