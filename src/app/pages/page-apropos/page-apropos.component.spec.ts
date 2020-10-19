import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAProposComponent } from './page-apropos.component';

describe('PageAProposComponent', () => {
  let component: PageAProposComponent;
  let fixture: ComponentFixture<PageAProposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAProposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAProposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
