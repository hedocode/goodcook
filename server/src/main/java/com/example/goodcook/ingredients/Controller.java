package com.example.goodcook.ingredients;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/ingredients")
@CrossOrigin("http://localhost:4200")
public class Controller {
	private final Repository ingredientRepository;
	
	public Controller(Repository ingredientRepository) {
		this.ingredientRepository = ingredientRepository;
	}
	
	@GetMapping("/list")
	ResponseEntity<List<Ingredient>> home() {
		return ResponseEntity.ok(this.ingredientRepository.findAll());
	}
	
	@GetMapping("/get/{id}")
	ResponseEntity<Optional<Ingredient>> findById(@PathVariable Integer id, HttpServletResponse res) {
		Optional<Ingredient> foundItem = ingredientRepository.findById(id);
		if(foundItem.isEmpty()) {
			return new ResponseEntity<Optional<Ingredient>>(HttpStatus.NOT_FOUND);
		}
		return ResponseEntity.ok(foundItem);
	}
	
	@PostMapping("/add")
	ResponseEntity<Ingredient> createIngredient(@RequestBody Ingredient ingredient) {
		if(ingredient.getId() != null) {
			ingredient.setId(null);
		}
		ingredientRepository.save(ingredient);
		return new ResponseEntity<Ingredient>(ingredient, HttpStatus.OK);
	}
	
	@PutMapping("/update/{id}")
	ResponseEntity<Ingredient> updateIngredient(@PathVariable Integer id, @RequestBody Ingredient ingredient) {
		if(ingredientRepository.findById(id).isEmpty()) {
			// Resource does not exists yet use post ?
			return new ResponseEntity<Ingredient>(HttpStatus.NO_CONTENT);
		} else {
			Ingredient databaseIngredient = ingredientRepository.findById(id).get();
			databaseIngredient.setName(ingredient.getName());
			ingredientRepository.save(databaseIngredient);
			return ResponseEntity.ok(ingredient);
		}
	}

	@DeleteMapping("/remove/{id}")
	ResponseEntity<String> delete(@PathVariable Integer id) {
		ingredientRepository.deleteById(id);
		return new ResponseEntity<String>("Deleted", HttpStatus.NO_CONTENT);
	}
}
