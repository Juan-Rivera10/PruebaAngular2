import { TestBed } from '@angular/core/testing';

import { InterceptoritemsInterceptor } from './interceptoritems.interceptor';

describe('InterceptoritemsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptoritemsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptoritemsInterceptor = TestBed.inject(InterceptoritemsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
