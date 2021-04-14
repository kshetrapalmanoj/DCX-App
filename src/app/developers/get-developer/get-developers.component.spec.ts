import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDevelopersComponent } from './get-developers.component';

describe('GetDevelopersComponent', () => {
  let component: GetDevelopersComponent;
  let fixture: ComponentFixture<GetDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDevelopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
