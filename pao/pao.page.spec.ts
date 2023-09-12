import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaoPage } from './pao.page';

describe('PaoPage', () => {
  let component: PaoPage;
  let fixture: ComponentFixture<PaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
