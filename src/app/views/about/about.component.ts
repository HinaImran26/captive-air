import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    localStorage.removeItem("hasRefreshed");
    this.addTags();
    this.title.setTitle("About Captive Air");
  }
  addTags() {
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Learn about Captive Air and their expertise'
      },
    )
  }

}
