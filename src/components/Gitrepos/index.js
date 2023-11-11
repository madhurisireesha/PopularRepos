import { Component } from 'react'
import Loader from 'react-loader-spinner'
import Repositem from '../Repositem'
import Languagefilter from '../Languagefilter'
import './index.css'
const languageFiltersData = [
    {id: 'ALL', language: 'All'},
    {id: 'JAVASCRIPT', language: 'Javascript'},
    {id: 'RUBY', language: 'Ruby'},
    {id: 'JAVA', language: 'Java'},
    {id: 'CSS', language: 'CSS'},
  ]
 class Gitrepos extends Component{
    state={
        activeID:languageFiltersData[0].id,
        list1:languageFiltersData,
        list2:[],
        isLoading:true
    }
    activeTabLanguage=(id)=>{
     this.setState({
            activeID:id,isLoading:false
        },this.getDetails)
        
    }
    componentDidMount(){
        this.getDetails()
    }
    getDetails=async()=>{
        const{activeID}=this.state
        //console.log(activeID)
        const url=`https://apis.ccbp.in/popular-repos?language=${activeID}`
        const options={
            method:"GET"
        }
        const response=await fetch(url,options)
        if(response.ok===true)
        {
            const fetchedData=await response.json()
            console.log(fetchedData)
            const updatedData=fetchedData.popular_repos.map((data)=>({
                name:data.name,
                id:data.id,
                issuesCount:data.issues_count,
                forksCount:data.forks_count,
                starsCount:data.forks_count,
                avatarUrl:data.avatar_url
            }))
           
            this.setState({
                list2:updatedData,
                isLoading:false
            })
            
        }
       if(response.status===401)
       {
        return(
            <img src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"/>
        )
       }
        
    }
    render(){
        const{list1,isLoading,list2,activeID}=this.state
        console.log(list2)
        return(
            <>
                {/* <Repositem details={list1} activeTabLanguage={this.activeTabLanguage}/> */}
                <h1 style={{marginLeft:"45vw"}}>Popular</h1>
            
               <div className='nav'>
               {list1.map((item)=>(
                    <Repositem details={item} activeTabLanguage={this.activeTabLanguage} key={item.id}
                    isActive={activeID===item.id}/>
                ))}

           
               </div>
               {isLoading?<Loader type="ThreeDots" color="#0284c7" height={50} width={50} className="load"/>:
                <div className='filtercontainer'>
                {list2.map((item)=>(
                     <Languagefilter details={item}/>
                ))}
                </div>}
            </>
        )
    }

 }
 export default Gitrepos