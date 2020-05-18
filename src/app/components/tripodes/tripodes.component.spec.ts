import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripodesComponent } from './tripodes.component';

describe('TripodesComponent', () => {
  let component: TripodesComponent;
  let fixture: ComponentFixture<TripodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
