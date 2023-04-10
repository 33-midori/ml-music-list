import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdSeriesButtonComponent } from './cd-series-button.component';

describe('CdSeriesButtonComponent', () => {
  let component: CdSeriesButtonComponent;
  let fixture: ComponentFixture<CdSeriesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdSeriesButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdSeriesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
