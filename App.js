const heading = React.createElement("div", {
    id: "heading"
}, React.createElement('div', {id: 'child'}, 
[React.createElement('h1', {key:'ch1'},'H1 Tag'), React.createElement('h2',{key:'ch2'},'H2 Tag')]));
// const heading = React.createElement("h1", {
//     id: "heading"
// }, "Hello React");
console.log(heading) // it's an object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)