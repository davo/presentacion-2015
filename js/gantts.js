function crearGantts(){
    var $gantEducation = '<table class="gantt-educacion"><thead><tr><th>Hitos</th><th>Ene</th><th>Feb</th><th>Mar</th><th>Abr</th><th>May</th><th>Jun</th><th>Jul</th><th>Ago</th><th>Sep</th><th>Oct</th><th>Nov</th><th>Dic</th></tr></thead><tbody><tr class="hitos"><th>Implementación Primer Año del Ciclo Básico</th><td></td><td></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td></tr><tr class="hitos"><th>Capacitación de 800 docentes</th><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td></td><td></td></tr><tr class="hitos"><th>Capacitación cargos directivos y conducción</th><td></td><td></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Piloto emprending</th><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td></td></tr><tr class="hitos"><th>Implementación de tecnología: KITs escolares: Impresoras 3D, arduino</th><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Utilización de aulas virtuales con contenidos acordes a la materia</th><td></td><td></td><td></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td></tr><tr class="hitos"><th>Implementación plataforma para programación</th><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td></tr></tbody></table>';
    var $gantAceleradoras = '<table class="gantt-aceleradoras"><thead><tr><th>Hitos</th><th>Ene</th><th>Feb</th><th>Mar</th><th>Abr</th><th>May</th><th>Jun</th><th>Jul</th><th>Ago</th><th>Sep</th><th>Oct</th><th>Nov</th><th>Dic</th></tr></thead><tbody><tr class="hitos"><th>Armado de Bases y Condiciones</th><td class="duracion"></td><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Convocatoria de actores</th><td></td><td></td><td class="duracion"></td><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Concurso y selección</th><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Asignación de Recursos</th><td></td><td></td><td></td><td class="duracion"></td><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Puesta en marcha</th><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td></td><td></td><td></td></tr></tbody></table>';
    var $gantBAWiFi = '<table class="gantt-bawifi"><thead><tr><th>Hitos</th><th>Ene</th><th>Feb</th><th>Mar</th><th>Abr</th><th>May</th><th>Jun</th><th>Jul</th><th>Ago</th><th>Sep</th><th>Oct</th><th>Nov</th><th>Dic</th><th>2015</th><th>Feb</th><th>Mar</th></tr></thead><tbody><tr class="hitos"><th>Relevamiento y análisis de demanda</th><td></td><td></td><td></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Conexión a centro comunitario</th><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Inicio actividades CIS <i>a la intemperie</i></th><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td></td></tr><tr class="hitos"><th>Construcción colectiva de contenidos</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td></td><td></td></tr><tr class="hitos"></tr></tbody></table>';
    var $gantBAID = '<table class="gantt-baid"><thead><tr><th>Hitos</th><th>Ene</th><th>Feb</th><th>Mar</th><th>Abr</th><th>May</th><th>Jun</th><th>Jul</th><th>Ago</th><th>Sep</th><th>Oct</th><th>Nov</th><th>Dic</th></tr></thead><tbody><tr class="hitos"><th>Lanzamiento</th><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>100 mil usuarios</th><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>500 mil usuarios</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Versión 2.0</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td><td></td></tr><tr class="hitos"><th>1 millón de usuarios</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td></tr></tbody></table>';
    var $gantBAMundo = '<table class="gantt-bamundo"><thead><tr><th>Hitos</th><th>Ene</th><th>Feb</th><th>Mar</th><th>Abr</th><th>May</th><th>Jun</th><th>Jul</th><th>Ago</th><th>Sep</th><th>Oct</th><th>Nov</th><th>Dic</th></tr></thead><tbody><tr class="hitos"><th>Diseño de la Plataforma</th><td></td><td></td><td class="duracion"></td><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Estrategia de Marketing</th><td></td><td></td><td></td><td></td><td class="duracion"></td><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Implementación y mantenimiento</th><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td class="duracion"></td><td></td><td></td><td></td><td></td></tr></tbody></table>';
    var $gantInclusion = '<table class="gantt-inclusion"><thead><tr><th>Hitos</th><th>Ene</th><th>Feb</th><th>Mar</th><th>Abr</th><th>May</th><th>Jun</th><th>Jul</th><th>Ago</th><th>Sep</th><th>Oct</th><th>Nov</th><th>Dic</th><th>2015</th><th>Feb</th><th>Mar</th><th>Abr</th><th>May</th><th>Jun</th></tr></thead><tbody><tr class="hitos"><th>Encuentro participativo comunitario con actores sociales estratégicos</th><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Encuentro participativo comunitario con actores sociales</th><td></td><td></td><td class="duracion"></td><td></td><td class="duracion"></td><td></td><td class="duracion"></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Mesa Interministerial CIS</th><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Diseño de programas y contenido</th><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Consolidación con actores sociales de programas y contenido</th><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td><td class="duracion"></td></tr><tr class="hitos"><th>Inauguración 1ra. Etapa</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Inauguración 2da. Etapa</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td></tr></tbody></table>';

    var $calendario = '<table><thead><tr><th>Hitos</th><th>Ene</th><th>Feb</th><th>Mar</th><th>Abr</th><th>May</th><th>Jun</th><th>Jul</th><th>Ago</th><th>Sep</th><th>Oct</th><th>Nov</th><th>Dic</th></tr></thead><tbody><tr class="hitos"><th>Hackaton</th><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Día del investigador científico</th><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Foro Urbano Mundial (Medellin)</th><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Tech Gobcamp</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Buenos Aires Creativa</th><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Gobcamp General</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Festival Digital + Feria de Ciencias</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Demo Day Silicon Valley </th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td></tr><tr class="hitos"><th>Desafiate (SocialLab)</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td></tr><tr class="hitos"><th>Festival Internacional de Diseño</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td></tr><tr class="hitos"><th>Dia del emprendedor</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td></tr><tr class="hitos"><th>InnovatiBa</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td></tr><tr class="hitos"><th>Noche Audiovisual</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td></tr><tr class="hitos"><th>Festival de Ideas</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td></tr><tr class="hitos"><th>Open Startups</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Innovation Fest</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Feria de Hacedores de Buenos Aires</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Festival de Innovación Social </th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td><td></td></tr><tr class="hitos"><th>Global Entrepreneurship Conference</th><td></td><td></td><td class="duracion"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="hitos"><th>Buenos Aires al Mundo</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="duracion"></td><td></td></tr></tbody></table>';

    $('.educacion').append($gantEducation);
    $('.aceleradoras').append($gantAceleradoras);
    $('.bawifi').append($gantBAWiFi);
    $('.baid').append($gantBAID);
    $('.bamundo').append($gantBAMundo);
    $('.inclusion').append($gantInclusion);
    $('.calendario').append($calendario);

}