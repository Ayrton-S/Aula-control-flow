import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  user = "Admin";
  frutas = ['banana','laranja']
  users = [
    {
      user:"Henrique",
      role:"Admin"
    },
    {
      user:"Airton",
      role:"Gerente"
    },
    {
      user:"Iza",
      role:"Visitante"
    },
  ]
}
