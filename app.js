
// Initiate Github
const github = new Github;

// UI
const ui = new UI;

// Search input 
const searchInput = document.getElementById('searchUser');


searchInput.addEventListener('keyup', (e) => {
   const userText = e.target.value;

   if(userText !== '') {
      github.getUser(userText)
         .then(data => {
            // Make http call
            if(data.profile.message === 'Not Found') {
               // show alert
               ui.showAlert('User not found', 'alert alert-danger')
            } else {
               // show the profile
               ui.showProfile(data.profile);
               ui.showRepos(data.repos);
            }
         })
   } else {
      // clear the profile
      ui.clearProfile();
   }
});


