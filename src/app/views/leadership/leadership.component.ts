import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {

  constructor( private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    localStorage.removeItem("hasRefreshed");
    this.addTags();
    this.title.setTitle("Captive Air Leadership");
  }

  addTags() {
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Meet the leaders driving Captive Airs success'
      },
    )
  }
  
}
