import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-pusat',
  templateUrl: './pusat.component.html',
  styleUrl: './pusat.component.css'
})
export class PusatComponent {
  pusatOptions = ['BD033','BD034'];
  @Output() passedOutput = new EventEmitter<string>();
  selectedPusat :string='';
  userData :any;

  onPusatChange(event : Event):void{
    const selected = (event.target as HTMLSelectElement).value;
    this.selectedPusat = selected;
    this.passedOutput.emit(this.selectedPusat);
    
  }

  
}
