import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fire-fighting',
  templateUrl: './fire-fighting.component.html',
  styleUrls: ['./fire-fighting.component.css']
})
export class FireFightingComponent implements OnInit {

  array1 = [
    'Alarm signaling',
    'Incident management',
    'Evacuation monitoring ﬁre, gas and water mist suppression',
    'ﬁre and gas safety solutions and industrial equipment controls'
  ]

  array2 = [
    { title: 'FIRE SUPPRESSION SYSTEMS', desc: 'Gaseous Fire Suppression Systems (FM200, Inergen, Novec etc), Water Based Fire Suppression System (Water Mist, Hydrants, Sprinklers, Deluge Systems' },
    { title: 'FIRE EXTINGUISHERS', desc: 'Ozone Friendly Clean Agent Fire Extinguishers, Carbon Dioxide Extinguishers, Water Type Fire Extinguishers, Chemical Fire Extinguishers, Foam Fire Extinguishers' },
    { title: 'FIRE DETECTION SYSTEMS ', desc: 'Conventional & Addressable Intelligent Fire Alarm Panels, Smoke Detectors, Multi-Sensor Detectors, Flame Detectors, Alarm Bells, Sounders, Leak Detection System, and all forms of fire protection.' },
  ]

  array3 = [
   'Meet the environmental performance through continual improvement',
   'Contribute pro-activity to the protection of the local environment',
   'Regularly monitor, control and review environmental performance',
   'Maximize the involvement of employees in reducing waste, control energy',
   'Consumption, prevention of pollution and promotion of recovery & recycling' 
]
  constructor() { }

  ngOnInit(): void {
  }

}
