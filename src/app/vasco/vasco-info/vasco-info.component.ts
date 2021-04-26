import { Component, OnInit } from '@angular/core';
import {VascoDetails} from '../model/vasco-details';

@Component({
  selector: 'app-vasco-info',
  templateUrl: './vasco-info.component.html',
  styleUrls: ['./vasco-info.component.css']
})
export class VascoInfoComponent implements OnInit {

  serialNumber: string;
  userId: string;

  constructor() { }

  ngOnInit(): void {
  }

  getTokenDetails(): VascoDetails {
    return null;
  }

  activateVascoCard(userId: string, serialNumber: string): void {

  }
}
