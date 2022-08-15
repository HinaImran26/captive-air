import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operationalexcellence',
  templateUrl: './operationalexcellence.component.html',
  styleUrls: ['./operationalexcellence.component.css']
})
export class OperationalexcellenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.removeItem("hasRefreshed")
  }

}
