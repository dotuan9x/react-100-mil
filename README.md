# react-100-mil
Vì một tương lai 100 củ với React

## Tạo một project sử dụng create-react-app
Create-react-app là một open-source của Facebook, giúp cho việc tạo một project sử dụng Reactjs một cách đơn giản nhất có thể.

Tham khảo tài liệu hướng dẫn từ Facebook: https://create-react-app.dev/docs/getting-started

Mình đã tạo sẵn một project bằng create-react-app ở trong folder `create-react-app`, bạn chỉ cần vào thư mục này và dùng dòng lệnh `npm install & npm run start` là có ngay một website sử dụng Reactjs

## Áp dụng Webpack vào project sử dụng create-react-app

Webpack (version 5) là một thư viện hỗ trợ biên dịch các Javascript module, thường được nhiều người sử dụng để biên dịch các dự án dùng ReactJS

Mình đã tạo sẵn một project bằng `create-react-app` sau đó cấu hình để có thể sử dụng webpack để bundle được project này. Bạn có thể truy cập vào folder `react-webpack` sau đó dùng dòng lệnh `npm install & npm run start` là có thể sử dụng được.

## Sự khác biệt giữa State và Props
![State vs props](https://static.wixstatic.com/media/3a60df_ecdf74102fd04ee0ab40c50ecee52020~mv2.png/v1/fit/w_800%2Ch_420%2Cal_c/file.png)

Cách sử dụng state trong class component và function component
```jsx
// Class component
class App extends Component {
    constructor() {
        super();

        // Khai báo state
        this.state = {
            x: false
        };
    }

    componentDidMount() {
        // Cách cập nhật state trong class component
        this.setState({
            x: true
        })
    }
}

// Function component
import React, {useEffect, useState} from "react";

function App() {
    // Khai báo state cho x, giá trị thứ 2 "setX" có thể đặt tên bất kỳ, nhưng thông thường người ta hay đặt tên với tiền tố "set" ở trước
    const [x, setX] = useState(false)

    // ~ componentDidMount
    useEffect(() => {
        // Cập nhật state cho x
        setX(true);
    }, [])
}
```

Cách sử dụng props trong class component và function component đều giống nhau:
```jsx
// Ví dụ ta có một component "App" ở trên thì ta sử dụng và truyền props như sau:
<App propName1={true} propName2="hehe" />
```

## Life cycle trong Reactjs
![Life cycle](https://i1.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1)

**Ví dụ về life cycle trong Class component**
```jsx
class App extends Component {
    constructor() {
        super();

        this.state = {x: false};
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    componentDidCatch(error, errorInfo) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>Hello</div>
        )
    }
}
```

### Cách ánh xạ Life cycle từ React class qua Function component
![Life cycle React class to Function component](https://miro.medium.com/max/651/1*IeEZWbiknyh0zP3a1_jHkA.jpeg)

**Ví dụ về life cycle trong function component**
```jsx
function App() {
    const [a, setA] = useState(false)

    // ~ componentDidMount
    useEffect(() => {

    }, [])

    // ~ componentDidUpdate
    useEffect(() => {

    }, [a])

    // ~ componentWillUnmount
    useEffect(() => {
        return () => {
            // will unmount            
        }
    }, [])

    return (
        <div>Hello</div>
    )
}
```

## Bắt các sự kiện trong Reactjs
Việc bắt sự kiện trong React rất đơn giản, giống như cách bắt sự kiện trong Javascript

```jsx
// Ví dụ bắt sự kiện click vào một button
<button onClick={() => onClickButton}>Hello</button>

// Ví dụ bắt sự kiện change của một input
<input onChange={() => onchangeInput}/>
```

