package com.example.goodcook.recipes;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class RecipeIngredient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    
    @Column
    private Integer ingredientId;
    
    @Column
    private Double quantity;
    
    @Column
    private String unit;
    
    public RecipeIngredient() {}
    
    public RecipeIngredient(Integer id, Integer ingredientId, Double quantity, String unit) {
        this.id = id;
        this.ingredientId = ingredientId;
        this.quantity = quantity;
        this.unit = unit;
    }
    
    public Integer getId() {
        return this.id;
    }
    
    public RecipeIngredient setId(Integer id) {
        this.id = id;
        return this;
    }
    
    public Integer getIngredientId() {
        return this.ingredientId;
    }
    
    public RecipeIngredient setIngredientId(Integer ingredientId) {
        this.ingredientId = ingredientId;
        return this;
    }
    
    public Double getQuantity() {
        return this.quantity;
    }
    
    public RecipeIngredient setQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    
    public String getUnit() {
        return this.unit;
    }
    
    public RecipeIngredient setUnit(String unit) {
        this.unit = unit;
        return this;
    }
}