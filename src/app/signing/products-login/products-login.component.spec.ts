import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLoginComponent } from './products-login.component';

describe('ProductsLoginComponent', () => {
  let component: ProductsLoginComponent;
  let fixture: ComponentFixture<ProductsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
