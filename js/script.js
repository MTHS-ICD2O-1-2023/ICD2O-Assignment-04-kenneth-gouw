// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

function calculate() {
  let size = document.getElementById("size-container").value
  let topping = document.getElementById("topping-container").value
  let meat = document.getElementById("meat-container").value

  console.log("Size", size)
  console.log("Topping", topping)
  console.log("Meat", meat)

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

  if (topping == "Salsa") {
    toppingPrice = 1.0
  } else if (topping == "Pico de Gallo"){
    toppingPrice = 2.0
  }

  if (meat == "Beef") {
    meatPrice = 5.0
  } else if (meat == "Oxtail"){
    meatPrice = 6.0
  } else if (meat == "Chicken"){
    meatPrice = 7.0
  } else if (meat == "Pork"){
    meatPrice = 4.0
  }

  let totalPrice = sizePrice + meatPrice + toppingPrice

  console.log("Total Price: ", totalPrice)

  document.getElementById("total").innerHTML =
    "Your total will be $" + totalPrice + "! Have a great time"
}