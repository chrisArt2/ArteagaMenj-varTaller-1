
 //Entrada de datos
 let usuario = prompt("Ingrese que tipo de usuario es:  \n 1. Estudiante \n 2. Docente  \n 3.Particular  \n (solo la parte númerica 1-3)", '');

 usuario = Number(usuario);


 switch (usuario) {
    case 1:
        let seleccionLibro = prompt("Usted es estudiante con carnet estos son los libros a prestar: \n \n1. Los libros de ciencias básicas y tecnología se prestan por tres días \n2. Las tesis se prestan por quince días \n3. Las obras literarias por una semana \n4. Los demás tipos por dos días \n \nEscoga su categoría (parte numérica del 1 al 4)", '' );

        seleccionLibro = Number(seleccionLibro);

        switch (seleccionLibro) {
            case 1:
                alert("Usted escogió el libro de ciencia y tecnología");
                document.write("<div class='centrar-tabla'><table class='table'><tr class='encabezado'><td class='titulos'>Tipo de Libro</td><td>Tipo de usuario</td><td>Fecha de devolución</td></tr><tr class='encabezado2'><td class='titulos2'>Ciencia y tecnología</td><td>Estudiante con carnet</td><td>En 3 días</td></tr></table></div>");
                break;
            case 2:
                document.write("<div class='centrar-tabla'><table class='table'><tr class='encabezado'><td class='titulos'>Tipo de Libro</td><td>Tipo de usuario</td><td>Fecha de devolución</td></tr><tr class='encabezado2'><td class='titulos2'>Tesis</td><td>Estudiante con carnet</td><td>En 15 días</td></tr></table></div>");
            break;
            case 3:
                document.write("<div class='centrar-tabla'><table class='table'><tr class='encabezado'><td class='titulos'>Tipo de Libro</td><td>Tipo de usuario</td><td>Fecha de devolución</td></tr><tr class='encabezado2'><td class='titulos2'>Obras Literarias</td><td>Estudiante con carnet</td><td>En 1 semana</td></tr></table></div>");
            break;
            
            case 4:
                document.write("<div class='centrar-tabla'><table class='table'><tr class='encabezado'><td class='titulos'>Tipo de Libro</td><td>Tipo de usuario</td><td>Fecha de devolución</td></tr><tr class='encabezado2'><td class='titulos2'>Otro género</td><td>Estudiante con carnet</td><td>En 2 días</td></tr></table></div>");
            break;

        }
        break;
    case 2:
            let seleccionLibro2 = prompt("Usted es docente con carnet estos son los libros a prestar: \n \n1. Los libros de ciencias básicas y tecnología se prestan por 6 días \n2. Las tesis se prestan por 1 mes \n3. Las obras literarias por 2 semana \n4. Los demás tipos por 4 días \n \nEscoga su categoría (parte numérica del 1 al 4)", '' );

            seleccionLibro2 = Number(seleccionLibro2);

        switch (seleccionLibro2) {
            case 1:
                alert("Usted escogió el libro de ciencia y tecnología");
                document.write("<div class='centrar-tabla'><table class='table'><tr class='encabezado'><td class='titulos'>Tipo de Libro</td><td>Tipo de usuario</td><td>Fecha de devolución</td></tr><tr class='encabezado2'><td class='titulos2'>Ciencia y tecnología</td><td>Docente con carnet</td><td>En 6 días</td></tr></table></div>");
                break;
            case 2:
                document.write("<div class='centrar-tabla'><table class='table'><tr class='encabezado'><td class='titulos'>Tipo de Libro</td><td>Tipo de usuario</td><td>Fecha de devolución</td></tr><tr class='encabezado2'><td class='titulos2'>Tesis</td><td>Docente con carnet</td><td>En 1 mes</td></tr></table></div>");
                break;
            case 3:
                document.write("<div class='centrar-tabla'><table class='table'><tr class='encabezado'><td class='titulos'>Tipo de Libro</td><td>Tipo de usuario</td><td>Fecha de devolución</td></tr><tr class='encabezado2'><td class='titulos2'>Obras Literarias</td><td>Docente con carnet</td><td>En 2 semanas</td></tr></table></div>");
                break;
            case 4:
                document.write("<div class='centrar-tabla'><table class='table'><tr class='encabezado'><td class='titulos'>Tipo de Libro</td><td>Tipo de usuario</td><td>Fecha de devolución</td></tr><tr class='encabezado2'><td class='titulos2'>Otro género</td><td>Estudiante con carnet</td><td>En 4 días</td></tr></table></div>");
                break;
            default:
                break;
        }
        case 3:
        let seleccionLibro3 = prompt("Usted es r sin carnet estos son los libros a prestar: \n \n1. Los libros de ciencias básicas y tecnología se prestan por 3 días \n2. Las tesis se prestan por 15 días \n3. Las obras literarias por 1 semana \n4. Los demás tipos por 2 días \n \nEscoga su categoría (parte numérica del 1 al 4)", '' );

        seleccionLibro3 = Number(seleccionLibro3);

        switch (seleccionLibro3) {
            case 1:
                alert("Usted escogió el libro de ciencia y tecnología");
                document.write("<div class='centrar-tabla'><table class='table'><tr class='encabezado'><td class='titulos'>Tipo de Libro</td><td>Tipo de usuario</td><td>Fecha de devolución</td></tr><tr class='encabezado2'><td class='titulos2'>Ciencia y tecnología</td><td>Estudiante con carnet</td><td>En 3 días</td></tr></table></div>");
                break;
            case 2:
                document.write("<div class='centrar-tabla'><table class='table'><tr class='encabezado'><td class='titulos'>Tipo de Libro</td><td>Tipo de usuario</td><td>Fecha de devolución</td></tr><tr class='encabezado2'><td class='titulos2'>Tesis</td><td>Estudiante con carnet</td><td>En 15 días</td></tr></table></div>");
            break;
            case 3:
                document.write("<div class='centrar-tabla'><table class='table'><tr class='encabezado'><td class='titulos'>Tipo de Libro</td><td>Tipo de usuario</td><td>Fecha de devolución</td></tr><tr class='encabezado2'><td class='titulos2'>Obras Literarias</td><td>Estudiante con carnet</td><td>En 1 semana</td></tr></table></div>");
            break;
            
            case 4:
                document.write("<div class='centrar-tabla'><table class='table'><tr class='encabezado'><td class='titulos'>Tipo de Libro</td><td>Tipo de usuario</td><td>Fecha de devolución</td></tr><tr class='encabezado2'><td class='titulos2'>Otro género</td><td>Estudiante con carnet</td><td>En 2 días</td></tr></table></div>");
            break;     
        
        }
 }

