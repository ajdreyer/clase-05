import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IUsuario } from '../../models';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.scss'
})
export class ListaUsuariosComponent implements AfterViewInit, OnInit {
  @ViewChild('myList')
  myList?: ElementRef;
  
  constructor(){
    console.log('constructor', this.myList);
  }

  ngOnInit(): void {
    console.log('on init');
  }
  ngAfterViewInit(): void {
    console.log('after view init', this.myList);
  }
  @Input()//definimos que el valor de esta propiedad vendra de fuera de este componente.
  usuarios: IUsuario[] = [];

  @Output()
  deleteUser = new EventEmitter();
}
