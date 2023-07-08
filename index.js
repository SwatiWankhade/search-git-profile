let searchBtn = document.getElementById('searchBtn');
let profileContainer = document.getElementById('profileContainer');
let searchInput = document.getElementById('searchInput');


let generateProfile = (profile)=>{
  return(
    `<div class="profile-box">
    <div class="top-section">
      <div class="left">
        <div class="avatar">
          <img alt="avatar" src="${profile.avatar_url}" />
        </div>
        <div class="self">
          <h1>${profile.login}</h1>
          <h1>@${profile.login}</h1>
        </div>
      </div>
      <a href="${profile.html_url}" target="_black">
      <button class="primary-btn">Check Profile</button>
      </a>
    </div>
    <div class="about">
      <h2>About</h2>
      <p>
      ${profile.bio}
      </p>
    </div>
    <div class="status">
      <div class="status-item">
        <h3>Followers</h3>
        <p>${profile.followers}</p>
      </div>
      <div class="status-item">
        <h3>Followings</h3>
        <p>${profile.following}</p>
      </div>
      <div class="status-item">
        <h3>Repos</h3>
        <p>${profile.public_repos}</p>
      </div>
    </div>
  </div>
  `
  )
}

searchBtn.addEventListener('click', ()=>{
  let username = searchInput.value;
  fetch(`https://api.github.com/users/${username}`)
.then((response)=> {
  return response.json()
})
.then((data)=>{
  profileContainer.innerHTML=generateProfile(data);
})
.catch((err)=>{
  console.log(err);
});
});


searchInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === "Enter") {
        searchBtn.click();
    }
});
