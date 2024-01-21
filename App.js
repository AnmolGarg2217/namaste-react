const heading = React.createElement('h1' , 
{id:'heading'} , 
React.createElement('h2' , {id : 'heading2'}, 'children')
);
console.log(heading);  // this will print one js object where we get value and type of element in i.e props and childer 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);