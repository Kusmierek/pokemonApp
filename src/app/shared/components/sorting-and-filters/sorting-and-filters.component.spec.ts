import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingAndFiltersComponent } from './sorting-and-filters.component';

describe('SortingAndFiltersComponent', () => {
  let component: SortingAndFiltersComponent;
  let fixture: ComponentFixture<SortingAndFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortingAndFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortingAndFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
