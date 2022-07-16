package com.devsuperior.dsmeta.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "tb_sales")
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    
    private String sellerName;
    private Integer visited;
    private Integer deals;
    private Double amount;
    private LocalDate date;

    public Sale(){}

    public Sale(Long Id, String sellerName, Integer visited, Integer deals, Double amount, LocalDate date) {
        this.Id = Id;
        this.sellerName = sellerName;
        this.visited = visited;
        this.deals = deals;
        this.amount = amount;
        this.date = date;
    }


    public Long getId() {
        return this.Id;
    }

    public void setId(Long Id) {
        this.Id = Id;
    }

    public String getSellerName() {
        return this.sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

    public Integer getVisited() {
        return this.visited;
    }

    public void setVisited(Integer visited) {
        this.visited = visited;
    }

    public Integer getDeals() {
        return this.deals;
    }

    public void setDeals(Integer deals) {
        this.deals = deals;
    }

    public Double getAmount() {
        return this.amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public LocalDate getDate() {
        return this.date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
