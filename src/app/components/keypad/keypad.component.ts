import { Component, HostListener, OnInit } from '@angular/core';
import { ViewService } from 'src/app/service/view.service';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  constructor(private services:ViewService) { }

  ngOnInit(): void {
  }
  @HostListener('document:keypress',['$event'])
  handlekeyboardEvent(event:KeyboardEvent){
    this.execute(event.key)
  }
  execute(label:string){
    this.services.addElement(label);
  }
}
