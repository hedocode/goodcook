package com.example.goodcook.recipes;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    
    @Column
    private String title;
    
    @Column(length = 1000)
    private String description;
    
    @ElementCollection
    private List<String> steps;
    
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "recipe_id")
    private List<RecipeIngredient> ingredients;
    
    public Recipe() {}
    
    public Recipe(Integer id, String title, String description, List<String> steps, List<RecipeIngredient> ingredients) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.steps = steps;
        this.ingredients = ingredients;
    }
    
    public Integer getId() {
        return this.id;
    }
    
    public Recipe setId(Integer id) {
        this.id = id;
        return this;
    }
    
    public String getTitle() {
        return this.title;
    }
    
    public Recipe setTitle(String title) {
        this.title = title;
        return this;
    }
    
    public String getDescription() {
        return this.description;
    }
    
    public Recipe setDescription(String description) {
        this.description = description;
        return this;
    }
    
    public List<String> getSteps() {
        return this.steps;
    }
    
    public Recipe setSteps(List<String> steps) {
        this.steps = steps;
        return this;
    }
    
    public List<RecipeIngredient> getIngredients() {
        return this.ingredients;
    }
    
    public Recipe setIngredients(List<RecipeIngredient> ingredients) {
        this.ingredients = ingredients;
        return this;
    }
}
