import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBreakupReportComponent } from './category-breakup-report.component';

describe('CategoryBreakupReportComponent', () => {
  let component: CategoryBreakupReportComponent;
  let fixture: ComponentFixture<CategoryBreakupReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryBreakupReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryBreakupReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
