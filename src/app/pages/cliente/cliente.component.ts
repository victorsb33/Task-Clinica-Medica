import { Component, OnInit } from '@angular/core';
import { ModalClienteComponent } from '../../modal/modal-cliente/modal-cliente.component';

@Component({
  selector: 'vex-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  dialog: any;

  constructor() { }

  ngOnInit(): void {
  }

  modalCliente() {
    const dialogRef = this.dialog.open(ModalClienteComponent);


    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
