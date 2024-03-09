import { Component } from '@angular/core';

@Component({
  selector: 'app-teste-pipe',
  templateUrl: './teste-pipe.component.html',
  styleUrl: './teste-pipe.component.scss'
})
export class TestePipeComponent {



  pessoa = {
    nome: 'João',
    idade: 20,
    status: 1
  }

  pessoa2 = { 
    nome: 'Maria',
    idade: 25,
    status: 2
  }

}
