const IndexController = (app) => {
  app.get("/", (req, res) => {
    res.send(`
        <h1>Rosemary's Tattoo API</h1>
        <h3>Acesse o repoistório <a href="https://github.com/LeoAChaves/Rosemary_API">https://github.com/LeoAChaves/Rosemary_API</a> para mais informações.</h3>
        `);
  });
};

export default IndexController;
