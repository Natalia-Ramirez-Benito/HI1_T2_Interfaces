import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConosPage } from './conos.page';

describe('ConosPage', () => {
  let component: ConosPage;
  let fixture: ComponentFixture<ConosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
