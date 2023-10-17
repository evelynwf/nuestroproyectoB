window.onload = function() {
    alert("¡Bienvenido a nuestro sitio web!");
};
 document.addEventListener('DOMContentLoaded', function() {

        let datosJSON = {
          emprendedoras: [
            {
              nombre: "Jorgelina Nuñez",
              funcion: "Novedades y links"
            },
            {
              nombre: "Evelyn Wagner Figueroa",
              funcion: "Cursos"
            },
            {
              nombre: "Lucila Soto",
              funcion: "Financiamiento"
            },
            {
              nombre: "Emilie Hernandez",
              funcion: "Acerca de"
            }
          ]
        };
      
        function agregarEmprendedorasDesdeJSON() {
          const listaEmprendedoras = document.getElementById('equipo-container');
          
          datosJSON.emprendedoras.forEach(empresaria => {
            const li = document.createElement('li');
            const h3 = document.createElement('h3');
            h3.textContent = empresaria.nombre;
            const p = document.createElement('p');
            p.textContent = empresaria.funcion;
        
            li.appendChild(h3);
            li.appendChild(p);
            listaEmprendedoras.appendChild(li);
          });
        }
        
        agregarEmprendedorasDesdeJSON();
    });
    

    document.addEventListener('DOMContentLoaded', function() {
        const formulario = document.getElementById('contacto-form');
    
        formulario.addEventListener('submit', function(event) {
            // Validar el nombre, el email y el mensaje
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();
    
            if (nombre === '' || email === '' || mensaje === '') {
                // Mostrar un mensaje de error si algún campo está vacío
                alert('Por favor, completa todos los campos.');
                event.preventDefault(); // Evitar que el formulario se envíe
            } else if (!isValidEmail(email)) {
                // Validar el formato del email
                alert('Por favor, ingresa un email válido.');
                event.preventDefault();
            }
        });
    
        // Función para validar el formato del email
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    });
    
