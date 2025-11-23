import { Component, Input, OnChanges, SimpleChanges,Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-student-input',
  templateUrl: './student-input.component.html',
  styleUrls: ['./student-input.component.css'],
})
export class StudentInputComponent implements OnChanges {
  @Input() pusat: string = '';
  @Input() mataPelajaran: string = '';
  @Output() studentOutput = new EventEmitter<any[]>();
  @Output() lengthOutput = new EventEmitter<number>();

  studentsData: any[] = [];
  filteredNames: string[] = [];
  searchInput: string = '';
  selectedStudents : any[]=[];

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges): void {
    
    // Clear dropdown and fetch data when `pusat` or `mataPelajaran` changes
    if (changes['pusat'] || changes['mataPelajaran']) {
      this.clearDropdown();
      if (this.pusat && this.mataPelajaran) {
        console.log("success getting pusat and mata-pelajaran");
        this.fetchStudentsData();
      }
      else{
        console.log("failure getting both parameter");
      }
    }
  }

  fetchStudentsData(): void {
    const filePath = `/assets/${this.pusat}/${this.mataPelajaran}.json`;   
    console.log(filePath);
    
    this.http.get<any[]>(filePath).subscribe({
      next: (data) => {
        // this.studentsData = data.map((student) => student.nama_calon); 
        // this.filteredNames = [...this.studentsData]; 
        this.studentsData = data;
        this.lengthOutput.emit(data.length);
        this.filteredNames = data.map((student)=>student.nama_calon);
        
      },
      error: (error) => {
        console.error('Error fetching students data:', error);
        this.clearDropdown(); // Reset dropdown on error
      },
    });
  }

  onSearchChange(): void {
    this.filteredNames = this.studentsData
      .map((student) => student.nama_calon)
      .filter((name) =>
        name.toLowerCase().includes(this.searchInput.toLowerCase())
      );
  }

  onNameSelect(name: string): void {
    const selectedStudent = this.studentsData.find(
      (student)=> student.nama_calon === name
    );

    if (selectedStudent){
      this.selectedStudents.push(selectedStudent);
      this.filteredNames = this.filteredNames.filter((n) => n !== name); 
      this.searchInput = ''; 
      this.emitSelectedStudents();
    }
  }

  removeStudent(index:number):void{
    const removedStudent = this.selectedStudents.splice(index,1)[0];
    if (removedStudent){
      this.studentsData.push(removedStudent);
      this.filteredNames = [...this.studentsData.map(student => student.nama_calon)];
      // this.filteredNames.push(removedStudent.nama_calon);
      this.emitSelectedStudents();
    }
  }

  clearDropdown(): void {
    this.studentsData = [];
    this.filteredNames = [];
    this.searchInput = '';
    this.selectedStudents = [];
    this.emitSelectedStudents();
  }
  emitSelectedStudents(){
    this.studentOutput.emit(this.selectedStudents);
  }
}
