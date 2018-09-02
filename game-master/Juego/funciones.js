var Caracteristica = ["EFICIENCIA DE DESEMPEÑO","COMPATIBILIDAD","USABILIDAD","FIABILIDAD","SEGURIDAD","MANTENIBILIDAD","PORTABILIDAD"];

var defCaracteristica = ["Esta característica representa el desempeño relativo a la cantidad de recursos utilizados bajo determinadas condiciones.",
                    "Capacidad de dos o más sistemas o componentes para intercambiar información y/o llevar a cabo sus funciones requeridas cuando comparten el mismo entorno hardware o software.",
                    "Capacidad del producto software para ser entendido, aprendido, usado y resultar atractivo para el usuario, cuando se usa bajo determinadas condiciones.",
                    "Capacidad de un sistema o componente para desempeñar  las funciones especificadas, cuando se usa bajo unas condiciones y periodo de tiempo determinados.",
                    "Capacidad de protección de la información y los datos de manera que personas o sistemas no autorizados no puedan leerlos o modificarlos.",
                    "Esta característica representa la capacidad del producto software para ser modificado efectiva y eficientemente, debido a necesidades evolutivas, correctivas o perfectivas.",
                    "Capacidad del producto o componente de ser transferido de forma efectiva y eficiente de un entorno hardware, software, operacional o de utilización a otro."];

var subCaracteristica = ["Completitud funcional","Corrección funcional","Pertinencia funcional","Comportamiento temporal","Utilización de recursos",
                        "Capacidad","Coexistencia","Interoperabilidad","Capacidad para reconocer su adecuación","Capacidad de aprendizaje",
                        "Capacidad para ser usado","Protección contra errores de usuario","Estética de la interfaz de usuario","Accesibilidad",
                        "Madurez","Disponibilidad","Tolerancia a fallos","Capacidad de recuperación","Confidencialidad","Integridad",
                        "No repudio","Responsabilidad","Autenticidad","Modularidad","Reusabilidad","Analizabilidad","Capacidad para ser modificado",
                        "Capacidad para ser probado","Adaptabilidad","Capacidad para ser instalado","Capacidad para ser reemplazado"];

var defSubCaracteristica = []                

function obtenerCaracteristica() {
    document.getElementById("caracteristica").innerHTML = Caracteristica[0];
    document.getElementById("definicion").innerHTML = defCaracteristica[0];
}