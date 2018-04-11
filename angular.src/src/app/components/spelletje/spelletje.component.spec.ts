import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpelletjeComponent } from './spelletje.component';

describe('SpelletjeComponent', () => {
  let component: SpelletjeComponent;
  let fixture: ComponentFixture<SpelletjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpelletjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpelletjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
