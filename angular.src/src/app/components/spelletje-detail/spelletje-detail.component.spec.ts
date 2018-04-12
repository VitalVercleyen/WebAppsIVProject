import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpelletjeDetailComponent } from './spelletje-detail.component';

describe('SpelletjeDetailComponent', () => {
  let component: SpelletjeDetailComponent;
  let fixture: ComponentFixture<SpelletjeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpelletjeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpelletjeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
