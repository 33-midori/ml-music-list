import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdSeriesListComponent } from './cd-series-list.component';

describe('CdSeriesListComponent', () => {
  let component: CdSeriesListComponent;
  let fixture: ComponentFixture<CdSeriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdSeriesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdSeriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
