import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalClienteComponent } from '../../modal/modal-cliente/modal-cliente.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Reserva } from '../../core/model/cliente';

@Component({
  selector: 'vex-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nomeCliente', 'dtAbertura', 'codVendedor', 'dtFinalizacao', 'valorTotalReserva', 'actions'];
  dataSource!: MatTableDataSource<Reserva>;
  reservas: Reserva[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  form: FormGroup;

  constructor(private dialog: MatDialog, private fb: FormBuilder) {
    this.form = this.fb.group({
      filtro: [''],
      categoria: [''],
      status: ['']
    });
  }


  ngOnInit(): void {
    this.reservas = [
      { id: 1, nomeCliente: 'João Silva', dtAbertura: new Date('2023-10-01'), codVendedor: 'V123', dtFinalizacao: new Date('2023-10-05'), valorTotalReserva: 150.00 },
      { id: 2, nomeCliente: 'Maria Oliveira', dtAbertura: new Date('2023-10-02'), codVendedor: 'V124', dtFinalizacao: new Date('2023-10-06'), valorTotalReserva: 200.00 },
      { id: 3, nomeCliente: 'Carlos Souza', dtAbertura: new Date('2023-10-03'), codVendedor: 'V125', dtFinalizacao: new Date('2023-10-07'), valorTotalReserva: 250.00 },
      { id: 4, nomeCliente: 'Ana Pereira', dtAbertura: new Date('2023-10-04'), codVendedor: 'V126', dtFinalizacao: new Date('2023-10-08'), valorTotalReserva: 300.00 },
    ];
    this.dataSource = new MatTableDataSource(this.reservas);
  }

  modalCliente() {
    const dialogRef = this.dialog.open(ModalClienteComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
