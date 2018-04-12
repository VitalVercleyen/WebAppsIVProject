import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpelletjesSearchResultComponent } from './spelletjes-search-result.component';

describe('SpelletjesSearchResultComponent', () => {
  let component: SpelletjesSearchResultComponent;
  let fixture: ComponentFixture<SpelletjesSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpelletjesSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpelletjesSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
