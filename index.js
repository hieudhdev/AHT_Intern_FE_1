document.addEventListener("DOMContentLoaded", function () {
    // Xử lý khi click vào nút "Book Now"
    const bookNowButtons = document.querySelectorAll(".book-now");

    bookNowButtons.forEach(button => {
        button.addEventListener("click", function () {
            const destination = this.getAttribute("data-destination");
            const section = document.querySelector(destination);

            if (section) {
                // Cuộn đến vị trí của phần booking form
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

// Light Box
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

// Comment localstorage
// document.addEventListener("DOMContentLoaded", function() {
//     loadComments();
// });

function submitComment() {
    const name = document.getElementById("nameComment").value;
    const comment = document.getElementById("comment").value;

    if (name && comment) {
        const commentData = {
            name: name,
            comment: comment,
            date: new Date().toLocaleString()
        };

        let comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(commentData);
        localStorage.setItem('comments', JSON.stringify(comments));

        document.getElementById("nameComment").value = '';
        document.getElementById("comment").value = '';
        displayComments(comments);
    } else {
        alert("Please fill out both fields.");
    }
}

function loadComments() {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    displayComments(comments);
}

function displayComments(comments) {
    const commentList = document.getElementById("commentList");
    commentList.innerHTML = '';
    
    comments.forEach(comment => {
        const commentElement = document.createElement("div");
        commentElement.className = "comment";
        commentElement.innerHTML = `
            <div class="bg-white p-4 rounded-lg shadow-md mb-5">
                <h3 class="text-lg font-bold">${comment.name}</h3>
                <p class="text-gray-700 text-sm mb-2">Posted on ${comment.date}</p>
                <p class="text-gray-700">${comment.comment}</p>
            </div>
        `;
        commentList.appendChild(commentElement);
    });
}

function deleteAllComments () {
    localStorage.clear();
    loadComments();
}

function bookTour () {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const destination = document.getElementById('destination').value
    const departureDate = document.getElementById('departure-date').value

    if (name && email && destination && departureDate) {
        alert('Booking tour successfully!')
    }
}