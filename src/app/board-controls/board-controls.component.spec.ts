import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardControlsComponent } from './board-controls.component';

describe('BoardControlsComponent', () => {
  let component: BoardControlsComponent;
  let fixture: ComponentFixture<BoardControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
