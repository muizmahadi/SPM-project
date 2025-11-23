import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mata-pelajaran',
  templateUrl: './mata-pelajaran.component.html',
  styleUrls: ['./mata-pelajaran.component.css'],
})
export class MataPelajaranComponent {
  @Input() pusatPassed: string = '';
  @Output() mataPelajaranPassed = new EventEmitter<string>();

  searchText: string = '';
  filteredOptions: string[] = [];
  options: string[] = [
    'BAHASA MELAYU 1',
    'PEND.SENI VISUAL 1 (Aneka Pilihan)',
    'BAHASA MELAYU 2',
    'BAHASA INGGERIS 1',
    'BAHASA INGGERIS 2',
    'TASAWWUR ISLAM',
    'SEJARAH 1 (Aneka Pilihan)',
    'SEJARAH 2',
    'MATEMATIK 1 (Aneka Pilihan)',
    'MATEMATIK 2',
    'PENDIDIKAN ISLAM 1',
    'PENDIDIKAN MORAL',
    'PENDIDIKAN SYARIAH ISLAMIAH',
    'MATEMATIK TAMBAHAN 1',
    'MATEMATIK TAMBAHAN 2',
    'SAINS 1 (Aneka Pilihan)',
    'SAINS 2',
    'FIZIK 1 (Aneka Pilihan)',
    'FIZIK 2',
    'PEND.SENI VISUAL 2',
    'BAHASA ARAB 1',
    'KIMIA 1 (Aneka Pilihan)',
    'KIMIA 2',
    'PRODUKSI REKA TANDA 1',
    'SAINS SUKAN 1 (Aneka Pilihan)',
    'SAINS SUKAN 2',
    'PERNIAGAAN 1 (Aneka Pilihan)',
    'BIOLOGI 1 (Aneka Pilihan)',
    'PERNIAGAAN 2',
    'BIOLOGI 2',
    'PRINSIP PERAKAUNAN 1 (Aneka Pilihan)',
    'PRINSIP PERAKAUNAN 2',
    'PEND.AL-QURAN DAN AS-SUNNAH 1',
    'SAINS KOMPUTER 1',
    'GEOGRAFI 1 (Aneka Pilihan)',
    'GEOGRAFI 2',
  ];

  showDropdown: boolean = false;

  ngOnInit() {
    this.filteredOptions = [...this.options];
  }

  filterOptions(): void {
    const query = this.searchText.trim().toUpperCase();
    if (query.length > 0) {
      this.filteredOptions = this.options.filter((option) =>
        option.toUpperCase().includes(query)
      );
    } else {
      this.filteredOptions = [...this.options];
    }
  }

  selectOption(option: string): void {
    this.searchText = option; // Set selected option in input
    this.filteredOptions = []; // Clear the dropdown
    this.showDropdown = false; // Hide dropdown
    this.mataPelajaranPassed.emit(option); // Emit selected value
  }

  handleFocus(): void {
    this.showDropdown = true; // Show dropdown when input is focused
    this.filterOptions(); // Filter options based on current searchText
  }

  handleBlur(): void {
    setTimeout(() => {
      this.showDropdown = false; // Hide dropdown when input loses focus
    }, 200); // Delay to allow click on dropdown items
  }

  clearDropdown(): void {
    this.searchText = ''; // Clear the input field
    this.filteredOptions = [...this.options]; // Reset the dropdown
  }
}
