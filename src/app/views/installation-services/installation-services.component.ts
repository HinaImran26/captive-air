import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-installation-services',
  templateUrl: './installation-services.component.html',
  styleUrls: ['./installation-services.component.css']
})
export class InstallationServicesComponent implements OnInit {

  array1=[{title:'Ducting & Piping', link:'#ducting'},
  {title:'Plumbing', link:'#plumbing'},
  {title:'Fire Fighting', link:'#fire-fight'},
  {title:'Operation & Maintenance', link:'#op-main'},
  {title:'Exclusive Services', link:'#ex-services'},]




  constructor() {}

scrollbtn:any;


  ngOnInit(): void {

this.scrollbtn=document.getElementById('btn-back-to-top');
console.log(this.scrollbtn);

window.addEventListener('scroll', (e)=> {
if(window.scrollY > 500){
  // console.log("in if condition")
  this.scrollbtn.style.display="block";
}
else{
  this.scrollbtn.style.display="none";
}

})
}

scrollToTop(){
  window.scrollTo(0,0);
}

}
