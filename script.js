
function loadPosts() {
  const posts = JSON.parse(localStorage.getItem('posts')) || []; 
  const postsList = document.getElementById('postsList');
  postsList.innerHTML = ''; 

  
  posts.forEach((post, index) => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    
    const postText = document.createElement('p');
    postText.textContent = post.text;
    postDiv.appendChild(postText);

    
    if (post.media) {
      if (post.mediaType === 'image') {
        const postImage = document.createElement('img');
        postImage.src = post.media;  
        postDiv.appendChild(postImage);
      } else if (post.mediaType === 'video') {
        const postVideo = document.createElement('video');
        postVideo.src = post.media;  
        postVideo.controls = true;   
        postDiv.appendChild(postVideo);
      }
    }

   
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
      deletePost(index);  
    };
    postDiv.appendChild(deleteBtn);


    postsList.appendChild(postDiv);
  });
}


function savePost(post) {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push(post);  
  localStorage.setItem('posts', JSON.stringify(posts)); 
}


function deletePost(index) {
  const posts = JSON.parse(localStorage.getItem('posts')) || []; 
  posts.splice(index, 1);  
  localStorage.setItem('posts', JSON.stringify(posts)); 
  loadPosts();  
}


function addPost() {
  const text = document.getElementById('newPostText').value;
  const media = document.getElementById('newPostImage').files[0];


  if (text || media) {
    const post = {
      text: text,
      media: null,
      mediaType: null
    };

  
    if (media) {
      const reader = new FileReader();
      reader.onload = function(e) {
        post.media = e.target.result; 
        
       
        if (media.type.startsWith('image')) {
          post.mediaType = 'image';
        } else if (media.type.startsWith('video')) {
          post.mediaType = 'video';
        }
        
        savePost(post); 
        loadPosts(); 
      };
      reader.readAsDataURL(media);
    } else {
      savePost(post);  
      loadPosts();  
    }

    
    document.getElementById('newPostText').value = '';
    document.getElementById('newPostImage').value = '';
    document.getElementById('fileNameDisplay').innerHTML = ''; 
  } else {
    alert('Please write something or add an image/video!');
  }
}


document.getElementById('newPostImage').addEventListener('change', function(event) {
  const fileName = event.target.files[0] ? event.target.files[0].name : '';
  document.getElementById('fileNameDisplay').textContent = fileName ? `Selected file: ${fileName}` : 'No file selected';
});


window.onload = function() {
  loadPosts();
};
