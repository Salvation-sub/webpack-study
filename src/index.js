import _ from "lodash"
import './style.css'
import Icon from "./icon.jpg"

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    // 원래 있던 div에 이미지를 추가합니다.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());