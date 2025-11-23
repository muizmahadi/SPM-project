import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasaInputComponent } from './masa-input.component';

describe('MasaInputComponent', () => {
  let component: MasaInputComponent;
  let fixture: ComponentFixture<MasaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasaInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
