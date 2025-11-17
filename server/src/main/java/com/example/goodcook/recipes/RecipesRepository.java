package com.example.goodcook.recipes;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipesRepository extends JpaRepository<Recipe, Integer>{
}
