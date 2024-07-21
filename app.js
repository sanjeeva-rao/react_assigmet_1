//by using Java script
const root = document.createElement('h1');
root.innerHTML = 'Hello world Using JS';
document.getElementById('root').appendChild(root);

//using react
const heading = React.createElement('h1', {id: 'heading'}, 'Hello world using react');
const reactRoot = ReactDOM.createRoot(document.getElementById('reactRoot'));
reactRoot.render(heading);
