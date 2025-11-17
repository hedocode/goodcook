import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecipeItemComponent } from './recipe-item';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RecipeItemComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, BrowserAnimationsModule, RecipeItemComponent],
        }).compileComponents();
    });

    it('should create the Recipe Item Component', () => {
        const fixture = TestBed.createComponent(RecipeItemComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should be in creation mode by default', () => {
        const fixture = TestBed.createComponent(RecipeItemComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('#newRecipeTitle')).toBeTruthy();
    });

    it('should display recipe title when provided some recipe as input', () => {
        const fixture = TestBed.createComponent(RecipeItemComponent);
        const app = fixture.componentInstance;
        app.recipe = { 
            id: 1, 
            title: 'Test Recipe', 
            description: 'Test Description',
            steps: ['Step 1', 'Step 2'],
            ingredients: []
        };
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('#recipeTitle')?.textContent).toContain('Test Recipe');
    });

    it('should toggle edit mode when edit button is clicked', () => {
        const fixture = TestBed.createComponent(RecipeItemComponent);
        const app = fixture.componentInstance;
        app.recipe = { 
            id: 1, 
            title: 'Test Recipe', 
            description: 'Test Description',
            steps: [],
            ingredients: []
        };
        fixture.detectChanges();
        
        expect(app.editMode).toBeFalsy();
        app.toggleEdition();
        expect(app.editMode).toBeTruthy();
    });

    it('should add step to recipe', () => {
        const fixture = TestBed.createComponent(RecipeItemComponent);
        const app = fixture.componentInstance;
        app.recipe = { 
            id: 1, 
            title: 'Test Recipe', 
            description: 'Test Description',
            steps: [],
            ingredients: []
        };
        
        app.addStep();
        expect(app.recipe.steps.length).toBe(1);
    });

    it('should add ingredient to recipe', () => {
        const fixture = TestBed.createComponent(RecipeItemComponent);
        const app = fixture.componentInstance;
        app.recipe = { 
            id: 1, 
            title: 'Test Recipe', 
            description: 'Test Description',
            steps: [],
            ingredients: []
        };
        
        app.addIngredient();
        expect(app.recipe.ingredients.length).toBe(1);
    });

    it('should remove step from recipe', () => {
        const fixture = TestBed.createComponent(RecipeItemComponent);
        const app = fixture.componentInstance;
        app.recipe = { 
            id: 1, 
            title: 'Test Recipe', 
            description: 'Test Description',
            steps: ['Step 1', 'Step 2'],
            ingredients: []
        };
        
        app.removeStep(0);
        expect(app.recipe.steps.length).toBe(1);
        expect(app.recipe.steps[0]).toBe('Step 2');
    });

    it('should remove ingredient from recipe', () => {
        const fixture = TestBed.createComponent(RecipeItemComponent);
        const app = fixture.componentInstance;
        app.recipe = { 
            id: 1, 
            title: 'Test Recipe', 
            description: 'Test Description',
            steps: [],
            ingredients: [
                { id: 1, ingredientId: 1, quantity: 2, unit: 'cups' },
                { id: 2, ingredientId: 2, quantity: 1, unit: 'tbsp' }
            ]
        };
        
        app.removeIngredient(0);
        expect(app.recipe.ingredients.length).toBe(1);
        expect(app.recipe.ingredients[0].ingredientId).toBe(2);
    });
});