import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvenHomeComponent } from './sven-home.component';

describe('SvenHomeComponent', () => {
  let component: SvenHomeComponent;
  let fixture: ComponentFixture<SvenHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvenHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
