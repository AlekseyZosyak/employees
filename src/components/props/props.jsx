
function WhoAmI ({name, surname, link}) {
    
    return (
        <div>
            <h1>My name is {name}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    )
}
function Apps () {
    return (
        <div className="App">
            <WhoAmI name="John" surname="Smith" link="facebook.com"/>
            <WhoAmI name="Alex" surname="Answ" link="insta.com"/>
        </div>
    )
}

export default Apps;