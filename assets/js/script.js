const subcategories = {
    web: ["Informational Websites", "E-Commerce", "Blogs and Forums", "Portfolio Websites", "Landing Pages"],
    apps: ["Mobile Apps", "Web Apps", "Gaming Apps" ],
    software: ["Operating Systems", "Productivity Software", "Security Software", "Development Tools", "Database Management", "Graphic and Multimedia Software"]
};

// Function to populate subcategories based on the selected main category
function showSubcategories() {
    const mainCategory = document.getElementById("mainCategory").value;
    const subCategorySelect = document.getElementById("subCategory");
    subCategorySelect.innerHTML = "";

    const subCategoryOptions = subcategories[mainCategory];
    for (let i = 0; i < subCategoryOptions.length; i++) {
        const option = document.createElement("option");
        option.text = subCategoryOptions[i];
        subCategorySelect.add(option);
    }
}

// Handle form submission (you can add your form submission logic here)
const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const mainCategory = orderForm.elements.mainCategory.value;
    const subCategory = orderForm.elements.subCategory.value;
    console.log("Main Category: " + mainCategory);
    console.log("Subcategory: " + subCategory);
    // Add your form submission logic here
});

// Initialize subcategories based on the default selected category
showSubcategories();
