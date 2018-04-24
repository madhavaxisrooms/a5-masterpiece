import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockChannelComponent } from './block-channel.component';

describe('BlockChannelComponent', () => {
  let component: BlockChannelComponent;
  let fixture: ComponentFixture<BlockChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
