import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.page.html',
  styleUrls: ['./materiales.page.scss'],
})
export class MaterialesPage implements OnInit {

  materiales = [
    {
      nombre: "Crédito",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/2.png"
    },
    {
      nombre: "Combustible",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/201.png"
    },
    {
      nombre: "Noticias del viaje",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/211.png"
    },
    {
      nombre: "Registro de aventuras",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/212.png"
    },
    {
      nombre: "Guía del espíritu viajero",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/213.png"
    },
    {
      nombre: "Éter disperso",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/221.png"
    },
    {
      nombre: "Éter condensado",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/222.png"
    },
    {
      nombre: "Éter refinado",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/223.png"
    },
    {
      nombre: "Polvo luminoso perdido",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/231.png"
    },
    {
      nombre: "Fragmento dorado perdido",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/232.png"
    },
    {
      nombre: "Cristal perdido",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/233.png"
    },
    {
      nombre: "Esencia perdida",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/234.png"
    },
    {
      nombre: "Restos de artefacto",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/235.png"
    },
    {
      nombre: "Resina automodelante",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/236.png"
    },
    {
      nombre: "Huellas del destino",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/241.png"
    },
    {
      nombre: "Resplandor luminoso",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/261.png"
    },
    {
      nombre: "Bono de Herta",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/503.png"
    },
    {
      nombre: "Lágrima de los sueños",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110101.png"
    },
    {
      nombre: "Espada rota",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110111.png"
    },
    {
      nombre: "Espada inerte",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110112.png"
    },
    {
      nombre: "Espada rompemundos",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110113.png"
    },
    {
      nombre: "Flecha del cazabestias",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110121.png"
    },
    {
      nombre: "Flecha del matademonios",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110122.png"
    },
    {
      nombre: "Flecha del persigueestrellas",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110123.png"
    },
    {
      nombre: "Llave de la inspiración",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110131.png"
    },
    {
      nombre: "Llave del conocimiento",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110132.png"
    },
    {
      nombre: "Llave de la sabiduría",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110133.png"
    },
    {
      nombre: "Persistencia del bronce",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110141.png"
    },
    {
      nombre: "Juramento de acero",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110142.png"
    },
    {
      nombre: "Custodia de ámbar",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110143.png"
    },
    {
      nombre: "Obsidiana lúgubre",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110151.png"
    },
    {
      nombre: "Obsidiana del vacío",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110152.png"
    },
    {
      nombre: "Obsidiana de la obsesión",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110153.png"
    },
    {
      nombre: "Melodía armónica",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110161.png"
    },
    {
      nombre: "Himno del acervo",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110162.png"
    },
    {
      nombre: "Opus Stellaris",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110163.png"
    },
    {
      nombre: "Semilla de la abundancia",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110171.png"
    },
    {
      nombre: "Brote de la vida",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110172.png"
    },
    {
      nombre: "Flor de la eternidad",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110173.png"
    },
    {
      nombre: "Canino de borisin",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110181.png"
    },
    {
      nombre: "Diente serrado con lupitoxina",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110182.png"
    },
    {
      nombre: "Colmillo de la locura lunar",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110183.png"
    },
    {
      nombre: "Espíritu ardiente",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110221.png"
    },
    {
      nombre: "Esencia de fuego estelar",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110222.png"
    },
    {
      nombre: "Incinerador divino",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110223.png"
    },
    {
      nombre: "Nota del firmamento",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110231.png"
    },
    {
      nombre: "Compás celestial",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110232.png"
    },
    {
      nombre: "Movimiento celestial",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110233.png"
    },
    {
      nombre: "Ectoestela profunda",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110400.png"
    },
    {
      nombre: "Dientes rotos del huargo férreo",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110401.png"
    },
    {
      nombre: "Quitina endoterma",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110402.png"
    },
    {
      nombre: "Cuerno de nieve",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110403.png"
    },
    {
      nombre: "Corona de rayos de la sombra del pasado",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110404.png"
    },
    {
      nombre: "Ojo del vendaval",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110405.png"
    },
    {
      nombre: "Hierro forjado del Vacío",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110406.png"
    },
    {
      nombre: "Corona dorada de la sombra del pasado",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110407.png"
    },
    {
      nombre: "Pase del inframundo",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110411.png"
    },
    {
      nombre: "Hoja de acero sobrecalentado",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110412.png"
    },
    {
      nombre: "Quitina gélida",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110413.png"
    },
    {
      nombre: "Báculo del Cambiaformas",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110414.png"
    },
    {
      nombre: "Vestigios elevados",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110415.png"
    },
    {
      nombre: "Clavo del simio",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110416.png"
    },
    {
      nombre: "Edicto de la contención",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110417.png"
    },
    {
      nombre: "Nevera de sueños",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110423.png"
    },
    {
      nombre: "Soplete de ensueño",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110426.png"
    },
    {
      nombre: "Senda final del destructor",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110501.png"
    },
    {
      nombre: "Lamento de la Guardiana",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110502.png"
    },
    {
      nombre: "Arrepentimiento del eterno vehículo del alma",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110503.png"
    },
    {
      nombre: "Agravios pasados de la catástrofe devoraplanetas",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/110504.png"
    },
    {
      nombre: "Núcleo apagado",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/111001.png"
    },
    {
      nombre: "Núcleo reluciente",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/111002.png"
    },
    {
      nombre: "Núcleo serpenteante",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/111003.png"
    },
    {
      nombre: "Instinto del ladrón",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/111011.png"
    },
    {
      nombre: "Ambición distorsionada",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/111012.png"
    },
    {
      nombre: "Voluntad de conquista",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/111013.png"
    },
    {
      nombre: "Pin del guardia",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/112001.png"
    },
    {
      nombre: "Insignia del guardia",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/112002.png"
    },
    {
      nombre: "Medalla del guardia",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/112003.png"
    },
    {
      nombre: "Componente antiguo",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/112011.png"
    },
    {
      nombre: "Eje antiguo",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/112012.png"
    },
    {
      nombre: "Motor antiguo",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/112013.png"
    },
    {
      nombre: "Brote verde inmortal",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/113001.png"
    },
    {
      nombre: "Flor etérea inmortal",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/113002.png"
    },
    {
      nombre: "Rama gloriosa inmortal",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/113003.png"
    },
    {
      nombre: "Componente artificial mecánico",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/113011.png"
    },
    {
      nombre: "Engranaje cilíndrico mecánico",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/113012.png"
    },
    {
      nombre: "Corazón armonioso mecánico",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/113013.png"
    },
    {
      nombre: "Componente del acumulador de sueños",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/114001.png"
    },
    {
      nombre: "Válvula del flujo de sueños",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/114002.png"
    },
    {
      nombre: "Motor creasueños",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/114003.png"
    },
    {
      nombre: "Jirones de pensamientos",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/114011.png"
    },
    {
      nombre: "Fragmentos de impresiones",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/114012.png"
    },
    {
      nombre: "Fragmentos de deseos",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/114013.png"
    },
    {
      nombre: "Hertareum",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/120000.png"
    },
    {
      nombre: "Escudo",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/120001.png"
    },
    {
      nombre: "Saeta",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/120002.png"
    },
    {
      nombre: "Relocréditos",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/120003.png"
    },
    {
      nombre: "Nuevo té Mezcla de Tingyun",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/140278.png"
    },
    {
      nombre: "Salteado de tripas de ternera en aceite picante",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/140279.png"
    },
    {
      nombre: "Agua sólida",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/180001.png"
    },
    {
      nombre: "Ingredientes básicos",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/180002.png"
    },
    {
      nombre: "Flogisto",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/180004.png"
    },
    {
      nombre: "Metal",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/180005.png"
    },
    {
      nombre: "Líquido gaseoso",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/180006.png"
    },
    {
      nombre: "Semilla",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/180007.png"
    },
    {
      nombre: "Componentes mecánicos abandonados",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/180008.png"
    },
    {
      nombre: "Cosecha tan alta como una persona",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/180009.png"
    },
    {
      nombre: "Tranquilidad",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/180010.png"
    },
    {
      nombre: "Sueños rotos",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/180011.png"
    },
    {
      nombre: "Engranaje oxidado",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/180012.png"
    },
    {
      nombre: "Componente",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/181001.png"
    },
    {
      nombre: "Partícula virtual",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/181002.png"
    },
    {
      nombre: "Arroz proteico",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/181003.png"
    },
    {
      nombre: "Pluma del fuego",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/181004.png"
    },
    {
      nombre: "Núcleo de hielo",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/181005.png"
    },
    {
      nombre: "Ojo del rayo",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/181006.png"
    },
    {
      nombre: "Remolino de viento",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/181007.png"
    },
    {
      nombre: "Ondas cuánticas",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/181008.png"
    },
    {
      nombre: "Hoja imaginaria",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/181009.png"
    },
    {
      nombre: "Aleación de meteorito",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/181010.png"
    },
    {
      nombre: "Unidad de ábaco de jade",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/181011.png"
    },
    {
      nombre: "Extracto de hierbas medicinales",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/181012.png"
    },
    {
      nombre: "Tian dong",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/181013.png"
    },
    {
      nombre: "Confusión",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/181014.png"
    },
    {
      nombre: "Hambre",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/181015.png"
    },
    {
      nombre: "Muela vieja",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/181016.png"
    },
    {
      nombre: "Materia extraña de la Destrucción",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/182001.png"
    },
    {
      nombre: "Ámbar gris de la Abundancia",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/182002.png"
    },
    {
      nombre: "Piedra de la Cacería",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/182003.png"
    },
    {
      nombre: "Materiales de construcción de la Conservación",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/182004.png"
    },
    {
      nombre: "Esquirla dura de la Nihilidad",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/182005.png"
    },
    {
      nombre: "Corteza de árbol de la Erudición",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/182006.png"
    },
    {
      nombre: "Limo de la Armonía",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/182007.png"
    },
    {
      nombre: "Coral escama de dragón",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/182008.png"
    },
    {
      nombre: "El ruido y la furia",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/182009.png"
    },
    {
      nombre: "Gel térmico",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/183006.png"
    },
    {
      nombre: "Hoja del árbol interdimensional",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/183001.png"
    },
    {
      nombre: "Llama de fase",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/183002.png"
    },
    {
      nombre: "Lágrimas de cristal de la muerte gloriosa",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/183003.png"
    },
    {
      nombre: "Nudos de Mythus",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/183004.png"
    },
    {
      nombre: "Agotamiento",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/183005.png"
    },
    {
      nombre: "Cubo mecánico",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/182010.png"
    },
    {
      nombre: "Alimento nutritivo",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/400004.png"
    },
    {
      nombre: "Alimento punitivo",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/400005.png"
    },
    {
      nombre: "Aperitivo con truco",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/400006.png"
    },
    {
      nombre: "Dispositivo sencillo de primeros auxilios",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/400007.png"
    },
    {
      nombre: "Té de burbujas de taro estelar",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/400008.png"
    },
    {
      nombre: "Arroz frito cósmico",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401003.png"
    },
    {
      nombre: "Arroz frito asqueroso",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401004.png"
    },
    {
      nombre: "Energía punitiva",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401005.png"
    },
    {
      nombre: "Bebida energética",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401006.png"
    },
    {
      nombre: "Transmisor de vida",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401007.png"
    },
    {
      nombre: "Refresco embotellado",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401008.png"
    },
    {
      nombre: "Protección sencilla",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401009.png"
    },
    {
      nombre: "Flores de arroz",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401010.png"
    },
    {
      nombre: "Pintura de camuflaje",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401011.png"
    },
    {
      nombre: "Arroz inflado saludable",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401012.png"
    },
    {
      nombre: "Puños de la ira",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401013.png"
    },
    {
      nombre: "Alitas de moa de Shantak a la parrilla sobre madera de frutal",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401014.png"
    },
    {
      nombre: "Té flamaardiente",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401015.png"
    },
    {
      nombre: "Autosuficiencia",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401016.png"
    },
    {
      nombre: "Anémona voladora frita",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401017.png"
    },
    {
      nombre: "Licor de ámbar",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401018.png"
    },
    {
      nombre: "Shaomai delicioso",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401019.png"
    },
    {
      nombre: "Pastel de frijoles delicioso",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401020.png"
    },
    {
      nombre: "Pizza de reloj (porción)",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401021.png"
    },
    {
      nombre: "Pastel \"Observación de estrellas\" en trozos",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401022.png"
    },
    {
      nombre: "Tartaleta de limón del Sr. Arenque",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401023.png"
    },
    {
      nombre: "Helado mil capas (cero calorías)",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401024.png"
    },
    {
      nombre: "FelizAlma clásica",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401025.png"
    },
    {
      nombre: "Caramelo blando \"Sueños agrios\"",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401026.png"
    },
    {
      nombre: "Surtido de caramelos Colorsueños",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/401027.png"
    },
    {
      nombre: "Libertad momentánea",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/140399.png"
    },
    {
      nombre: "Aerosol curativo",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402001.png"
    },
    {
      nombre: "Escudo desechable",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402002.png"
    },
    {
      nombre: "Bebida energética sin azúcar",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402003.png"
    },
    {
      nombre: "Generador de campo antimateria",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402004.png"
    },
    {
      nombre: "Protección avanzada",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402005.png"
    },
    {
      nombre: "Protección chapucera",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402006.png"
    },
    {
      nombre: "Barrita energética deliciosa",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402007.png"
    },
    {
      nombre: "Polvo de celeridad",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402008.png"
    },
    {
      nombre: "Crema potenciadora: Físico",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402009.png"
    },
    {
      nombre: "Crema potenciadora: Viento",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402010.png"
    },
    {
      nombre: "Crema potenciadora: Fuego",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402011.png"
    },
    {
      nombre: "Crema potenciadora: Hielo",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402012.png"
    },
    {
      nombre: "Crema potenciadora: Rayo",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402013.png"
    },
    {
      nombre: "Crema potenciadora: Cuántico",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402014.png"
    },
    {
      nombre: "Crema potenciadora: Imaginario",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402015.png"
    },
    {
      nombre: "Agente emético",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402016.png"
    },
    {
      nombre: "Poción sientebien",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402017.png"
    },
    {
      nombre: "Estofado de las llanuras nevadas",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402018.png"
    },
    {
      nombre: "Máquina recitaescrituras",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402019.png"
    },
    {
      nombre: "Elixir de jade de los cinco cereales",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402020.png"
    },
    {
      nombre: "Píldora medicinal desintoxicante",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402021.png"
    },
    {
      nombre: "Difusión de médula de jade",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402022.png"
    },
    {
      nombre: "Ave salvaje frita de Pom-Pom",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402023.png"
    },
    {
      nombre: "Píldora de mandarina infantil",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402024.png"
    },
    {
      nombre: "Ensalada de alfalfa",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402025.png"
    },
    {
      nombre: "El momento de la traición",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402026.png"
    },
    {
      nombre: "Felicidad efímera",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/402027.png"
    },
    {
      nombre: "Niebla de la duda",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/140396.png"
    },
    {
      nombre: "Brazo cinético desechable",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/403001.png"
    },
    {
      nombre: "Poción rubí",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/403002.png"
    },
    {
      nombre: "Cañón cinético desechable",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/403003.png"
    },
    {
      nombre: "Piedra del Monumento del Siempreinvierno",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/403004.png"
    },
    {
      nombre: "Banda de aceleración topológica",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/403005.png"
    },
    {
      nombre: "Píldora de la longevidad cruel",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/403006.png"
    },
    {
      nombre: "Viscorpus frito con azúcar",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/403007.png"
    },
    {
      nombre: "Muñeco de madera automático",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/403008.png"
    },
    {
      nombre: "Al final de la vida",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/403009.png"
    },
    {
      nombre: "Ambiente animado",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/403010.png"
    },
    {
      nombre: "Basura",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408001.png"
    },
    {
      nombre: "Basura hermosa",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408002.png"
    },
    {
      nombre: "Dignidad del cubo de basura",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408003.png"
    },
    {
      nombre: "Bebida con sabor a pan de Jim Roger",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408004.png"
    },
    {
      nombre: "Kapo-Kali",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/140110.png"
    },
    {
      nombre: "Enrollado de colmipir",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408201.png"
    },
    {
      nombre: "Brocheta de bayafaisán",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408202.png"
    },
    {
      nombre: "Iceberg de refresco de pan de centeno",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408203.png"
    },
    {
      nombre: "Brocheta de carne asada",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408204.png"
    },
    {
      nombre: "Placa de la suerte de nave de combate",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408205.png"
    },
    {
      nombre: "Píldora rejuvenecedora grande",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408206.png"
    },
    {
      nombre: "Píldora rejuvenecedora pequeña",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408207.png"
    },
    {
      nombre: "Periódico",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/190013.png"
    },
    {
      nombre: "Pescado frito con mermelada",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408401.png"
    },
    {
      nombre: "Brocheta de lagarto cristalizado",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408402.png"
    },
    {
      nombre: "Sopa de verduras variadas",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408403.png"
    },
    {
      nombre: "Cangrejo hogarpétreo frito",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408404.png"
    },
    {
      nombre: "Refresco de frijoles",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408405.png"
    },
    {
      nombre: "Agua del Desfiladero",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408406.png"
    },
    {
      nombre: "Pastel de loto sonoro",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408407.png"
    },
    {
      nombre: "Leche de floticabra caliente",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408408.png"
    },
    {
      nombre: "Pan de salmón",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408409.png"
    },
    {
      nombre: "Soda de dulces sueños",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408410.png"
    },
    {
      nombre: "Hongo explosivo",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408411.png"
    },
    {
      nombre: "Luz seca de emergencia",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408412.png"
    },
    {
      nombre: "Plumero tranquilo",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408413.png"
    },
    {
      nombre: "Sopa de floticabra para calmar el estómago",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408414.png"
    },
    {
      nombre: "Palomitas",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408415.png"
    },
    {
      nombre: "Hambre estruendosa",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408416.png"
    },
    {
      nombre: "Esperanza de un futuro mejor",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408417.png"
    },
    {
      nombre: "Jarabe de sueños dulces",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408418.png"
    },
    {
      nombre: "Salchicha de Belobog",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408601.png"
    },
    {
      nombre: "Salamandra a la parrilla",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408602.png"
    },
    {
      nombre: "Delicia Inmortal",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408603.png"
    },
    {
      nombre: "Píldora del rejuvenecimiento espiritual",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408604.png"
    },
    {
      nombre: "Salteado de tripas de ternera en aceite picante de la casa",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/140279.png"
    },
    {
      nombre: "Panqueques del sol",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408606.png"
    },
    {
      nombre: "Martillo para dormir",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408607.png"
    },
    {
      nombre: "Miso de Izumo",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408608.png"
    },
    {
      nombre: "Discoburger",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408609.png"
    },
    {
      nombre: "Pizza de reloj (entera)",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408610.png"
    },
    {
      nombre: "Helado de papas fritas",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408611.png"
    },
    {
      nombre: "Pasteles de roble",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408612.png"
    },
    {
      nombre: "Champán chispeante",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408613.png"
    },
    {
      nombre: "La mirada del asesino",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408614.png"
    },
    {
      nombre: "Odio hasta la muerte",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/140397.png"
    },
    {
      nombre: "Tenacidad perpetua",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408616.png"
    },
    {
      nombre: "Pluma del duelista",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408617.png"
    },
    {
      nombre: "Túnica de la desaparición",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408618.png"
    },
    {
      nombre: "Pasamontañas salvaje",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408619.png"
    },
    {
      nombre: "Cucurucho Dulces sueños (tres sabores)",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408801.png"
    },
    {
      nombre: "Todo o nada",
      imagen: "https://api.yatta.top/hsr/assets/UI//item/408802.png"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
