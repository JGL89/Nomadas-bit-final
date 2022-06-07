import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  constructor() {}

  user = {
    name: '',
    email: '',
    password: '',
  };

  ngOnInit(): void {}

  registro() {
    console.log('user:', this.user);
  }
}