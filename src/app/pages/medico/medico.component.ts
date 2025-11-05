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

  displayedColumns: string[] = ['nome', 'telefone', 'crm', 'area', 'plano'];
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
      { id: 1, nome: 'Angelica', telefone: '0500 2025 007', crm: '18541', area:'Pediatrico', plano: 'N' },
      { id: 2, nome: 'Eliana', telefone: '0500 2025 020', crm: '18542', area:'clinico Geral', plano: 'S' },
      { id: 3, nome: 'Xuxa', telefone: '0500 2025 040', crm: '18543', area:'Neurologista', plano: 'S' },
      { id: 4, nome: 'Didi', telefone: '0500 2025 100', crm: '18544', area:'Urologista', plano: 'N' },
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





