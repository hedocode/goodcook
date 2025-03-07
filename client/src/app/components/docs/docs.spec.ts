import { TestBed } from '@angular/core/testing';
import { DocsComponent } from './docs';

describe('DocsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsComponent],
    }).compileComponents();
  });

  it('should create the docs component', () => {
    const fixture = TestBed.createComponent(DocsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
