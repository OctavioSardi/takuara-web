import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  FormContacto = new FormGroup({
    NomAp: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(55),
    ]),
    Empresa: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(55),
    ]),
    Mail: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      Validators.minLength(4),
      Validators.maxLength(100),
    ]),
    Movil: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{6,20}'),
    ]),
    Msg: new FormControl('', [Validators.maxLength(300)]),
  });

  submitted = false;

  constructor(public router: Router) {}

  ngOnInit(): void {}

  Cancelar() {
    this.FormContacto.reset();
    this.submitted = false;
  }
}
