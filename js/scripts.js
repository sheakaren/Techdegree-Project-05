
// With information provided from The Random User Generator API, send a request to the API
  // and use the response data to display 12 users, along with some basic information for each:

$(document).ready(function() {
  let api = 'https://randomuser.me/api/?results=12&nat=us,ca&exc=gender,login,registered,id,phone';
  $.getJSON(api, function(data){
    let employeeData = data.results; // storing the array in a variable to use for the modal window
    console.log(employeeData, 'employeeData variable'); // test to make sure the variable is stored correctly

// Get and display 12 random users
    let employeeHTML = ''; // variable to store the entirety of what's about to be appended to it
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

        // Close the divs
        employeeHTML += '</div>'; 
        employeeHTML += '</div>'; 
        $('#gallery').html(employeeHTML); // append to page in gallery ID
      }); // end $.each

// Create a modal window
    let modalWindow = ''; // variable to store the entirety of what's about to be appended to it
       // When any part of an employee item in the directory is clicked,   
         // a modal window should pop up with the following details displayed:
      $.each(data.results, function(index, employee){
        modalWindow += '<div class="modal-container">';
        modalWindow += '<div class="modal">';
        modalWindow += '<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>';
        modalWindow += '<div class="modal-info-container">';

        // Image:
        modalWindow += '<img class="modal-img" src="' + employee.picture.large + '" alt="profile picture">';

        // Name:
        modalWindow += '<h3 id="name" class="modal-name cap">' + employee.name.first + ' ' + employee.name.last + '</h3>';

        // Email:
        modalWindow += '<p class="modal-text">' + employee.email + '</p>';

        // City & State:
        modalWindow += '<p class="modal-text cap">' + employee.location.city + ', ' + employee.location.state + '</p>';
        modalWindow += '<hr>';

        // Cell Number:
        modalWindow += '<p class="modal-text"><b>' + 'Cell Phone:' + '</b>' + ' ' + employee.cell + '</p>';

        // Detailed Address, including street name and number, state or province, and post code:
        modalWindow += '<p class="modal-text cap"><b>' + 'Address:' + '</b>' + '<br>';
        modalWindow += employee.location.street + '<br>' + employee.location.city +  ', ' + employee.location.state + ' ' + employee.location.postcode + '</p>';

        // Age & Birthday:
        modalWindow += '<p class="modal-text"><b>' + 'Age:' + '</b>' + ' ' + employee.dob.age + '</p>';
        modalWindow += '<p class="modal-text"><b>' + 'DOB:' + '</b>' + ' ' + employee.dob.date.slice(0, 10) + '</p>';

        // Close the divs
        modalWindow += '</div>';
        modalWindow += '</div>';
      }); // end $.each

      $('body').append('<div id="modal-window-div">'); // create a new div to put the modalWindow in
      $('#modal-window-div').html(modalWindow).hide(); // append to body of page and hide upon load

        // Make sure there’s a way to close the modal window:
        $('div .modal-close-btn').click(function() {
          // console.log('click'); // Test
          $('#modal-window-div').hide();
        }); // $('#modal-close-btn').click
        
        // Shows the modal window when you click on an info card
        $('div .card').click(function() {
          $('#modal-window-div').show();
        }); // end $('div .card').click

    }); // end $.getJSON
  }); // end $(document).ready