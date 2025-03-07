import { TestBed } from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found';

describe(
  'PageNotFoundComponent',
  () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [PageNotFoundComponent],
      }).compileComponents();
    });

    it('should create the PageNotFoundConponent', () => {
      const fixture = TestBed.createComponent(PageNotFoundComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });
  }
);
