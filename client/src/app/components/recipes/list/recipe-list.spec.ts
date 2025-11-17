import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecipeListComponent } from './recipe-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RecipeListComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, BrowserAnimationsModule, RecipeListComponent],
        }).compileComponents();
    });

    it('should create the Recipe List Component', () => {
        const fixture = TestBed.createComponent(RecipeListComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should start with empty recipes array', () => {
        const fixture = TestBed.createComponent(RecipeListComponent);
        const app = fixture.componentInstance;
        expect(app.recipes).toEqual([]);
    });

    it('should add recipe to list', () => {
        const fixture = TestBed.createComponent(RecipeListComponent);
        const app = fixture.componentInstance;
        const testRecipe = { 
            id: 1, 
            title: 'Test Recipe', 
            description: 'Test Description',
            steps: ['Step 1'],
            ingredients: []
        };
        
        app.addRecipe(testRecipe);
        expect(app.recipes.length).toBe(1);
        expect(app.recipes[0]).toEqual(testRecipe);
    });

    it('should remove recipe from list', () => {
        const fixture = TestBed.createComponent(RecipeListComponent);
        const app = fixture.componentInstance;
        const testRecipe1 = { 
            id: 1, 
            title: 'Test Recipe 1', 
            description: 'Test Description 1',
            steps: [],
            ingredients: []
        };
        const testRecipe2 = { 
            id: 2, 
            title: 'Test Recipe 2', 
            description: 'Test Description 2',
            steps: [],
            ingredients: []
        };
        
        app.recipes = [testRecipe1, testRecipe2];
        app.removeRecipe(1);
        
        expect(app.recipes.length).toBe(1);
        expect(app.recipes[0].id).toBe(2);
    });

    it('should display loading message initially', () => {
        const fixture = TestBed.createComponent(RecipeListComponent);
        const app = fixture.componentInstance;
        app.isLoading = true;
        fixture.detectChanges();
        
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent).toContain('Loading recipes...');
    });
});