<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Profile</title>
  <link rel="stylesheet" href="feedstyle.css">
</head>
<body>
  <div class="container">
    <!-- Profile Section -->
    <header>
      <div class="profile-header">
        <div class="profile-picture">
          <a href="http://localhost:3000/"><img src="assets/img/logo.png" alt="Profile Picture"></a>
        </div>
        <div class="profile-info">
          <h1>GOSSIP</h1>
          <p>explore shared interests</p>
        </div>
      </div>
    </header>
    
    <!-- Post Section -->
    <section class="post-section">
      <h2>Your Posts</h2>
      
      <!-- New Post Input Form -->
      <div class="new-post">
        <textarea id="newPostText" placeholder="What's on your mind?"></textarea>
        
        <!-- Custom 'Choose Image or Video to Upload' Button -->
        <label for="newPostImage" class="upload-btn">Choose an Image or Video to Upload</label>
        <input type="file" id="newPostImage" accept="image/*,video/*" style="display: none;">
        
        <!-- Display the filename of the selected image or video -->
        <div id="fileNameDisplay"></div>
        
        <button onclick="addPost()">Post</button>
      </div>
      
      <!-- Posts will appear here -->
      <div id="postsList"></div>
    </section>
  </div>

  <script src="script.js"></script>
</body>
</html>
