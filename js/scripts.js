
// Get and display 12 random users
    // With information provided from The Random User Generator API, send a request to the API
      // and use the response data to display 12 users, along with some basic information for each:
$(document).ready(function() {
  let api = 'https://randomuser.me/api/?results=12&nat=us&exc=gender,login,registered,id,phone';
  $.getJSON(api, function(data){
    var employeeHTML = '';
      $.each(data.results, function(index, employee){
        // Use the response data to display 12 users, along with some basic information for each:
        employeeHTML += '<div class="card">';
        employeeHTML += '<div class="card-img-container">';
        // Image:
        employeeHTML += '<img class="card-img" src="' + employee.picture.large + '" alt="profile picture">';
        employeeHTML += '</div>'; // close card-img-container div
        employeeHTML += '<div class="card-info-container">';
        // First and Last Name:
        employeeHTML += '<h3 id="name" class="card-name cap">' + employee.name.first + ' ' + employee.name.last + '</h3>';
        // Email:
        employeeHTML += '<p class="card-text">' + employee.email + '</p>';
        // City & State:
        employeeHTML += '<p class="card-text cap">' + employee.location.city + ', ' + employee.location.state + '</p>';
        employeeHTML += '</div>'; // close card-info-container div
        employeeHTML += '</div>'; // close card div
      }); // end each
      $('#gallery').html(employeeHTML);
    }); // end getJSON
}); // end ready

      
            
            
            
            


// Refer to the mockups and the comments in the index.html file for an example of what info should be displayed on the page and how it should be styled.

// Create a modal window
    // When any part of an employee item in the directory is clicked,   
        // a modal window should pop up with the following details displayed:
            // Image
            // Name
            // Email
            // City or location
            // Cell Number
            // Detailed Address, including street name and number, state or country, and post code.
            // Birthday

// Make sure there’s a way to close the modal window

// Refer to the mockups and the comments in the index.html file for an example of what info should be displayed on the page and how it should be styled.