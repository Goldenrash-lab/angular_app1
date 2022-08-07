import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameBannerComponent } from './name-banner.component';

describe('NameBannerComponent', () => {
  let component: NameBannerComponent;
  let fixture: ComponentFixture<NameBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
