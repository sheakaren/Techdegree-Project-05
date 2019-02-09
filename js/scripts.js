

    // With information provided from The Random User Generator API, send a request to the API
      // and use the response data to display 12 users, along with some basic information for each:
$(document).ready(function() {
  let api = 'https://randomuser.me/api/?results=12&nat=us&exc=gender,login,registered,id,phone';
  $.getJSON(api, function(data){
    console.log(data); // Logs the array of employee data to the console.
    var employeeHTML = '';
    // Get and display 12 random users
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
      }); // end $.each
      $('#gallery').html(employeeHTML); // append to page in gallery ID

// Create a modal window
$('div .card').click(function() {
      let modalWindow = '';
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
        modalWindow += '<p class="modal-text">' + employee.cell + '</p>';
        // Detailed Address, including street name and number, state or country, and post code:
        modalWindow += '<p class="modal-text">' + employee.location.street + ', ' + employee.location.city + ', ' + employee.location.state + ' ' + employee.location.postcode + '</p>';
        // Birthday:
        modalWindow += '<p class="modal-text">' + employee.dob.date + '</p>';
        modalWindow += '</div>' // close modal div
        modalWindow += '</div>' // close modal-container div

// 
// This part isn't working yet
// 

        // Make sure there’s a way to close the modal window:
        $('#modal-close-btn').click(function() {
          $('.modal-container').hide();
        }); // $('#modal-close-btn').click

// 
// 
// 

      }); // end $.each
      $('body').html(modalWindow); // append to body of page
      
      }); // end $('div .card').click




    }); // end $.getJSON
}); // end $(document).ready