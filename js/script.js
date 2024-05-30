// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {

  let size = document.getElementById("size-container").value
  let topping = document.getElementById("topping-container").value
  let meat = document.getElementById("meat-container").value

  let sizePrice = 0
  let toppingPrice = 0
  let meatPrice = 0

  if (size == "Small") {
    sizePrice = 5.0
  } else if (size == "Medium"){
    sizePrice = 10.0
  } else if (size == "Large"){
    sizePrice = 15.0
  }

  if (topping == "Small") {
    sizePrice = 5.0
  }else if (size == "Medium"){
    sizePrice = 10.0
  } else if (size == "Large"){
    sizePrice = 15.0
  }


  // Get the selected values for meat and length options
  const Meat = parseInt(
    document.querySelector('input[name="meat-options"]:checked').value
  )
  const Size = parseInt(
    document.querySelector('input[name="size-options"]:checked').value
  )
  const Topping = parseInt(
    document.querySelector('input[name="topping-options"]:checked').value
  )
  // Process
  if (Size === 1) {
    costSize = COST_SMALL
  } else if (Size === 2) {
    costSize = COST_MEDIUM
  }
    else if (Size === 3) {
    costSize = COST_LARGE
  }

  if (Meat === 1) {
    cost = COST_BEEF
  } else if (Meat === 2) {
    cost = COST_PORK
  } else if (Meat === 3) {
    cost = COST_CHICKEN
  } else if (Meat === 4) {
    cost = COST_OXTAIL
  }

  if (Topping === 1) {
    cost = COST_SALSA
  } else if (Topping === 2) {
    cost = COST_PICO_DE_GALLO
  }

  answer = (Size + Topping + Meat) * TAX

  // Output
  document.getElementById("answer").innerHTML =
    "Your total comes to $" + answer + ". Thank you for eating at Chessy Quesadillas!"
}