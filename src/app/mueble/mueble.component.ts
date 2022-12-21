import { Component, Input, OnInit } from '@angular/core';
import { Mueble } from '../Models/ModeloMueble';

@Component({
  selector: 'app-mueble',
  templateUrl: './mueble.component.html',
  styleUrls: ['./mueble.component.css']
})
export class MuebleComponent implements OnInit {
  
  @Input()mueble:Mueble=new Mueble("1","mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,"");
  constructor() { }
  
  ngOnInit(): void {
    
  }
  // arrayMueble:Array<Mueble>=[
  //   new Mueble("1","mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,""),
  //   new Mueble("2","mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,""),
  //   new Mueble("3","mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,""),
  //   new Mueble("4","mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,""),
  //   new Mueble("5","mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,""),
  //   new Mueble("6","mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,""),
  //   new Mueble("7","mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,"")
  // ]


}
