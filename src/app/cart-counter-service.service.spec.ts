import { TestBed } from '@angular/core/testing';

import { CartCounterServiceService } from './cart-counter-service.service';

describe('CartCounterServiceService', () => {
  let service: CartCounterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartCounterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
