import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpelletjesComponent } from './spelletjes.component';

describe('SpelletjesComponent', () => {
  let component: SpelletjesComponent;
  let fixture: ComponentFixture<SpelletjesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpelletjesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpelletjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
