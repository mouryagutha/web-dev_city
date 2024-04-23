import profilepic from './assets/m_letter.jpg'

function Card()
{

    return(
        <div className="card">
            <img className ="card-image"src={profilepic} alt="profilepic"></img>
            <h2 className="card-title">mourya kumar</h2>
            <p className="card-text">this is sample react project</p>

        </div>
    );
}

export default Card