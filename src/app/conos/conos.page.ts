import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conos',
  templateUrl: './conos.page.html',
  styleUrls: ['./conos.page.scss'],
})
export class ConosPage implements OnInit {

  conos = [
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23002.png",
      nombre: "Algo insustituible",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20014.png",
      nombre: "Antagonista",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/22000.png",
      nombre: "Antes de que comience la misión del tutorial",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23010.png",
      nombre: "Antes del amanecer",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionMageSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20006.png",
      nombre: "Archivos",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionMageSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21041.png",
      nombre: "Arriba el telón",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21036.png",
      nombre: "Aventuras en Villa Ensueño",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionShamanSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21019.png",
      nombre: "Bajo el cielo azul",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20010.png",
      nombre: "Blindaje",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionKnightSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20011.png",
      nombre: "Bucle",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21001.png",
      nombre: "Buenas noches, que duermas bien",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21022.png",
      nombre: "Calderón",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20002.png",
      nombre: "Colapso celeste",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20017.png",
      nombre: "Colonización",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionKnightSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21000.png",
      nombre: "Conversación en el postoperatorio",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionPriestSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20001.png",
      nombre: "Cornucopia",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionPriestSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20005.png",
      nombre: "Coro",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionShamanSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/24001.png",
      nombre: "Crucero estelar",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21035.png",
      nombre: "Cuestión de verdad",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionPriestSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21015.png",
      nombre: "Determinación reluciente",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23012.png",
      nombre: "Dormir como un tronco",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21040.png",
      nombre: "Día del colapso cósmico",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionMageSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23008.png",
      nombre: "Ecos del ataúd",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionPriestSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23020.png",
      nombre: "El bautismo del pensamiento puro",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23005.png",
      nombre: "El momento de la victoria",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionKnightSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21014.png",
      nombre: "El momento oportuno",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionPriestSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21006.png",
      nombre: "El nacimiento del yo",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionMageSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21025.png",
      nombre: "El pasado y el futuro",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionShamanSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21002.png",
      nombre: "El primer día del resto de mi vida",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionKnightSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21020.png",
      nombre: "El reposo de los genios",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionMageSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21024.png",
      nombre: "El río nace en primavera",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23013.png",
      nombre: "El tiempo no espera",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionPriestSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23001.png",
      nombre: "En la noche",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23004.png",
      nombre: "En nombre del mundo",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21011.png",
      nombre: "Encuentro planetario",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionShamanSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21032.png",
      nombre: "Esculpir la luna y tejer las nubes",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionShamanSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/22001.png",
      nombre: "Ey, estoy aquí",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionPriestSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20016.png",
      nombre: "Final mutuo",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20007.png",
      nombre: "Flecha voladora",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20000.png",
      nombre: "Flechas",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20008.png",
      nombre: "Fruto excelente",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionPriestSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21037.png",
      nombre: "Ganador final",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20009.png",
      nombre: "Hogar destrozado",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21034.png",
      nombre: "Hoy es otro día tranquilo",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionMageSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21004.png",
      nombre: "Imagen en el recuerdo",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionShamanSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23018.png",
      nombre: "Instante grabado a fuego",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionMageSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21021.png",
      nombre: "Intercambio equivalente",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionPriestSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21010.png",
      nombre: "Juego de espadas",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21012.png",
      nombre: "Juramento secreto",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23003.png",
      nombre: "La batalla no ha terminado",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionShamanSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21009.png",
      nombre: "La elección de Landau",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionKnightSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21027.png",
      nombre: "La solemnidad del desayuno",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionMageSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/24002.png",
      nombre: "La textura de los recuerdos",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionKnightSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21028.png",
      nombre: "Las noches cálidas no duran",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionPriestSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21038.png",
      nombre: "Lejos del fuego",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20013.png",
      nombre: "Llave maestra",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionMageSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23007.png",
      nombre: "Lluvia incesante",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21005.png",
      nombre: "Los Topos te dan la bienvenida",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21039.png",
      nombre: "Los hilos del destino",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionKnightSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20019.png",
      nombre: "Mediación",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionShamanSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23019.png",
      nombre: "Mi pasado en el espejo",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionShamanSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20015.png",
      nombre: "Multiplicación",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionPriestSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23021.png",
      nombre: "Mundo de juegos",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionShamanSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23015.png",
      nombre: "Más brillante que el sol",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23000.png",
      nombre: "Noche en la Vía Láctea",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionMageSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23017.png",
      nombre: "Noche terrorífica",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionPriestSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23009.png",
      nombre: "Orilla inalcanzable",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23016.png",
      nombre: "Preocupaciones y felicidad",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21042.png",
      nombre: "Promesa grabada",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21013.png",
      nombre: "Que el mundo clame",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionMageSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23022.png",
      nombre: "Recuerdos reconstruidos",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21031.png",
      nombre: "Regreso a la oscuridad",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20012.png",
      nombre: "Rueda mecánica",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionShamanSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20020.png",
      nombre: "Sagacidad",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionMageSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/24003.png",
      nombre: "Sanación solitaria",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21007.png",
      nombre: "Sentimiento compartido",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionPriestSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21033.png",
      nombre: "Sin escapatoria",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/24000.png",
      nombre: "Sobre la caída de un Eón",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23006.png",
      nombre: "Solo hay que esperar",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21003.png",
      nombre: "Solo queda silencio",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20018.png",
      nombre: "Sombra oculta",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21023.png",
      nombre: "Somos Llamarada",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionKnightSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21016.png",
      nombre: "Tendencias del mercado universal",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionKnightSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20004.png",
      nombre: "Vacío",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png",
      estrellas: [1, 2, 3]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21008.png",
      nombre: "Visión de presa",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21029.png",
      nombre: "Volveremos a encontrarnos",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23011.png",
      nombre: "Ya ha cerrado los ojos",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionKnightSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/23014.png",
      nombre: "Yo seré mi propia espada",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png",
      estrellas: [1, 2, 3, 4, 5]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21018.png",
      nombre: "¡A bailar!",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionShamanSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21030.png",
      nombre: "¡Así soy yo!",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionKnightSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21026.png",
      nombre: "¡Guau! ¡Hora de pasear!",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/21017.png",
      nombre: "¡Suscríbanse a mi canal!",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png",
      estrellas: [1, 2, 3, 4]
    },
    {
      imagen: "https://api.yatta.top/hsr/assets/UI//equipment/medium/20003.png",
      nombre: "Ámbar",
      caminoImagen: "https://api.yatta.top/hsr/assets/UI/profession/IconProfessionKnightSmall.png",
      estrellas: [1, 2, 3]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
