import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Medico } from '../../core/model/medico';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'vex-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss']
})
export class MedicoComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'telefone', 'crm', 'area', 'cep'];
  dataSource!: MatTableDataSource<Medico>;
  medicos: Medico[] = [];
  form: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.form = this.fb.group({
      filtro: [''],
      categoria: [''],
      status: ['']
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.medicos = [
      { id: 1, nome: 'Camila Richa Navega', telefone: '(48) 981162256 ', crm: '18541', area:'Pediatrico', cep: '13301-769' },
      { id: 2, nome: 'Nelson Guedes Augusto', telefone: '(48) 996718674', crm: '18542', area:'clinico Geral', cep: '04313-080' },
      { id: 3, nome: 'Emmanuel Reis Bocafoli', telefone: '(48) 999588168', crm: '18543', area:'Neurologista', cep: '18016-580' },
      { id: 4, nome: 'Maria Eliza Araujo', telefone: '(48) 984767399', crm: '18544', area:'Urologista', cep: '07094-180' },
    ];
    this.dataSource = new MatTableDataSource(this.medicos);
  }
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}





