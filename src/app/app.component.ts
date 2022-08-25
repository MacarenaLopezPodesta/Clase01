import { Component } from '@angular/core';
import { NumericLiteral } from 'typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  public edadUno:number = 0;
  public edadDos:number = 0;
  public suma:number = 0;
  public promedio:number = 0;

  calcular()
  {
    this.suma= this.edadUno+this.edadDos;
    this.promedio=this.suma/2;
  }
  limpiar()
  {
    this.edadUno=0;
    this.edadDos=0;
    this.promedio=0;
    this.suma=0;
  }
}
