import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PusatComponent } from './pusat/pusat.component';
import { MataPelajaranComponent } from './mata-pelajaran/mata-pelajaran.component';
import { StudentInputComponent } from './student-input/student-input.component';
import { provideHttpClient } from '@angular/common/http';
import { TarikhInputComponent } from './tarikh-input/tarikh-input.component';
import { MasaInputComponent } from './masa-input/masa-input.component';
@NgModule({
  declarations: [
    AppComponent,
    PusatComponent,
    MataPelajaranComponent,
    StudentInputComponent,
    TarikhInputComponent,
    MasaInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
