package com.example.goodcook.ingredients;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Ingredient {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Column
	private String name;
	
	public Ingredient() {}
	
	public Ingredient(Integer id, String name) {
		this.id = id;
		this.name = name;
	}
	
	public Integer getId() {
		return this.id;
	}
	
	public Ingredient setId(Integer id) {
		this.id = id;
		return this;
	}
	
	public String getName() {
		return this.name;
	}
	
	public Ingredient setName(String name) {
		this.name = name;
		return this;
	}
}
