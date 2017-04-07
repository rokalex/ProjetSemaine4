export function homeSkeleton(data){
                  // return page skeleton
	return  `
                  <section>
                       <h1>${data.pageTitle}</h1>
                              <form>
                                    <p>
                                          <label for="email">Email:</label><input type="email" name="email"><br />
                                          <label for="password">Mot de Passe</label><input type="password" name="password"><br />
                                          <button>Login</button>
                                    </p>
                              </form>
                  </section>`;
}
