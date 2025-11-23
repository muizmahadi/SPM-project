import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MataPelajaranComponent } from './mata-pelajaran.component';

describe('MataPelajaranComponent', () => {
  let component: MataPelajaranComponent;
  let fixture: ComponentFixture<MataPelajaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MataPelajaranComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MataPelajaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
