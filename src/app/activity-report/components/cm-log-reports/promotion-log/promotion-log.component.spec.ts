import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionLogComponent } from './promotion-log.component';

describe('PromotionLogComponent', () => {
  let component: PromotionLogComponent;
  let fixture: ComponentFixture<PromotionLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
