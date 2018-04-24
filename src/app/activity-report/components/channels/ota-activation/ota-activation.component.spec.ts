import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtaActivationComponent } from './ota-activation.component';

describe('OtaActivationComponent', () => {
  let component: OtaActivationComponent;
  let fixture: ComponentFixture<OtaActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtaActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtaActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
