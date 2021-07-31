# Página promocional - Noticias y formularios de contáctos
_Proyecto en desarrollo_

## Construido con 🛠️

* JavaScript
* HTML
* CSS

### Librerías y frameworks
* [Bootstrap](https://getbootstrap.com/)
* [Jquery](https://jquery.com/)



### Post
_Data { object }_


```js
    const noticiaPost02 = {
        autor       : 'Lic. Rosa Almeida',
        fecha       : '25_5_2021',
        titulo      : 'Nota Dos',
        imgUrl      : 'images/image_2.jpg',
        copete      : 'Texto del copete de la Nota 2',
        link        : 'blog.html#',
        textoPpal   : 'Acá va el cuerpo del texto....',
        id          : 'not02'
    }
```
_Post constructor { class }_

_Post agregarUltimosPost (function)_

```js
    // inserta pos dentro de ID : #ultimosPost
    const agregarUltimosPost = ()=> {
        if(ultimosPost == null){
            console.warn(
                'ultimosPost(): no se encuentra ID')
        } else{
            newPost(noticiaPost01)
            newPost(noticiaPost02)
            newPost(noticiaPost03)
        }
    };
```





### Código reutilizable

_Con el objeto de aplicar el mismo código y no arrastrar errores estos JS cosntruyen un único elemento para todas las páginas._
```
bifurcador.js
footer.js
hesther.js
```

---
