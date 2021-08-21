import React from "react";
import loginImg from "../../login.svg";




export class Login extends React.Component {
    constructor(props) {
        super(props);
    }


    handlerclick = () => {

        alert('Submitted')
        window.open('https://github.com/Github', '_self')


    }


    render() {
        return (
            <form action="/" method="GET">
                <div className="base-container" ref={this.props.containerRef}>
                    <div className="dosar">DOSAR</div>
                    <div className="header">Login</div>
                    <div className="content">
                        <div className="image">
                            <img src={loginImg} />
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="Campus ID">Campus ID</label>
                                <input type="text" name="Campus ID" placeholder="20**A*PS****G" ref={this.inputRef}required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="password" required />
                            </div>
                        </div>

                    </div>
                    <div className="footer2">
                        <button type="button" className="btn" onClick={this.handlerclick} > <a href="" className="tt" target='_blank'>Login</a>

                        </button>

                    </div>
                </div>

            </form>
        );
    }
}
