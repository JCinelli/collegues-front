import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosCollegueComponent } from './infos-collegue.component';

describe('InfosCollegueComponent', () => {
  let component: InfosCollegueComponent;
  let fixture: ComponentFixture<InfosCollegueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosCollegueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
