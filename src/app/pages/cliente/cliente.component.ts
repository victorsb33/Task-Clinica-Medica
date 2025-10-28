import { Component, OnInit } from '@angular/core';
import { ModalClienteComponent } from '../../modal/modal-cliente/modal-cliente.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'vex-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  modalCliente() {
    const dialogRef = this.dialog.open(ModalClienteComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
