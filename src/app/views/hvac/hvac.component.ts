import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hvac',
  templateUrl: './hvac.component.html',
  styleUrls: ['./hvac.component.css']
})
export class HvacComponent implements OnInit, OnDestroy {
constructor(private router: Router) {}

  ngOnInit(): void {
    if(!localStorage.getItem("hasRefreshed"))
      setTimeout(() =>  {
        window.location.reload();
        localStorage.setItem("hasRefreshed", "true");
      }, 500);
  }
  ngOnDestroy(): void {
    localStorage.removeItem("hasRefreshed")
  }

  readmore() {
    var moretext = document.getElementById("more")
    console.log(moretext)
  }


navigate(site:any){
if(site==='rhoss')
window.open("https://www.rhoss.it/the-group/", "_blank");
}



}

