import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    handlerclick = () => {

        
        var un = document.getElementById("isd").value
        if (un ==="") {
            
            alert("Blank / Invalid ID")
            window.open('', '_self')
        }
        else{
            
            alert("Registerd")
            window.open('login.jsx', '_self')
        }


    }


    render() {
        return (
            <form>
                <div className="base-container" ref={this.props.containerRef}>
                    <div className="dosar">DOSAR</div>
                    <div className="header">Register</div>
                    <div className="content">
                        <div className="image">
                            <img src={loginImg} />
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="Campus ID">Campus ID</label>
                                <input type="text" name="Campus ID" id="isd" placeholder="Campus ID" required  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="password" required />
                            </div>
                        </div>
                    </div>
                    <div className="footer1">
                        <button type="button" className="btn"  onClick={this.handlerclick} > Register

                        </button>
                    </div>
                </div>
            </form>
        );
        
    }
}
