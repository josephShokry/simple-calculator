import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color?:string;
  @Input() label?: string;
  @Output() event = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addElement(){
    this.event.emit();
  }

}
