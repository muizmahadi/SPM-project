import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected typo from `styleUrl` to `styleUrls`
})
export class AppComponent {
  title = 'attendance-SPM-2024';
  pusatPassed = '';
  mataPelajaranPassed = '';
  tarikhPassed ='';
  masaPassed = '';
  studentPassed :any[]=[];
  lengthPassed :any ='';

  // Event handler for Pusat
  onPusatPassed(pusat: string): void {
    this.pusatPassed = pusat;
  }
  onTarikhPassed (tarikh : string):void{
    this.tarikhPassed = tarikh;
  }
  onMasaPassed (masa : string):void{
    this.masaPassed = masa;
  }
  onStudentPassed (student : any=[]):void{
    this.studentPassed = student;
  }
  onLengthPassed (length : number):void{
    this.lengthPassed = length;
  }

  // Event handler for Mata Pelajaran
  onMatapelajaranPassed(mataPelajaran: string): void {
    this.mataPelajaranPassed = mataPelajaran;
  }

  printPage() {

    const printContent = `
      <h2 style="text-align:center;">LAPORAN SPM SMK ABDUL JALIL 2025</h2>
      <p style="font-size: 12px;"><strong>Pusat:</strong> ${this.pusatPassed}</p>
      <p style="font-size: 12px;"><strong>Tarikh:</strong> ${this.tarikhPassed}</p>
      <p style="font-size: 12px;"><strong>Masa:</strong> ${this.masaPassed}</p>
      <p style="font-size: 12px;"><strong>Jumlah:</strong> ${this.lengthPassed-this.studentPassed.length}/${this.lengthPassed}</p>
      <p style="font-size: 12px;"><strong>Mata Pelajaran:</strong> ${this.mataPelajaranPassed}</p>
      ${
        this.studentPassed.length > 0
          ? `<table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
              <thead>
                <tr style="border: 1px solid black;">
                  <th style="border: 1px solid black; padding: 5px;font-size: 12px;">Bil</th>
                  <th style="border: 1px solid black; padding: 5px;font-size: 12px;">Nama</th>
                  <th style="border: 1px solid black; padding: 5px;font-size: 12px;">Angka Giliran</th>
                </tr>
              </thead>
              <tbody>
                ${this.studentPassed
                  .map(
                    (student, index) => `
                      <tr style="border: 1px solid black;">
                        <td style="border: 1px solid black; padding: 5px;font-size: 12px;">${index + 1}</td>
                        <td style="border: 1px solid black; padding: 5px;font-size: 12px;">${student.nama_calon}</td>
                        <td style="border: 1px solid black; padding: 5px;font-size: 12px;">${student.a_giliran}</td>
                      </tr>
                    `
                  )
                  .join('')}
              </tbody>
            </table>`
          : '<p style="font-size: 12px;text-align:center;">Semua murid hadir.</p>'
      }
      <p style="font-size: 12px;margin-top:40px;">Disediakan oleh: </p>
      <p>...................................</p>
      <p style="font-size: 12px;">Nama: </p>      
    `;

    const newWindow = window.open('', '_blank', 'width=800, height=600');
    if (newWindow) {
      newWindow.document.open();
      newWindow.document.write(printContent);
      newWindow.document.close();
      newWindow.print();
    }
  }
}
