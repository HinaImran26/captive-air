import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-installation-services',
  templateUrl: './installation-services.component.html',
  styleUrls: ['./installation-services.component.css']
})
export class InstallationServicesComponent implements OnInit {

  array1 = [{ title: 'Ducting & Piping', id: 'ducting' },
  { title: 'Plumbing', id: 'plumbing' },
  { title: 'Fire Fighting', id: 'fire-fight' },
  { title: 'Operation & Maintenance', id: 'op-main' },
  { title: 'Exclusive Services', id: 'ex-services' },]




  constructor(private meta: Meta, private title: Title) { }

  scrollbtn: any;


  ngOnInit(): void {

    this.addTags();
    this.title.setTitle("Professional Installation Services");
    this.scrollbtn = document.getElementById('btn-back-to-top');
    // console.log(this.scrollbtn);

    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 500) {
        // console.log("in if condition")
        this.scrollbtn.style.display = "block";
      }
      else {
        this.scrollbtn.style.display = "none";
      }

    })
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }



  addTags() {
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Get expert installation services by Captive Air'
      },
    )
  }

scroll(id:any){
  document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
}

}
