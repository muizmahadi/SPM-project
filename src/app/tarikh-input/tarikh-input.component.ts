import { Component,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-tarikh-input',
  templateUrl: './tarikh-input.component.html',
  styleUrl: './tarikh-input.component.css'
})
export class TarikhInputComponent {
  @Output() tarikhOutput = new EventEmitter<string>();
  selectedDate: string | null = null; 
  
  onTarikhChange(event :Event):void{
    const tarikh = (event.target as HTMLSelectElement).value;
    this.selectedDate = tarikh;
    this.tarikhOutput.emit(this.selectedDate);
  }
}
