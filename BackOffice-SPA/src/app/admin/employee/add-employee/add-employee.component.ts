import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

    hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};
    login = {username: '', password: ''};
  constructor() { }

  ngOnInit() {
  }

}
