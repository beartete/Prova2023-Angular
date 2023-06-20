import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-estudantes',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  formGroup!: FormGroup;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required),
      numif: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      registro: new FormControl('', Validators.required)
    });
  }

  save(): void {
    if (this.formGroup.valid) {
      // Lógica para salvar os dados do formulário
      console.log(this.formGroup.value);
    }
  }
}
