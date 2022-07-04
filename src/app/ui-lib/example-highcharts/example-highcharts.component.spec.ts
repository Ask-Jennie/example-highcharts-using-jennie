import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleHighchartsComponent } from './example-highcharts.component';

describe('ExampleHighchartsComponent', () => {
  let component: ExampleHighchartsComponent;
  let fixture: ComponentFixture<ExampleHighchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleHighchartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleHighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
