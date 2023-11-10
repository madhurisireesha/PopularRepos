import './index.css'
const Repositem=(props)=>{
    const{activeTabLanguage,details,isActive}=props
    const{id,language}=details
    const activeitem=isActive?'activated':''
    const selectLanguage=()=>{
        activeTabLanguage(id)
    }
  
   
    return(
        <>
           <button onClick={selectLanguage} className={`but ${activeitem}`}>{language}</button>
        </>
    )
}
export default Repositem