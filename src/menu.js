
function menu() {
    const menuContent = document.createElement("div");
    menuContent.id = "menu-content";

    const mainHeading = document.createElement("h1");
    mainHeading.id = "menu-heading";
    mainHeading.textContent = "Zauq Restaurant — Menu";
    menuContent.appendChild(mainHeading);

    //----------------------- starters content here--------------------------
    const startersPack = document.createElement("div");
    startersPack.id = "starters";

    const startersHeading = document.createElement("h2");
    startersHeading.textContent = "Starters";

    const startersItemNames = ["Chicken Corn Soup", "Crispy Chicken Wings", "French Fries"];
    const startersItemsPrice = [350, 550, 300];
    
    startersPack.appendChild(startersHeading);
    for(let i = 0; i < 3; i++){
        const starterItem = document.createElement("div");
        starterItem.classList.add("starter-items");
        const starterItemName = document.createElement("div");
        starterItemName.textContent = startersItemNames[i];
        const starterItemPrice = document.createElement("div");
        starterItemPrice.textContent = startersItemsPrice[i];
        starterItem.appendChild(starterItemName);
        starterItem.appendChild(starterItemPrice);
        startersPack.appendChild(starterItem);
    }
    menuContent.appendChild(startersPack);
// ----------------------starters content ends here ------------------------


// ------------------main courses starts here------------------
    const mainCoursesPack = document.createElement("div");
    mainCoursesPack.id = "main-content";

    const mainCoursesHeading = document.createElement("h2");
    mainCoursesHeading.textContent = "Main Courses";

    const mainCourseitemNames = ["Chicken Biryani", "Chicken Karahi", "Beef Burger", "Chicken Flavours", "Beef Burger", "Chicken Karahi", "Chicken Karahi", "Beef Burger"];
    const mainCourseitemsPrice = ["Rs. 450", "Rs. 1400", "Rs. 650", "Rs. 450", "Rs. 650", "Rs. 650", "Rs. 2500", "Rs. 1400"];
    
    mainCoursesPack.appendChild(mainCoursesHeading);
    for(let i = 0; i < 8; i++){
        const mainCourseItem = document.createElement("div");
        mainCourseItem.classList.add("mainCourse-items");
        const mainCourseItemName = document.createElement("div");
        mainCourseItemName.textContent = mainCourseitemNames[i];
        const mainCourseItemPrice = document.createElement("div");
        mainCourseItemPrice.textContent = mainCourseitemsPrice[i];
        mainCourseItem.appendChild(mainCourseItemName);
        mainCourseItem.appendChild(mainCourseItemPrice);
        mainCoursesPack.appendChild(mainCourseItem);
    }
    menuContent.appendChild(mainCoursesPack);

// ------------------------main content ends here---------------------------


// ----------------------------drinks content starts here -------------------
    const drinksPack = document.createElement("div");
    drinksPack.id = "drinks";

    const drinksHeading = document.createElement("h2");
    drinksHeading.textContent = "Drinks";

    const drinksItemNames = ["Fresh Lime", "Mint Mangrita", "Soft Drink"];
    const drinksItemsPrice = ["Rs. 200", "Rs. 350", "Rs. 150"];
    
    drinksPack.appendChild(drinksHeading);
    for(let i = 0; i < 3; i++){
        const drinkItem = document.createElement("div");
        drinkItem.classList.add("drinks-items");
        const drinkItemName = document.createElement("div");
        drinkItemName.textContent = drinksItemNames[i];
        const drinkItemPrice = document.createElement("div");
        drinkItemPrice.textContent = drinksItemsPrice[i];
        drinkItem.appendChild(drinkItemName);
        drinkItem.appendChild(drinkItemPrice);
        drinksPack.appendChild(drinkItem);
    }
    menuContent.appendChild(drinksPack);


    // ------------drinks content ends here---------------------


    // ----------------------dessert content starts here---------------------
        const dessertsPack = document.createElement("div");
    dessertsPack.id = "desserts";

    const dessertsHeading = document.createElement("h2");
    dessertsHeading.textContent = "Desserts";

    const dessertsItemNames = ["Chocolate Cake", "Gulab Jamun", "Ice Cream"];
    const dessertsItemsPrice = ["Rs. 350", "Rs. 200", "Rs. 250"];
    
    dessertsPack.appendChild(dessertsHeading);
    for(let i = 0; i < 3; i++){
        const dessertItem = document.createElement("div");
        dessertItem.classList.add("desserts-items");
        const dessertItemName = document.createElement("div");
        dessertItemName.textContent = dessertsItemNames[i];
        const dessertItemPrice = document.createElement("div");
        dessertItemPrice.textContent = dessertsItemsPrice[i];
        dessertItem.appendChild(dessertItemName);
        dessertItem.appendChild(dessertItemPrice);
        dessertsPack.appendChild(dessertItem);
    }
    menuContent.appendChild(dessertsPack);
    // -----------------desserts content ends here-------------------------

    return menuContent
}

export default menu;