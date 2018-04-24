import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsSubMenuComponent } from './channels-sub-menu.component';

describe('ChannelsSubMenuComponent', () => {
  let component: ChannelsSubMenuComponent;
  let fixture: ComponentFixture<ChannelsSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelsSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelsSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
