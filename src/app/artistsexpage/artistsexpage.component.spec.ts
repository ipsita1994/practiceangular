import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsexpageComponent } from './artistsexpage.component';

describe('ArtistsexpageComponent', () => {
  let component: ArtistsexpageComponent;
  let fixture: ComponentFixture<ArtistsexpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsexpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsexpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
