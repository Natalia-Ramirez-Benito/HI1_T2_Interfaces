import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artefactos',
  templateUrl: './artefactos.page.html',
  styleUrls: ['./artefactos.page.scss'],
})
export class ArtefactosPage implements OnInit {

  artefactos = [
    {
      nombre: "Transeúnte de la nube pasajera",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71000.png"
    },
    {
      nombre: "Pistolera de la espiga silvestre",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71001.png"
    },
    {
      nombre: "Paladina de la Iglesia de la Corte Inmaculada",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71002.png"
    },
    {
      nombre: "Cazador del bosque glacial",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71003.png"
    },
    {
      nombre: "Campeona de boxeo callejero",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71004.png"
    },
    {
      nombre: "Guardia de la nieve borrascosa",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71005.png"
    },
    {
      nombre: "Forjador de lava",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71006.png"
    },
    {
      nombre: "Genio de las estrellas relucientes",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71007.png"
    },
    {
      nombre: "Banda del trueno crepitante",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71008.png"
    },
    {
      nombre: "Águila del crepúsculo",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71009.png"
    },
    {
      nombre: "Ladrón del rastro meteórico",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71010.png"
    },
    {
      nombre: "Habitante del yermo de los bandidos",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71011.png"
    },
    {
      nombre: "Discípula longeva",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71020.png"
    },
    {
      nombre: "Mensajero del espacio hackeado",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71021.png"
    },
    {
      nombre: "Gran duque incinerador",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71024.png"
    },
    {
      nombre: "Prisionero aislado",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71025.png"
    },
    {
      nombre: "Buceadora pionera del agua muerta",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71028.png"
    },
    {
      nombre: "Relojero de maquinaciones oníricas",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71029.png"
    },
    {
      nombre: "Estación sellaespacios",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71012.png"
    },
    {
      nombre: "Flota de los eternos",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71013.png"
    },
    {
      nombre: "Entidad comercial pangaláctica",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71014.png"
    },
    {
      nombre: "La Belobog de los Arquitectos",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71015.png"
    },
    {
      nombre: "Diferenciador celestial",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71016.png"
    },
    {
      nombre: "Salsotto inerte",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71017.png"
    },
    {
      nombre: "Talia, paraíso de los forajidos",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71018.png"
    },
    {
      nombre: "Vonwacq el vivaz",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71019.png"
    },
    {
      nombre: "Arena rutilante",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71022.png"
    },
    {
      nombre: "Quilla rota",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71023.png"
    },
    {
      nombre: "Glamoth, frente del firmamento",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71026.png"
    },
    {
      nombre: "Colonipenal, la tierra de los sueños",
      imagen: "https://api.yatta.top/hsr/assets/UI//relic/71027.png"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
