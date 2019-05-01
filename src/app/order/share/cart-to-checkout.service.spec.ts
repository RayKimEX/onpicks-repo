import { TestBed } from '@angular/core/testing';

import { CartToCheckoutService } from './cart-to-checkout.service';

describe('CartToCheckoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartToCheckoutService = TestBed.get(CartToCheckoutService);
    expect(service).toBeTruthy();
  });
});
