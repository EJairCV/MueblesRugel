import { Component, OnInit } from '@angular/core';
import { Mueble } from '../Models/ModeloMueble';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  arrayMueble:Array<Mueble>=[
    new Mueble("1","Mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,"https://www.sodimac.com.pe/static/contenido/2021/sala-de-estar/assets/images/relacionadas-1.jpg?v=5"),
    new Mueble("2","Mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,"https://www.sodimac.com.pe/static/contenido/2021/sala-de-estar/assets/images/relacionadas-1.jpg?v=5"),
    new Mueble("3","Mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,"https://www.sodimac.com.pe/static/contenido/2021/sala-de-estar/assets/images/relacionadas-1.jpg?v=5"),
    new Mueble("4","Mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,"https://www.sodimac.com.pe/static/contenido/2021/sala-de-estar/assets/images/relacionadas-1.jpg?v=5"),
    new Mueble("5","Mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,"https://www.sodimac.com.pe/static/contenido/2021/sala-de-estar/assets/images/relacionadas-1.jpg?v=5"),
    new Mueble("6","Mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,"https://www.sodimac.com.pe/static/contenido/2021/sala-de-estar/assets/images/relacionadas-1.jpg?v=5"),
    new Mueble("7","Mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,"https://www.sodimac.com.pe/static/contenido/2021/sala-de-estar/assets/images/relacionadas-1.jpg?v=5")
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  

}
