import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-operationalexcellence',
  templateUrl: './operationalexcellence.component.html',
  styleUrls: ['./operationalexcellence.component.css']
})
export class OperationalexcellenceComponent implements OnInit {

  constructor( private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    localStorage.removeItem("hasRefreshed");
    this.addTags();
    this.title.setTitle("Achieving Operational Excellence");
  };
  addTags() {
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Captive Airs pursuit of operational excellence'
      },
    )
  }

}
