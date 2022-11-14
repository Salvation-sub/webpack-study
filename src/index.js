import _ from "lodash"
import './style.css'
import Icon from "./icon.png"
import Data from './data.xml';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    // 원래 있던 div에 이미지를 추가합니다.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    // xml
    console.log(Data);
    // csv
    console.log(Notes);

    return element;
}

document.body.appendChild(component());