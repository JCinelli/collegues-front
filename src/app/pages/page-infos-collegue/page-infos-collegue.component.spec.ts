import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfosCollegueComponent } from './page-infos-collegue.component';

describe('PageInfosCollegueComponent', () => {
  let component: PageInfosCollegueComponent;
  let fixture: ComponentFixture<PageInfosCollegueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInfosCollegueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInfosCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
