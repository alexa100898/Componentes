import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tujornada: string;
  jornadas: string[] = [
    'Mañana',
    'Tarde',
    'Noche']; 
  
    hora = '';

  @ViewChild('autosize', { static: false }) autosize: CdkTextareaAutosize;
 myControl = new FormControl();
      Formacions: string[] = ['Primaria', 'Bachiller', 'Secundaria'];
  constructor(private _ngZone: NgZone) { }
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  color = 'blue';
  checked = false;
  disabled = false;
}

