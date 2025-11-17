package com.example.goodcook.recipes;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/recipes")
@CrossOrigin("http://localhost:4200")
public class RecipesController {

	private final RecipesRepository recipeRepository;

	public RecipesController(RecipesRepository recipeRepository) {
		this.recipeRepository = recipeRepository;
	}

	@GetMapping("/list")
	ResponseEntity<List<Recipe>> home() {
		return ResponseEntity.ok(this.recipeRepository.findAll());
	}

	@GetMapping("/get/{id}")
	ResponseEntity<Optional<Recipe>> findById(@PathVariable Integer id, HttpServletResponse res) {
		Optional<Recipe> foundItem = recipeRepository.findById(id);
		if (foundItem.isEmpty()) {
			return new ResponseEntity<Optional<Recipe>>(HttpStatus.NOT_FOUND);
		}
		return ResponseEntity.ok(foundItem);
	}

	@PostMapping("/add")
	ResponseEntity<Recipe> createRecipe(@RequestBody Recipe recipe) {
		if (recipe.getId() != null) {
			recipe.setId(null);
		}
		recipeRepository.save(recipe);
		return new ResponseEntity<Recipe>(recipe, HttpStatus.OK);
	}

	@PutMapping("/update/{id}")
	ResponseEntity<Recipe> updateRecipe(@PathVariable Integer id, @RequestBody Recipe recipe) {
		if (recipeRepository.findById(id).isEmpty()) {
			// Resource does not exists yet use post ?
			return new ResponseEntity<Recipe>(HttpStatus.NO_CONTENT);
		} else {
			Recipe databaseRecipe = recipeRepository.findById(id).get();
			databaseRecipe.setTitle(recipe.getTitle());
			databaseRecipe.setDescription(recipe.getDescription());
			databaseRecipe.setSteps(recipe.getSteps());
			databaseRecipe.setIngredients(recipe.getIngredients());
			recipeRepository.save(databaseRecipe);
			return ResponseEntity.ok(recipe);
		}
	}

	@DeleteMapping("/remove/{id}")
	ResponseEntity<String> delete(@PathVariable Integer id) {
		recipeRepository.deleteById(id);
		return new ResponseEntity<String>("Deleted", HttpStatus.NO_CONTENT);
	}
}