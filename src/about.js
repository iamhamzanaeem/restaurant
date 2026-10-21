function about(){
    const aboutContent = document.createElement("div");
    aboutContent.id = "about-content";
    
    const aboutUsContent = document.createElement("div");
    aboutUsContent.id = "about-us-content";
    const mainHeading = document.createElement("h1");
    mainHeading.textContent = "About Zauq Restaurant";
    aboutUsContent.appendChild(mainHeading);
    

    const storynmission = document.createElement("div");
    storynmission.id = "storynmission";
    const ourStory = document.createElement("div");
    ourStory.id = "our-story";
    const ourStoryHeading = document.createElement("h2");
    ourStoryHeading.textContent = "Our Story";
    const ourStoryContent = document.createElement("p");
    ourStoryContent.textContent = "At Zauq Restaurant, we believe that great food brings people together. Our goal is to serve delicious meals inspired by traditional flavours and prepared with care.";
    ourStory.appendChild(ourStoryHeading);
    ourStory.appendChild(ourStoryContent);
    storynmission.appendChild(ourStory);
    
    const ourMission = document.createElement("div");
    ourMission.id = "our-mission";
    const ourMissionHeading = document.createElement("h2");
    ourMissionHeading.textContent = "Our Mission";
    const ourMissionContent = document.createElement("p");
    ourMissionContent.textContent = "To provide fresh, flavourful food, friendly service, and a welcoming atmosphere where every guest feels at home.";
    ourMission.appendChild(ourMissionHeading);
    ourMission.appendChild(ourMissionContent);
    storynmission.appendChild(ourMission);
    aboutUsContent.appendChild(storynmission)

    aboutContent.appendChild(aboutUsContent);

    const why_choose_us = document.createElement("div");
    why_choose_us.id = "why-choose-us";
    const whyChooseUsHeading = document.createElement("h2");
    whyChooseUsHeading.textContent = "Why Choose Us";

    const whyUs = document.createElement("div");
    whyUs.classList.add("why-us-boxes");

    const headings = ["Fresh Ingredients", " Authentic Flavours", "Friendly Service", "Comfortable Atmosphere"];
    const paras = ["Quality ingredients in every meal.", " Traditional tastes with a touch of Zauq.", "We treat every guest with care and respect.", "A place to enjoy good food with family and friends."];

    for(let i = 0; i < 4; i++){
        const whyUsBoxContent = document.createElement("div");
        whyUsBoxContent.classList.add("why-us-box-content");
        const whyUs_h2 = document.createElement("h2");
        whyUs_h2.textContent = headings[i];
        const whyUs_p = document.createElement("p");
        whyUs_p.textContent = paras[i];
        whyUsBoxContent.appendChild(whyUs_h2);
        whyUsBoxContent.appendChild(whyUs_p);
        whyUs.appendChild(whyUsBoxContent);
    }
    why_choose_us.appendChild(whyChooseUsHeading);
    why_choose_us.appendChild(whyUs);
    aboutContent.appendChild(why_choose_us)
    return aboutContent;
}

export default about;