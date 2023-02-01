import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/service/view.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  
  constructor(public service:ViewService) { }

  ngOnInit(): void {
    
  }
  
  getUper(){ return (this.service.getUper())}
  getOperation(){return this.service.getOperation()}
  getLower(){ return this.service.getLower()}
  
}