import React from "react";
import loginImg from "../../login.svg";




export class Login extends React.Component {
    constructor(props) {
        super(props);
    }


    handlerclick = () => {

        // window.open('https://nithinraoodela.github.io/Registration/', '_self')
        
        
        var un = document.getElementById("isd").value
        var ul = document.getElementById("isdd").value
        // var uk = document.getElementById("btt")
        if (un  === "2019A8PS0429G" && ul === "Nithinrao@123" ){  //Nithin
            
            window.open('https://nithinraoodela.github.io/Registration/', '_self')
        }
        else if (un  === "2019A4PS0501G" && ul === "Nithinrao@123" ){  //CHARAN YADAV
            
            
            window.open("https://nithinraoodela.github.io/Registration/",'_self')
            
        }
        else if (un  === "2019A7PS0124G" && ul === "Nithinrao@123" ){ //Addepalli Guru Sai Manikanta Bhaskar
            window.open('ind4.html', "_blank")
        }
        else if (un  === "2019A4PS0436G" && ul === "Nithinrao@123" ){ //MATSA SAI SURESHKUMAR  
            window.open('ind5.html') 
        }
        else{
            if (un ==="") {

                alert("Blank / Invalid ID")
            }
            else{

                alert("Invalid Email ID or Invalid Password ")
            }
            
        }



       


         



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
                                <input type="text" name="Campus ID" id="isd" placeholder="20**A*PS****G" ref={this.inputRef}required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"id="isdd" name="password" placeholder="password" required />
                            </div>
                        </div>

                    </div>
                    <div className="footer2">
                        <button type="button" className="btn"  id="btt" onClick={this.handlerclick} > Login

                        </button>

                    </div>
                </div>

            </form>
        );
    }
}
