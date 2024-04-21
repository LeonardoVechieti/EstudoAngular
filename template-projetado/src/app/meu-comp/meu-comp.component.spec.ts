import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuCompComponent } from './meu-comp.component';

describe('MeuCompComponent', () => {
  let component: MeuCompComponent;
  let fixture: ComponentFixture<MeuCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeuCompComponent]
    });
    fixture = TestBed.createComponent(MeuCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
