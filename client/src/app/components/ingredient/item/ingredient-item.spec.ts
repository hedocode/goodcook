import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { IngredientItemComponent } from './ingredient-item';
import { provideHttpClient } from '@angular/common/http';

describe('IngredientItemComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IngredientItemComponent],
            providers: [provideHttpClient(), provideHttpClientTesting()]
        }).compileComponents();
    });

    it('should create the Ingredient Item Component', () => {
        const fixture = TestBed.createComponent(IngredientItemComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should be in creation mode by default', () => {
        const fixture = TestBed.createComponent(IngredientItemComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('#ingredientName')?.textContent).toBe('');
    });

    it('should display ingredient name when provided some ingredient as input', () => {
        const fixture = TestBed.createComponent(IngredientItemComponent);
        const app = fixture.componentInstance;
        app.ingredient = { id: 1, name: 'Test ingredient' };
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('#ingredientName')?.textContent).toContain('Test ingredient');
    });
});
