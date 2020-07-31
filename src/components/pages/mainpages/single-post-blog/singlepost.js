import React from 'react'
import singlepost from './single-post.module.css'
import timeimg from './images/Group63.png'
import shareimg from './images/Group64.png'
import commentimg from './images/Vector.png'
import mailimg from './images/Group69.png'
import twitt from './images/Vector(1).png'
import fb from './images/Vector(2).png'
import CommentComponent from './comment_component';
import {Link} from 'react-router-dom';
import pageurl from '../../../router/url/pageurl'
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView'
import {Navbar,Footer} from '../../navigation'
import {BlogController} from '../../../dataservices' 
import {Button,Status} from '../../../utilities'
import {connect} from 'react-redux'
import {getBlogPost,addcomment} from '../../../../actions'

const SinglePost = ({...props}) => {
    const[isLogged,setIsLogged]=React.useState(true);
    const[inputValues,setInputValues]=React.useState({});
    const[isRequested,setIsRequested]=React.useState(false);
    const[isLoading,setIsLoading]=React.useState(false);
    const[inputError,setInputError] = React.useState({});
    const{match:{params}} = props;
    React.useEffect(()=>{props.getBlogPost(params.userid);},[])
    function handleComment(e){e.preventDefault();
        if(BlogController.verifyUser()){
            if(BlogController.makeComment(inputValues,setIsLoading,setInputError)){ 
                setIsLogged(true);props.addcomment(params.userid,inputValues);
            }
        }else{
            setIsLogged(false);
        }
    }
    console.log(props.status);
    function handleInput(e){setInputValues({...inputValues,[e.target.name]:e.target.value})}
    return(    
        <ScrollIntoView>
        <Navbar/>
        {(props.status || isRequested) && <Status closeStatus={()=>{setIsRequested(false);setIsLoading(false);props.status && window.open(pageurl.SINGLE_POST_URL+`/${params.userid}`,'_self')}} status_message={props.status ? "Comment Added Successfully" : "Comment Not Added"} buttonTxt="Back To Blog" buttonUrl={pageurl.BLOG_PAGE_URL}/> }
        {!isLogged && <Status buttonTxt="Go To Login Page" buttonUrl={pageurl.LOGIN_PAGE_URL} closeStatus={()=>{setIsLogged(true);setIsLoading(false);}} status_message={"Login To Comment"} />}
        <div className={singlepost.singlepost}> 
            <section className={singlepost.bg_qobi}>
                <img src={(props.blogStory[0] && props.blogStory[0].imgSrc)} alt={props.blogStory[0] && props.blogStory[0].imgAlt} className={singlepost.singe_page_img_qobi} />
            </section>
            <section className={singlepost.article_container_qobi}>
                <div className={singlepost.main_container_qobi}>
                    <div className={singlepost.article_qobi}>
                        <div className={singlepost.article_content_qobi}>
                            <div style={{padding:"10px 0",textAlign:"right"}}><Link style={{color:"#FB405C"}} to={pageurl.BLOG_PAGE_URL}>Back To Blog</Link></div>
                            <div className={singlepost.single_post_header_qobi}><h1>{(props.blogStory[0] && props.blogStory[0].title) ? props.blogStory[0].title : "No Title"}</h1></div>
                            <div className={singlepost.meta_info_qobi}>
                                <span><img src={timeimg} alt="" /><p>{props.blogStory[0] && props.blogStory[0].createdAt}</p></span>
                                <span><img src={shareimg} alt="" /><p>{props.blogStory[0] && props.blogStory[0].comments && props.blogStory[0].comments.length}&nbsp;COMMENT</p></span>
                                <span><img src={commentimg} alt="" /><p>{0}&nbsp;SHARE</p></span>
                            </div>
                            <div className={singlepost.article_body_qobi}><p>{props.blogStory[0] && props.blogStory[0].post}</p></div>
                            <div className={singlepost.share_container_qobi}>
                                <p>SHARE</p>                    
                                <div class="fb-share-button" data-href="https://fmlblog.netlify.app/blog/post" data-layout="button_count" data-size="large">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ffmlblog.netlify.app%2Fblog%2Fpost&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">
                                        <button className={singlepost.fb_qobi}><img src={fb} alt="share on facebook"/>&nbsp;Share</button>
                                    </a>
                                </div>
                                <a class="twitter-share-button" href={`https://twitter.com/intent/tweet?text=${props.blogStory[0] && props.blogStory[0].title} FML Blog Post : ${window.location.hostname}${pageurl.SINGLE_POST_URL}/${params.userid}`} target="_blank" rel="noopener noreferrer" data-size="large">
                                    <button className={singlepost.tw_qobi}><img src={twitt} alt="share on twitter"/>&nbsp;Share on Twitter</button>
                                </a>
                                <div class="sharethis-inline-share-buttons">
                                    <button className={singlepost.mail_qobi}><img src={mailimg} alt="share via email"/>&nbsp;Share via Email</button>
                                </div>
                            </div>
                            <div className={singlepost.comment_container_qobi} >
                                <div className={singlepost.comment_header_qobi}><p>COMMENTS&nbsp;({props.blogStory[0] && props.blogStory[0].comments && props.blogStory[0].comments.length})</p></div>
                                
                                {props.blogStory[0] && props.blogStory[0].comments && props.blogStory[0].comments.map((data,index)=>{
                                        return(<CommentComponent key={index} singlepost={singlepost} avatar={""} comment={data.comment} 
                                                               user_name={data.author.name} comment_date={data.createdAt} reply_click={()=>{}} />)
                                })}
                                      
                            </div>
                            <div className={singlepost.comment_form_qobi}>
                                <div className={singlepost.comment_form_header}><p>LEAVE A COMMENT</p></div>
                                <div className={singlepost.comment_form_form_detaile_qobi}>
                                    <form>
                                        <label>Your Comment</label>
                                        <textarea name="comment" onChange={(e)=>handleInput(e)} value={inputValues.comment}/>
                                        <p>{inputError.comment}</p>
                                        <Button load={isLoading} propsTitle={"Post Comment"} onClick={(e)=>{handleComment(e)}} />
                                    </form>
                                </div>                                
                                <div style={{padding:"10px 0"}}><Link style={{color:"#FB405C"}} to={pageurl.BLOG_PAGE_URL}>Back To Blog Page</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
        </ScrollIntoView>
    )
}
const mapStateToProps = (state) => {return{blogStory : [state.blog.single.data],status : state.blog.comment.success}}
const dispatchStateToProps = () => {return{getBlogPost,addcomment}}
export default connect(mapStateToProps,dispatchStateToProps())(SinglePost);
