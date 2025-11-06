import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalClienteComponent } from '../../modal/modal-cliente/modal-cliente.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from '../../core/model/cliente';

@Component({
  selector: 'vex-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nomeCliente', 'dtNascimento', 'cpf', 'genero', 'cep', 'actions'];
  dataSource!: MatTableDataSource<Cliente>;
  clientes: Cliente[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  erro: string | null = null;
  form: FormGroup;

  constructor(private dialog: MatDialog, private fb: FormBuilder) {
    this.form = this.fb.group({
      filtro: [''],
    });
  }


  ngOnInit(): void {
    this.clientes = [
      { id: 1, nomeCliente: 'João Silva', dtNascimento: new Date('2023-10-01'), cpf: '247.228.667-83', genero: ('Masculino'), cep: '12903-423' },
      { id: 2, nomeCliente: 'Maria Oliveira', dtNascimento: new Date('2023-10-02'), cpf: '717.254.961-94', genero: ('Feminino'), cep: '14781-233' },
      { id: 3, nomeCliente: 'Carlos Souza', dtNascimento: new Date('2023-10-03'), cpf: '196.701.355-16', genero: ('Masculino'), cep: '11440-410' },
      { id: 4, nomeCliente: 'Ana Pereira', dtNascimento: new Date('2023-10-04'), cpf: '857.008.588-51', genero: ('Feminino'), cep: '13871-209' },
    ];
    this.dataSource = new MatTableDataSource(this.clientes);
  }

  modalCliente() {
    const dialogRef = this.dialog.open(ModalClienteComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.clientes.push(result)
        this.dataSource = new MatTableDataSource(this.clientes);
        this.limparFiltro();
      }
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

  delete(cliente: Cliente) {
    let indiceRemover = this.clientes.indexOf(cliente);
    if (indiceRemover > -1) {
      this.clientes.splice(indiceRemover, 1);
      console.log("Delete depois do splice", this.clientes)
      this.dataSource = new MatTableDataSource(this.clientes)
    }
  }

  limparFiltro() {
    this.form.get('filtro')?.setValue('');
    this.dataSource.filter = '';
  }

  editar(cliente: Cliente): void {
    const dialogRef = this.dialog.open(ModalClienteComponent, {
      width: '600px',
      data: cliente // envia o cliente para o modal
    });

    dialogRef.afterClosed().subscribe((clienteEditado: Cliente) => {
      if (clienteEditado) {
        const index = this.clientes.indexOf(cliente);
        if (index > -1) {
          this.clientes[index] = clienteEditado; // substitui no array
          this.dataSource.data = [...this.clientes]; // atualiza tabela
        }
      }
    });
  }

}
