jQuery(document).ready(function($) {
    "use strict";
  
    //Contact
    $('form.contactForm').submit(function() {
      var f = $(this).find('.form-group'),
        ferror = false,
        emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
  
      f.children('input').each(function() { // run all inputs
  
        var i = $(this); // current input
        var rule = i.attr('data-rule');
  
        if (rule !== undefined) {
          var ierror = false; // error flag for current input
          var pos = rule.indexOf(':', 0);
          if (pos >= 0) {
            var exp = rule.substr(pos + 1, rule.length);
            rule = rule.substr(0, pos);
          } else {
            rule = rule.substr(pos + 1, rule.length);
          }
  
          switch (rule) {
            case 'required':
              if (i.val() === '') {
                ferror = ierror = true;
              }
              break;
  
            case 'minlen':
              if (i.val().length < parseInt(exp)) {
                ferror = ierror = true;
              }
              break;
            case 'email':
              if (!emailExp.test(i.val())) {
                ferror = ierror = true;
              }
              break;
  
            case 'checked':
              if (! i.is(':checked')) {
                ferror = ierror = true;
              }
              break;
  
            case 'regexp':
              exp = new RegExp(exp);
              if (!exp.test(i.val())) {
                ferror = ierror = true;
              }
              break;
          }
          i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
        }
      });
      f.children('textarea').each(function() { // run all inputs
  
        var i = $(this); // current input
        var rule = i.attr('data-rule');
  
        if (rule !== undefined) {
          var ierror = false; // error flag for current input
          var pos = rule.indexOf(':', 0);
          if (pos >= 0) {
            var exp = rule.substr(pos + 1, rule.length);
            rule = rule.substr(0, pos);
          } else {
            rule = rule.substr(pos + 1, rule.length);
          }
  
          switch (rule) {
            case 'required':
              if (i.val() === '') {
                ferror = ierror = true;
              }
              break;
  
            case 'minlen':
              if (i.val().length < parseInt(exp)) {
                ferror = ierror = true;
              }
              break;
          }
          i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
        }
      });
      if (ferror) return false;
      else var str = $(this).serialize();
      var action = $(this).attr('action');
      if( ! action ) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var company = document.getElementById("company").value;
        var category = document.getElementById("mainCategory").value;
        var subcategory = document.getElementById("subCategory").value;
        var description = document.getElementById("website-description").value;
        var budget = document.getElementById("budget").value;
        var files = document.getElementById("file-upload").files;

        // You can now use these variables for further processing
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Phone: " + phone);
        console.log("Company: " + company);
        console.log("Category: " + category);
        console.log("Subcategory: " + subcategory);
        console.log("Description: " + description);
        console.log("Budget: " + budget);
        console.log("Files: " + files.length + " file(s) selected");

        var formData = new FormData();

        // Add the file input to the FormData object
        var filesInput = document.getElementById("file-upload");
        for (var i = 0; i < filesInput.files.length; i++) {
          formData.append("file[]", filesInput.files[i]);
        }
        
        // Add other form fields to the FormData object
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("company", company);
        formData.append("category", category);
        formData.append("subcategory", subcategory);
        formData.append("description", description);
        formData.append("budget", budget);
        
        // Create an XMLHttpRequest object
        var xhr = new XMLHttpRequest();
        
        // Configure the request
        xhr.open("POST", "order-form/order.php", true);
        
        // Set up an event handler to handle the response
        xhr.onload = function () {
          if (xhr.status === 200) {
            // Request was successful, handle the response here
            console.log(xhr.responseText);
            
          } else {
            // Request failed
            console.error("Request failed with status: " + xhr.status);
            
          }
        };
        
        // Send the FormData object to the PHP script
        xhr.send(formData);


      }
      
    
      return false;
    });
  
  });
