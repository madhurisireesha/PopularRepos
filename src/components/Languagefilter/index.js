import './index.css'
const Languagefilter=(props)=>{
   const{details}=props
 
   const{name,id,issuesCount,forksCount,starsCount,avatarUrl}=details
    return(
        <div className="container">
            <img src={avatarUrl} className="logo" alt="logo"/>
            <h1 className='name'>{name}</h1>
            <div className='inner'>
                <img src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png" alt="stars" className='stars'/>
                <h3 className='head'>{starsCount} stars</h3>
            </div>
            <div className='inner'>
                <img src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png" alt="stars" className='stars'/>
                <h3 className='head'>{forksCount} forks</h3>
            </div>
            <div className='inner'>
                <img src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png" alt="stars" className='stars'/>
                <h3 className='head'>{issuesCount} Open issues</h3>
            </div>
            
        </div>
    )
}
export default Languagefilter