import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarikhInputComponent } from './tarikh-input.component';

describe('TarikhMasaInputComponent', () => {
  let component: TarikhInputComponent;
  let fixture: ComponentFixture<TarikhInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarikhInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarikhInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
