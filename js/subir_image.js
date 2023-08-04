var action = '';

    function showPasswordDiv(act) {
      action = act;
      var passwordDiv = document.getElementById("passwordDiv");
      passwordDiv.style.display = "block";
    }

    function hidePasswordDiv() {
      var passwordDiv = document.getElementById("passwordDiv");
      passwordDiv.style.display = "none";
    }

    function showIncorrectPasswordDiv() {
      var incorrectPasswordDiv = document.getElementById("incorrectPasswordDiv");
      incorrectPasswordDiv.style.display = "block";
    }

    function hideIncorrectPasswordDiv() {
      var incorrectPasswordDiv = document.getElementById("incorrectPasswordDiv");
      incorrectPasswordDiv.style.display = "none";
    }

    function submitPassword() {
      var passwordInput = document.getElementById("passwordInput");
      if (passwordInput.value === "mclove") {
        if (action === 'upload') {
          uploadImages();
        } else if (action === 'clear') {
          clearImages();
        }
        hidePasswordDiv();
      } else {
        showIncorrectPasswordDiv();
      }
    }

    function uploadImages() {
      var imageInput = document.getElementById("imageInput");
      var uploadedImages = document.getElementById("uploadedImages");
      if (imageInput.files && imageInput.files.length > 0) {
        for (var i = 0; i < imageInput.files.length; i++) {
          var reader = new FileReader();
          reader.onload = function(e) {
            var uploadedImage = document.createElement("img");
            uploadedImage.src = e.target.result;
            uploadedImage.className = "uploadedImage";
            uploadedImages.appendChild(uploadedImage);
            localStorage.setItem('images', uploadedImages.innerHTML);
          };
          reader.readAsDataURL(imageInput.files[i]);
        }
      }
    }

    function clearImages() {
      var uploadedImages = document.getElementById("uploadedImages");
      while (uploadedImages.firstChild) {
        uploadedImages.removeChild(uploadedImages.firstChild);
      }
      localStorage.removeItem('images');
    }

    window.onload = function() {
      var uploadedImages = document.getElementById("uploadedImages");
      if (localStorage.getItem('images')) {
        uploadedImages.innerHTML = localStorage.getItem('images');
      }
    }