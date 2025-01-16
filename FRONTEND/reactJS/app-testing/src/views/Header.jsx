

export const Header = ({props}) => {

    console.log(props);
    
    return (
        <>

            <header>
                <h1>{props.title}</h1>
                <nav>
                    <ul>
                        <li>inicio</li>
                        <li>tienda</li>
                        <li>servicios</li>
                    </ul>
                </nav>
            </header>

            <div>
                <img src={props.image} alt="" />
            </div>

        </>
    )
}