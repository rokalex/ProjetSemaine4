export function userSkeleton(data){
              // return page skeleton
              return`
              <section class="valign-wrapper">
    <nav class="row transparent z-depth-0 flow-text">
      <div class="input-field col s6">
        <i id="icon-search" class="material-icons prefix">search</i>
        <input id="search" type="text" class="validate">
      </div>
      <div class="col s6 right-align">
          <i id="download" class="material-icons">file_download</i>
      </div>
    </nav>
    <main class="valign center-align">
      <div class="row">
        <div class="col s12">
          <h1 id="montre"></h1>
          <p class="greetings">${data.pageTitle} ${data.userName}!</p>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <a href="#" class="btn transparent z-depth-0">btn 1</a>
          <a href="#" class="btn transparent z-depth-0">btn 2</a>
          <a href="#" class="btn transparent z-depth-0">btn 3</a>
        </div>
      </div>
    </main>
    <footer>
      <div class="row">
        <div class="col s6 left-align">Photo by <address class="author"></address></div>
        <div class="col s6 right-align">This app using <a href="https://unsplash.com" target="_blank" title="Unsplash API">Unsplash API</a></div>
      </div>
    </footer>
  </section>
                   `;
}
