import React from 'react'
import singlepost from './single-post.module.css'
// import {Link} from 'react-router-dom'
import dummydata from '../blog/dummydata'
import timeimg from './images/Group63.png'
import shareimg from './images/Group64.png'
import commentimg from './images/Vector.png'
import mailimg from './images/Group69.png'
import twitt from './images/Vector(1).png'
import fb from './images/Vector(2).png'

const SinglePost = ({dataIndex}) => {
    const [blogStory,setBlogStory] = React.useState([]);
    React.useEffect(()=>{function doIt(){!blogStory[0] && dummydata.dummy(setBlogStory);}doIt();})
    return(    
        <div className={singlepost.singlepost}> 
            <section className={singlepost.bg_qobi}>
                <img src={blogStory[0] && blogStory[dataIndex].article_img_src} alt={blogStory[0] && blogStory[dataIndex].article_img_alt} className={singlepost.singe_page_img_qobi} />
            </section>
            <section className={singlepost.article_container_qobi}>
                <div className={singlepost.main_container_qobi}>
                    <div className={singlepost.article_qobi}>
                        <div className={singlepost.article_content_qobi}>
                            <div className={singlepost.single_post_header_qobi}>
                                <h1>{blogStory[0] && blogStory[dataIndex].article_title}</h1>                    
                            </div>
                            
                            <div className={singlepost.meta_info_qobi}>
                                <span><img src={timeimg} alt="" /><p>{blogStory[0] && blogStory[dataIndex].article_post_time}</p></span>
                                <span><img src={shareimg} alt="" /><p>{blogStory[0] && blogStory[dataIndex].comments.length}&nbsp;COMMENT</p></span>
                                <span><img src={commentimg} alt="" /><p>{blogStory[0] && blogStory[dataIndex].share.length}&nbsp;SHARE</p></span>
                            </div>
                            <div className={singlepost.article_body_qobi}>
                                <p>{blogStory[0] && blogStory[dataIndex].article_post}</p>                    
                            </div>
                            <div className={singlepost.share_container_qobi}>
                                <p>SHARE</p>
                                <button className={singlepost.fb_qobi}><img src={fb} alt="share on facebook"/>&nbsp;Share on Facebook</button>
                                <button className={singlepost.tw_qobi}><img src={twitt} alt="share on twitter"/>&nbsp;Share on Twitter</button>
                                <button className={singlepost.mail_qobi}><img src={mailimg} alt="share via email"/>&nbsp;Share via Email</button>
                            </div>
                            <div className={singlepost.comment_container_qobi}>
                                <div className={singlepost.comment_header_qobi}>
                                    <p>COMMENTS&nbsp;({blogStory[0] && blogStory[dataIndex].comments.length})</p>
                                </div>
                                <div className={singlepost.comment_body_qobi}>
                                    <div className={singlepost.comment_avatar_qobi}>
                                        <img src={blogStory[0] && blogStory[dataIndex].comments[0].avatar} alt={""} />
                                    </div>
                                    <div className={singlepost.comment_other_values_qobi}>
                                        <div className={singlepost.comment_name_and_time_qobi}>
                                            <p className={singlepost.comment_name_qobi}>{blogStory[0] && blogStory[dataIndex].comments[0].user_name}</p>
                                            <p className={singlepost.comment_time_qobi}>{blogStory[0] && blogStory[dataIndex].comments[0].comment_date}</p>
                                        </div>
                                        <div className={singlepost.comment_section_qobi}>
                                            <p>{blogStory[0] && blogStory[dataIndex].comments[0].comment}</p>
                                        </div>
                                        <div className={singlepost.comment_reply_section_qobi}>
                                            <p>Reply</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className={singlepost.main_container_qobi}>

                </div>
            </section>

        </div>

    )
}
export default SinglePost;