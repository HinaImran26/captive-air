import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  emailAddress = "info@captive-air.com"
  mapSource: SafeUrl='';
  locations = [
    { location: 'Lahore', address: '305-J, 3rd Floor, Office No.2, EME Sector, Multan Road', image: '../../../assets/contact-us/lahore-office.jpg', mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54422.7525444812!2d74.25068235041971!3d31.512566708730578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e80f8058b1%3A0x6d6bd55036cb7879!2sCaptive%20Air!5e0!3m2!1sen!2s!4v1660900988463!5m2!1sen!2s' },
    { location: 'Islamabad', address: 'Rose Arcade, G/11 Markaz', image: '../../../assets/contact-us/isl-office.jpg', mapLink: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13282.122571586011!2d72.9999393!3d33.6693215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6c1417e35d6693ae!2sCAPTIVE%20AIR!5e0!3m2!1sen!2s!4v1660909229301!5m2!1sen!2s' },
    { location: 'Karachi', address: 'Suite No.402, 4th Floor, M.Yousuf Chamber Off Shahrah-e Faisal', image: '../../../assets/contact-us/karachi-office.jpg', mapLink: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14479.459563675162!2d67.0832691!3d24.8684637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5865b22efc805eb1!2sM%20Yousuf%20Chamber!5e0!3m2!1sen!2s!4v1660909391180!5m2!1sen!2s' },
  ]

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // this.mapSource= this.sanitizer.bypassSecurityTrustResourceUrl(this.locations[0].mapLink);
  }


  // changeMap(item: any) {
  //   console.log(item);
  //   for (var i = 0; i++; i <= this.locations.length) {
  //     if (item.location === this.locations[i].location) {
  //       this.mapSource = this.locations[i].mapLink;
  //       this.sanitizer.bypassSecurityTrustUrl(this.mapSource)
  //     }
  //   }
  //   // return this.mapSource
  // }


  // getSanitizedUrl() {
  //   this.mapSource = this.sanitizer.bypassSecurityTrustResourceUrl();
  //   return this.mapSource;
  // }




}
