import { Component } from '@angular/core';
import { IUsuario } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clase-05';

  modalVisible = false;

  usuariosAprobados: IUsuario[] = [
    {
      firstName: "Alejandro",
      lastName: "Dreyer"
    },
    {
      firstName: "Ana",
      lastName: "Gonzales"
    }
  ];

  usuariosDesaprobados: IUsuario[] = [
    {
      firstName: "Gonzalo",
      lastName: "Pérez"
    },
    {
      firstName: "Lucas",
      lastName: "Gonzales"
    }
  ];

  deleteUser(index: number, arrayName: 'usuariosAprobados' | 'usuariosDesaprobados'): void {
    console.log(`Vamos a eliminar el usuario en la posición ${index}`);

    if(arrayName === 'usuariosAprobados')
      this.usuariosAprobados = this.usuariosAprobados.filter((el, i) => i !== index);
    else
      this.usuariosDesaprobados = this.usuariosDesaprobados.filter((el, i) => i !== index);
  }
}