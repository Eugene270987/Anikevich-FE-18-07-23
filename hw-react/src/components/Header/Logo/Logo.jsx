import image from '../../Images/logo.png'
function Logo () {
    return (
        <div>
            <a href={'/'}>
                <img src={image} alt="logo"/>
            </a>
        </div>
    )
}

export default Logo;