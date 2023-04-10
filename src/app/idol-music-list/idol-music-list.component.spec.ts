import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdolMusicListComponent } from './idol-music-list.component';

describe('IdolMusicListComponent', () => {
  let component: IdolMusicListComponent;
  let fixture: ComponentFixture<IdolMusicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdolMusicListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdolMusicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
