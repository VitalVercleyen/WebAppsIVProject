import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillekeurigSpelletjeComponent } from './willekeurig-spelletje.component';

describe('WillekeurigSpelletjeComponent', () => {
  let component: WillekeurigSpelletjeComponent;
  let fixture: ComponentFixture<WillekeurigSpelletjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillekeurigSpelletjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillekeurigSpelletjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
