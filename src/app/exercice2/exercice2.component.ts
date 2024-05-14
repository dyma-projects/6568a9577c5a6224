import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css'],
})
export class Exercice2Component {
  @ViewChild('inputRef') input: ElementRef<HTMLInputElement>;

  public valeur;

  constructor() {}

  change() {
    this.valeur = this.input.nativeElement.value;
  }
}
