document.addEventListener('DOMContentLoaded', function() {

    let datosJSON = {
      cursos: [
        {
          nombre: "Capacitar Argentina",
          imagen: "capacitarcursos.jpg",
          enlace: "https://www.argentina.gob.ar/produccion/capacitar"
        },
        {
          nombre: "Cumbre Neuquén Capital",
          imagen: "img3cursos.jpg",
          enlace: "https://cumbre.neuquen.gov.ar/cursos"
        },
        {
          nombre: "Municipalidad de Neuquén",
          imagen: "img2cursos.jpg",
          enlace: "https://web.muninqn.gov.ar/course/index.php?categoryid=3"
        },
        {
          nombre: "Academia BA",
          imagen: "img1cursos.jpg",
          enlace: "https://buenosaires.gob.ar/desarrolloeconomico/emprendedores/capacitacion-e-incubadoras/academia-ba-emprende"
        }
      ]
    };
  
    function agregarCursosDesdeJSON() {
      const listaCursos = document.getElementById('lista-cursos');
      
      datosJSON.cursos.forEach(curso => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = curso.imagen;
        img.alt = curso.nombre;
        const a = document.createElement('a');
        a.target = '_blank';
        a.href = curso.enlace;
        a.textContent = curso.nombre;
    
        li.appendChild(img);
        li.appendChild(a);
        listaCursos.appendChild(li);
      });
    }
    
    agregarCursosDesdeJSON();
  });
  