import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  constructor( private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    localStorage.removeItem("hasRefreshed");
    this.addTags();
    this.title.setTitle("Our Values at Captive Air");
  }

  addTags() {
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Discover the core values that define Captive Air'
      },
    )
  }
}
