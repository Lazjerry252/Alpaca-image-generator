//creating a variable with an array of my sections
const group_sections = ["background", "neck", "hair", "ears", "accessories", "eyes", "mouth", "leg"];

// Looping through each group_sections and adding functionality to their buttons.
group_sections.forEach((group) => {
   const  btn_container = document.getElementById("js-customize-" + group).children[1].childNodes;
   btn_container.forEach((buttons) => {
        buttons.addEventListener("click", () => {
          const img_sections = document.getElementById("img-" + group);

           if (buttons.classList.contains("option-dont")) {
                img_sections.setAttribute("display", "none");
                img_sections.style.display = "none";
           } else {
                img_sections.style.display = "unset";
                img_sections.setAttribute("src", buttons.children[0].getAttribute("src"));
           }

        });
   });
});

const random_btn = document.querySelector('.random');

//Adding functionality to the random_btn
random_btn.addEventListener("click", () => {
      group_sections.forEach((group) => {
        const btn_container = document.getElementById("js-customize-" + group).children[1];
        //will select randomly when clicked
          btn_container.children[Math.floor(Math.random() * btn_container.childElementCount)].click();
      });
});

const download_btn = document.querySelector('.download');

//Adding functionality to the download_btn
download_btn.addEventListener("click", () => {
     const design_container = document.getElementsByClassName("img-container")[0];
     html2canvas(design_container).then((canvas) => {
         const download_link = document.createElement("a");
         download_link.href = canvas.toDataURL("image/png");
         download_link.download = "Alpaca.png";
         download_link.click();
     });
});
