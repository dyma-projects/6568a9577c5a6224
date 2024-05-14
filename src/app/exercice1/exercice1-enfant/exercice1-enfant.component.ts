import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number;

  @Output() addEvent: EventEmitter<void> = new EventEmitter();
  @Output() substractEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  add() {
    this.addEvent.emit();
  }

  substract() {
    this.substractEvent.emit();
  }
}
