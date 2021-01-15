import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofolioProjectComponent } from './portofolio-project.component';

describe('PortofolioProjectComponent', () => {
  let component: PortofolioProjectComponent;
  let fixture: ComponentFixture<PortofolioProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortofolioProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortofolioProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
