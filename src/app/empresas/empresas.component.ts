import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Empresa } from '../empresas';
import { EmpresasService } from '../empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresas: Empresa[] = [];
  formGroup!: FormGroup;

  constructor(private service: EmpresasService, private builder: FormBuilder) {
    this.formGroup = this.builder.group({
      name: [''],
      endereco: [''],
      numif: [''],
      tipo: [''],
      registro: ['']
    });
  }

  ngOnInit(): void {
    this.loadEmpresas();
  }

  loadEmpresas() {
    this.service.getEmpresas().subscribe(
      (data: Empresa[]) => {
        this.empresas = data;
      },
      (error) => {
        console.log('Erro ao chamar o endpoint:', error);
      }
    );
  }

  save() {
    this.service.save(this.formGroup.value).subscribe(
      (data: Empresa) => {
        this.empresas.push(data);
        this.formGroup.reset();
      },
      (error) => {
        console.log('Erro ao salvar a empresa:', error);
      }
    );
  }
}
