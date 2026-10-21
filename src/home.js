function homePage() {
    const homeContent = document.createElement("div");
    const homeMainContent = document.createElement("div");
    const overlayHomePage = document.createElement("div");
    overlayHomePage.classList.add("overlayHomePage")
    homeMainContent.classList.add("homeMainContent");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Zauq Restaurant";
    const content = document.createElement("p");
    content.textContent = "Experience delicious food, freshly prepared with quality ingredients and served with care.";

    homeMainContent.appendChild(overlayHomePage);
    homeMainContent.appendChild(heading);
    homeMainContent.appendChild(content);
    homeContent.appendChild(homeMainContent);
    const headings = ["Fresh Ingrediants", "Traditional Flavours", "Warm Atmosphere"];
    const paras = ["Experience delicious food freshly prepared with quality ingredients.", "Experience delicious food freshly prepared with quality ingredients.", "Warm atmosphere freshly prepared in atmosphere and serve with care."]
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    for (let i = 0; i < 3; i++) {
        const specialities = document.createElement("div");
        specialities.classList.add("specialities");
        const h2 = document.createElement("h2");
        h2.classList.add("h2-of-specialities");
        h2.textContent = headings[i];
        const p = document.createElement("p");
        p.classList.add("p-of-specialities")
        p.textContent = paras[i];
        specialities.appendChild(h2);
        specialities.appendChild(p);
        wrapper.appendChild(specialities);
    }
    homeContent.appendChild(wrapper);
    return homeContent;
}
export default homePage;