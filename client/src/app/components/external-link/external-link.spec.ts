import { TestBed } from '@angular/core/testing';
import { ExternalLinkComponent } from "./external-link";

describe('ExternalLinkComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalLinkComponent],
    }).compileComponents();
  });

  it('should create the external link component', () => {
    const fixture = TestBed.createComponent(ExternalLinkComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
