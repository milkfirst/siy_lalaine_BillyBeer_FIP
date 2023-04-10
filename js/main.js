console.log("hello")

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", reveal);
  
    function reveal() {
      var reveals = document.querySelectorAll("#leftContent, #rightContent");
  
      for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
  
        if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add("is-visible");
        } else {
          reveals[i].classList.remove("is-visible");
        }
      }
    }
  });

  const teamMembers = [
    {
      name: 'Team Member 1',
      imgSrc: 'images/team-member-1.png',
      info: 'Billy Carter was well-known for his love of beer and even had his own brand of beer and decided to create "Billy Beer." He was often seen drinking and promoting the brand, which became popular during the late 1970s. Billy is so fondness of beer that it remained a defining aspect of his personality and public image.'
    },
    {
      name: 'Team Member 2',
      imgSrc: 'images/.png',
      info: 'Lalaine was never a fan of beer and prefers hearty bubble tea instead. This is probably part of her personality because she likes it so much. She loved recreating the Billy Beer brand. Go beer!'
    }
  ];
  
  // Add a click event listener to each "View Details" button
  const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
  viewDetailsBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Get the team member ID from the data-member-id attribute
      const memberId = this.getAttribute('data-member-id');
  
      // Get the team member object based on the ID
      const teamMember = teamMembers[memberId - 1];
  
      // Update the team member details on the page
      document.getElementById('team-member-info').textContent = teamMember.info;
    });
  });
  