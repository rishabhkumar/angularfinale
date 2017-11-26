import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishblogComponent } from './publishblog.component';

describe('PublishblogComponent', () => {
  let component: PublishblogComponent;
  let fixture: ComponentFixture<PublishblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
