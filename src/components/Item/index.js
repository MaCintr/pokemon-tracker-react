import './style.css'

const Item = (props) => {
    return (
        <div className='main-card'>
            <h2 className='title'>Snorlax</h2>
            <div className="pokeball-card">
                <div className='content'>
                    <img src='https://vignette1.wikia.nocookie.net/es.pokemon/images/9/93/Snorlax_(anime_AG).png/revision/latest?cb=20120906024823'/>
                    <button>Detalhes</button>
                </div>
            </div>
        </div>
    )
}

export default Item