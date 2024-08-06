
function customRender(rootElement,reactElement){


    const element = document.createElement(reactElement.type);
    element.innerHTML=reactElement.children;
    for (const prop in reactElement.props) {
        if(prop=="children") continue;
        console.log(prop);
        element.setAttribute(prop,reactElement.props.prop);
    }

        rootElement.appendChild(element);

}

const rootElement = document.querySelector("#root");

const reactElement = {
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"redirect to Google"
}

customRender(rootElement,reactElement)
