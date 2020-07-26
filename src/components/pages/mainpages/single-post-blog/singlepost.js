import React from 'react'
import singlepost from './single-post.module.css'
import dummydata from '../blog/dummydata'
import timeimg from './images/Group63.png'
import shareimg from './images/Group64.png'
import commentimg from './images/Vector.png'
import mailimg from './images/Group69.png'
import twitt from './images/Vector(1).png'
import fb from './images/Vector(2).png'
import CommentComponent from './comment_component';
import {Link,withRouter} from 'react-router-dom';
import pageurl from '../../../router/url/pageurl'
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView'
import {Navbar,Footer} from '../../navigation'

const SinglePost = ({...props}) => {
    const [dataIndex] = React.useState(props.location.state ? props.location.state.postIndex : 0)
    const [blogStory,setBlogStory] = React.useState([]);
    const[inputValues,setInputValues]=React.useState({});
    React.useEffect(()=>{function doIt(){!blogStory[0] && dummydata.dummy(setBlogStory);}doIt();})
    function handleComment(e){e.preventDefault();}
    function handleInput(e){setInputValues({...inputValues,[e.target.name]:e.target.value})}
    return(    
        <ScrollIntoView>
        <Navbar/>
        <div className={singlepost.singlepost}> 
            <section className={singlepost.bg_qobi}>
                <img src={blogStory[0] && blogStory[dataIndex].article_img_src} alt={blogStory[0] && blogStory[dataIndex].article_img_alt} className={singlepost.singe_page_img_qobi} />
            </section>
            <section className={singlepost.article_container_qobi}>
                <div className={singlepost.main_container_qobi}>
                    <div className={singlepost.article_qobi}>
                        <div className={singlepost.article_content_qobi}>
                            <div style={{padding:"10px 0",textAlign:"right"}}><Link to={pageurl.BLOG_PAGE_URL}>Back To Blog</Link></div>
                            <div className={singlepost.single_post_header_qobi}><h1>{blogStory[0] && blogStory[dataIndex].article_title}</h1></div>
                            <div className={singlepost.meta_info_qobi}>
                                <span><img src={timeimg} alt="" /><p>{blogStory[0] && blogStory[dataIndex].article_post_time}</p></span>
                                <span><img src={shareimg} alt="" /><p>{blogStory[0] && blogStory[dataIndex].comments.length}&nbsp;COMMENT</p></span>
                                <span><img src={commentimg} alt="" /><p>{blogStory[0] && blogStory[dataIndex].share.length}&nbsp;SHARE</p></span>
                            </div>
                            <div className={singlepost.article_body_qobi}><p>{blogStory[0] && blogStory[dataIndex].article_post}</p></div>
                            <div className={singlepost.share_container_qobi}>
                                <p>SHARE</p>                    
                                <div class="fb-share-button" data-href="https://fmlblog.netlify.app/blog/post" data-layout="button_count" data-size="large">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ffmlblog.netlify.app%2Fblog%2Fpost&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">
                                        <button className={singlepost.fb_qobi}><img src={fb} alt="share on facebook"/>&nbsp;Share</button>
                                    </a>
                                </div>
                                
                                <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Hello%20world" target="_blank" rel="noopener noreferrer" data-size="large">
                                    <button className={singlepost.tw_qobi}><img src={twitt} alt="share on twitter"/>&nbsp;Share on Twitter</button>
                                </a>

                                <div class="sharethis-inline-share-buttons">
                                    <button className={singlepost.mail_qobi}><img src={mailimg} alt="share via email"/>&nbsp;Share via Email</button>
                                </div>

                            </div>
                            <div className={singlepost.comment_container_qobi}>
                                <div className={singlepost.comment_header_qobi}><p>COMMENTS&nbsp;({blogStory[0] && blogStory[dataIndex].comments.length})</p></div>
                                {blogStory[0] && blogStory[dataIndex].comments.map((data,index)=>{
                                        return(<CommentComponent key={index} singlepost={singlepost} avatar={data.avatar} comment={data.comment} 
                                                               user_name={data.user_name} comment_date={data.comment_date} reply_click={()=>{}} />)
                                })}      
                            </div>
                            <div className={singlepost.comment_form_qobi}>
                                <div className={singlepost.comment_form_header}><p>LEAVE A COMMENT</p></div>
                                <div className={singlepost.comment_form_form_detaile_qobi}>
                                    <form>
                                        <label>Your Name</label>
                                        <input type="text" name="user_name" onChange={(e)=>handleInput(e)} value={inputValues.user_name}/>
                                        <label>Your Email</label>
                                        <input type="text" name="email" onChange={(e)=>handleInput(e)} value={inputValues.email}/>
                                        <label>Your Comment</label>
                                        <textarea name="comment" onChange={(e)=>handleInput(e)} value={inputValues.comment}/>
                                        <button onClick={(e)=>handleComment(e)}>Post Comment</button>
                                    </form>
                                </div>
                                
                                <div style={{padding:"10px 0"}}><Link to={pageurl.BLOG_PAGE_URL}>Back To Blog Page</Link></div>
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
export default withRouter(SinglePost);