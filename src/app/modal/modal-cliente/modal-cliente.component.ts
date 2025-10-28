import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { stagger60ms } from '../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.scss'],
  animations: [stagger60ms, fadeInUp400ms],
})
export class ModalClienteComponent implements OnInit {
  form: FormGroup;

  constructor(private cd: ChangeDetectorRef,private fb: FormBuilder) {
    this.form = this.fb.group({
      nomeCompleto: [''],
      cpf: [''],
      dtNascimento: [''],
      genero: [''],
      telefone: [''],
      cep: [''],
      logradouro: [''],
      numero: [''],
      bairro: [''],
      complemento: [''],
      cidade: [''],
      estado: [''],
    });
   }

  ngOnInit(): void {
  }

}
