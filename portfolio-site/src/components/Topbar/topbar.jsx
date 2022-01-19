import "./topbar.scss"

export default function Topbar() {
    return (
        <div className="topbar ">
            <div className="wrapper">
                {/* Start of left */}
                <div className="left">
                    <a href="#intro" className="logo">Logo</a>
                    <div className="itemContainer">
                        <span className="PhoneNumber">Phone Number</span>
                        <span>785-220-5130</span>
                    </div>
                    <div className="itemContainer">
                        <span className="Email">Email</span>
                        <span>@gmail.com</span>
                    </div>    
                </div>
                
                {/* Start of right */}
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
