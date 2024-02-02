import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  personajes = [
    { nombre: 'Dr. Ratio',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1305.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeImaginary.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png?vh=2023122401'
    },
    { nombre: 'Xueyi',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1214.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeQuantum.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png?vh=2023122401'
    },
    { nombre: 'Ruan Mei',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1303.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeIce.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionShamanSmall.png?vh=2023122401'
    },
    { nombre: 'Hanya',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1215.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributePhysical.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionShamanSmall.png?vh=2023122401'
    },
    { nombre: 'Argenti',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1302.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributePhysical.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionMageSmall.png?vh=2023122401'
    },
    { nombre: 'Huohuo',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1217.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeWind.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionPriestSmall.png?vh=2023122401'
    },
    { nombre: 'Topaz y Conti',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1112.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeFire.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png?vh=2023122401'
    },
    { nombre: 'Guinaifen',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1210.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeFire.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png?vh=2023122401'
    },
    { nombre: 'Jingliu',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1212.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeIce.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png?vh=2023122401'
    },
    { nombre: 'Lynx',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1110.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeQuantum.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionPriestSmall.png?vh=2023122401'
    },
    { nombre: 'Fu Xuan',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1208.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeQuantum.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionKnightSmall.png?vh=2023122401'
    },
    { nombre: 'Dan Heng - Imbibitor Lunae',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1213.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeImaginary.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png?vh=2023122401'
    },
    { nombre: 'Kafka',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1005.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeThunder.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png?vh=2023122401'
    },
    { nombre: 'Luka',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1111.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributePhysical.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png?vh=2023122401'
    },
    { nombre: 'Blade',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1205.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeWind.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png?vh=2023122401'
    },
    { nombre: 'Luocha',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1203.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeImaginary.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionPriestSmall.png?vh=2023122401'
    },
    { nombre: 'Yukong',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1207.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeImaginary.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionShamanSmall.png?vh=2023122401'
    },
    { nombre: 'Silver Wolf',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1006.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeQuantum.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png?vh=2023122401'
    },
    { nombre: 'Jing Yuan',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1204.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeThunder.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionMageSmall.png?vh=2023122401'
    },
    { nombre: '7 de marzo',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1001.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeIce.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionKnightSmall.png?vh=2023122401'
    },
    { nombre: 'Dan Heng',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1002.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeWind.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png?vh=2023122401'
    },
    { nombre: 'Himeko',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1003.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeFire.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionMageSmall.png?vh=2023122401'
    },
    { nombre: 'Welt',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1004.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeImaginary.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png?vh=2023122401'
    },
    { nombre: 'Arlan',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1008.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeThunder.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png?vh=2023122401'
    },
    { nombre: 'Asta',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1009.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeFire.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionShamanSmall.png?vh=2023122401'
    },
    { nombre: 'Herta',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1013.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeIce.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionMageSmall.png?vh=2023122401'
    },
    { nombre: 'Bronya',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1101.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeWind.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionShamanSmall.png?vh=2023122401'
    },
    { nombre: 'Seele',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1102.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeQuantum.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png?vh=2023122401'
    },
    { nombre: 'Serval',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1103.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeThunder.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionMageSmall.png?vh=2023122401'
    },
    { nombre: 'Gepard',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1104.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeIce.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionKnightSmall.png?vh=2023122401'
    },
    { nombre: 'Nathasa',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1105.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributePhysical.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionPriestSmall.png?vh=2023122401'
    },
    { nombre: 'Pela',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1106.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeIce.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png?vh=2023122401'
    },
    { nombre: 'Clara',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1107.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributePhysical.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png?vh=2023122401'
    },
    { nombre: 'Sampo',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1108.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeWind.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarlockSmall.png?vh=2023122401'
    },
    { nombre: 'Hook',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1109.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeFire.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png?vh=2023122401'
    },
    { nombre: 'Quingque',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1201.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeQuantum.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionMageSmall.png?vh=2023122401'
    },
    { nombre: 'Tingyun',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1202.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeThunder.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionShamanSmall.png?vh=2023122401'
    },
    { nombre: 'Sushang',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1206.png?vh=2023122401',
      estrellas: [1, 2, 3, 4],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributePhysical.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png?vh=2023122401'
    },
    { nombre: 'Yanquing',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1209.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeIce.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionRogueSmall.png?vh=2023122401'
    },
    { nombre: 'Bailu',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/1211.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeThunder.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionPriestSmall.png?vh=2023122401'
    },
    { nombre: 'Trazacaminos',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/8001.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributePhysical.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png?vh=2023122401'
    },
    { nombre: 'Trazacaminos',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/8002.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributePhysical.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionWarriorSmall.png?vh=2023122401'
    },
    { nombre: 'Trazacaminos',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/8003.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeFire.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionKnightSmall.png?vh=2023122401'
    },
    { nombre: 'Trazacaminos',
      imagen: 'https://api.yatta.top/hsr/assets/UI//avatar/medium/8004.png?vh=2023122401',
      estrellas: [1, 2, 3, 4, 5],
      elementoImagen: 'https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeFire.png?vh=2023122401',
      caminoImagen: 'https://api.yatta.top/hsr/assets/UI/profession/IconProfessionKnightSmall.png?vh=2023122401'
    },
  ];
  constructor() { }
  ngOnInit() {
  }
}
