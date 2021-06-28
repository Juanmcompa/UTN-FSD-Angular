import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
@Input()
data:any;
@Input()
detalle:boolean;
@Output()
reload=new EventEmitter
isLogin:boolean=false
constructor() { }
eliminar(){
  this.reload.emit()
}
  ngOnInit(): void {
    console.log(this.data);
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

