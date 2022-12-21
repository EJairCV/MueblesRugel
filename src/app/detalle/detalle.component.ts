import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mueble } from '../Models/ModeloMueble';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  arrayMueble:Array<Mueble>=[
    new Mueble("1","Mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,"https://www.sodimac.com.pe/static/contenido/2021/sala-de-estar/assets/images/relacionadas-1.jpg?v=5"),
    new Mueble("2","Mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,"https://www.sodimac.com.pe/static/contenido/2021/sala-de-estar/assets/images/relacionadas-1.jpg?v=5"),
    new Mueble("3","Mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,"https://www.sodimac.com.pe/static/contenido/2021/sala-de-estar/assets/images/relacionadas-1.jpg?v=5"),
    new Mueble("4","Mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,"https://www.sodimac.com.pe/static/contenido/2021/sala-de-estar/assets/images/relacionadas-1.jpg?v=5"),
    new Mueble("5","Mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,"https://www.sodimac.com.pe/static/contenido/2021/sala-de-estar/assets/images/relacionadas-1.jpg?v=5"),
    new Mueble("6","Mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,"https://www.sodimac.com.pe/static/contenido/2021/sala-de-estar/assets/images/relacionadas-1.jpg?v=5"),
    new Mueble("7","Mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,"https://www.sodimac.com.pe/static/contenido/2021/sala-de-estar/assets/images/relacionadas-1.jpg?v=5")
  ]

  codigo:any="";

  mueble:Mueble= new Mueble("1","mueble Prueba",["Material1","Material2","Material3"],["tipo1","tipo2","tipo3"],"Lorem ipsum dolor sit amet consectetur adipisicing elit.",99.99,99.99,"https://www.sodimac.com.pe/static/contenido/2021/sala-de-estar/assets/images/relacionadas-1.jpg?v=5")


  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(
      res=>{
        this.codigo=res.get("id");
      }
    )
    this.obtenerMueble(this.codigo)
  }

  public obtenerMueble(id:string){

    this.arrayMueble.forEach(mueble =>{
      if (id==mueble.id) {
        this.mueble=mueble;
        console.log(this.mueble);
      }
    });
  }

}
