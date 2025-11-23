import { Component,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-masa-input',
  templateUrl: './masa-input.component.html',
  styleUrl: './masa-input.component.css'
})
export class MasaInputComponent {
  selectedTime: string | null = null; 
  @Output () masaOutput = new EventEmitter<string>();

  timeSlots: string[] = [
    '8.15 pagi - 9.15 pagi',
    '8.15 pagi - 9.30 pagi',
    '8.15 pagi - 9.45 pagi',
    '8.15 pagi - 10.15 pagi',
    '8.15 pagi - 10.45 pagi',
    '8.15 pagi - 11.15 pagi',
    '10.15 pagi - 1.00 tengahari',
    '10.30 pagi - 1.00 tengahari',
    '10.45 pagi - 1.00 tengahari',
    '10.45 pagi - 1.15 tengahari',
    '11.15 pagi - 12.45 tengahari',
    '11.45 pagi - 12.45 tengahari',
    '11.45 pagi - 1.00 tengahari',
    '2.30 petang - 4.30 petang',
    '2.30 petang - 5.00 petang',
  ];

  onMasaChange(event : Event):void{
    const masa = (event.target as HTMLSelectElement).value;
    this.selectedTime = masa;
    this.masaOutput.emit(this.selectedTime);
  }
}
