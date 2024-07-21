//by using Java script
const root = document.createElement('h1');
root.innerHTML = 'Hello world Using JS';
document.getElementById('root').appendChild(root);

//using react
const heading = React.createElement('h1', {id: 'heading'}, 'Hello world using react');
const reactRoot = ReactDOM.createRoot(document.getElementById('reactRoot'));
reactRoot.render(heading);

//Add multiple tags
const headings = [React.createElement('h1', {}, "Heading 1"), React.createElement('h2', {}, "Heading 2")];
const multipleRoot = ReactDOM.createRoot(document.getElementById('multipleRoot'));
multipleRoot.render(headings)

//nested tags
const display = React.createElement('div', {id: 'display'}, 'Final Display');
const child = React.createElement('div', {id: 'child'}, display);
const parent = React.createElement('div', {id: 'parent'}, child);

const nestedRoot = ReactDOM.createRoot(document.getElementById('nestedRoot'));
nestedRoot.render(parent);