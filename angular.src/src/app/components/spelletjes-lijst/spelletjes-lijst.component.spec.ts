import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpelletjesLijstComponent } from './spelletjes-lijst.component';

describe('SpelletjesLijstComponent', () => {
  let component: SpelletjesLijstComponent;
  let fixture: ComponentFixture<SpelletjesLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpelletjesLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpelletjesLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
