import { TestBed } from '@angular/core/testing';

import { MenusService } from './menus.service';

describe('MenusService', () => {
  let service: MenusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
