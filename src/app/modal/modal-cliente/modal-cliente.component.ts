import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { stagger60ms } from '../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { ViaCepService } from '../../../../src/app/core/services/service/via-cep.service';

@Component({
  selector: 'vex-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.scss'],
  animations: [stagger60ms, fadeInUp400ms],
})
export class ModalClienteComponent implements OnInit {
  form: FormGroup;
  erro: string | null = null;

  constructor(private cd: ChangeDetectorRef,private fb: FormBuilder,  private viaCepService: ViaCepService) {
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

    buscarCep() {
    const cep = this.form.get('cep')?.value;
    if (!cep) return;

    this.viaCepService.buscarCep(cep).subscribe({
      next: (dados) => {
        if (dados.erro) {
          this.erro = 'CEP não encontrado.';
          this.form.patchValue({
            logradouro: '',
            bairro: '',
            localidade: '',
            uf: ''
          });
        } else {
          this.erro = null;
          this.form.patchValue({
            logradouro: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf
          });
        }
      },
      error: () => {
        this.erro = 'Erro ao consultar o CEP.';
      }
    });
  }

  ngOnInit(): void {
  }

}
