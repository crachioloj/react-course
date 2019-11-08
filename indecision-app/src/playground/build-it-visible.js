let showDetails = false;

const onShowDetails = () => {
  showDetails = !showDetails;
  render();
}

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onShowDetails}>{showDetails ? "Hide details" : "Show details"}</button>
      {showDetails ? <p>These are the details</p> : <p/>}
    </div>
  );
  
  ReactDOM.render(template, appRoot);
};

render();
