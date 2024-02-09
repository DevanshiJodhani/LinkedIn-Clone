import styled from "styled-components"
import PostModel from "./PostModel"
import { useEffect, useState } from "react"
import { connect } from "react-redux";
import { getArticlesAPI } from "../Actions";
import ReactPlayer from "react-player";


const Main = (props) => {

    const [showModel, setShowModel] = useState("close");

    useEffect(() => {
        props.getArticles();
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }

        switch(showModel) {
            case "open" :
                setShowModel("close");
                break;

            case "close" :
                setShowModel("open");
                break;

            default: 
                setShowModel("close");
                break;
        }
    }

    return (
        <>
                <Container>
                    <ShareBox>
                        <div>
                            {props.user && props.user.photoURL ? (
                                <img src={props.user.photoURL} alt="" />
                            ):
                            (
                                <img src="/images/user.svg" alt="" />
                            )
                            }
                            <button onClick={handleClick} disabled={props.loading ? true : false}>Start a Post</button>
                        </div>

                        <div>
                            <button>
                                <img src="/images/photo-icon.svg" alt="" />
                                <span>Photo</span>
                            </button>
                            <button>
                                <img src="/images/event-icon.svg" alt="" />
                                <span>Event</span>
                            </button>

                            <button>
                                <img src="/images/article-icon.svg" alt="" />
                                <span>Write article</span>
                            </button>

                        </div>
                    </ShareBox> 
                    {props.articles.length === 0 && <p>There are no articles</p>}
                    {/* {props.articles.length === 0 ? (
                        <p>There are no articles</p>
                    ) : ( */}
                    <Content>
                        {props.loading && <img style={{width: "50px"}} src="./images/spin-loader.svg" alt="" />}

                        {props.articles.length > 0 && props.articles.map((article, key) => (
                        <Article key={key}>
                            <SharedActor>
                                <a>
                                    <img src={article.actor.image} alt="" />
                                    <div>
                                        <span>{article.actor.title}</span>
                                        <span>{article.actor.description}</span>
                                        <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                                    </div>
                                </a>
                                <button>
                                    <img src="/images/ellipsis.svg" alt="" />
                                </button>
                            </SharedActor>
                            <Description>{article.description}</Description>
                            <SharedImg>
                                <a>
                                    {
                                        !article.sharedImg && article.video ? 
                                        (<ReactPlayer width={'100%'} url={article.video} />)
                                        :
                                        (article.sharedImg && <img src={article.sharedImg} />)
                                    }
                                </a>
                            </SharedImg>
                            <SoicalCount>
                                <li>
                                    <button>
                                        <img src="./images/like-icon.svg" alt="" />

                                        <img src="./images/celeberate-icon.svg" alt="" />

                                        <span>75 Reactions</span>
                                    </button>
                                </li>

                                <li>
                                    <a>{article.comments}<span>Comments</span></a>
                                </li>

                            </SoicalCount>
                            <SocialActions>
                                <button>
                                    <img src="./images/like-button.svg" alt="" />
                                    <span>Like</span>
                                </button>
                                <button>
                                    <img src="./images/comment-button.svg" alt="" />
                                    <span>Comments</span>
                                </button>
                                <button>
                                    <img src="./images/share-button.svg" alt=""/>
                                    <span>Share</span>
                                </button>
                                <button>
                                    <img src="./images/send-button.svg" alt="" />
                                    <span>Send</span>
                                </button>
                            </SocialActions>
                        </Article>
                        ))}
                    </Content>
                    {/* )} */}
                    <PostModel showModel={showModel} handleClick={handleClick} />
                </Container>
        </>
    )
}

const Container = styled.div`
    grid-area: main;
`;

const CommanCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    position: relative;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommanCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    background-color: #fff;
    margin: 0 0 8px;

    div{
        button{
            border: none;
            outline: none;
            font-size: 14px;
            line-height: 1.5;
            min-height: 48px;
            background: transparent;
            color: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            font-weight :600;
            cursor: pointer;

        }
        &:first-child {
            display: flex;
            align-items: center;
            padding: 8px 16px 0 16px;

            img{
                width: 48px;
                border-radius: 50%;
                margin-right: 8px;
            }

            button{
                margin: 4px 0;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 16px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                background: #fff;
                text-align: left;
            }
        }

        &:nth-child(2){
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;

            button{
                img{
                    margin: 0 4px 0 -2px;
                    width: 30px;
                    height: 30px;
                }
                span{
                    color: #000;
                }
            }

        }
    }

`;

const Content = styled.div`
    text-align: center;

    & > img{
        width: 30px;
    }
`;

const Article = styled(CommanCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;
`;

const SharedActor = styled.div`
    padding: 12px 16px 0;
    padding-right: 40px;
    flex-wrap: nowrap;
    align-items: center;
    margin-bottom: 8px;
    display: flex;

    a{
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;

        img{
            border-radius: 50%;
            width: 50px;
            height: 50px;
        }

        & > div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;

            span{
                text-align: left;
                &:first-child {
                    font-size: 14px;
                    font-weight: 700;
                }
                &:nth-child(n+1){
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }

    }

    button{
        border: none;
        outline: none;
        background: transparent;
        position: absolute;
        right: 12px;
        top: 0;

        img{
            width: 25px;
            height: 25px;
        }
    }
`;

const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0,0,0,0.9);
    font-size: 14px;
    text-align: left;

`;

const SharedImg = styled.div`
    margin-top: 8px;
    display: block;
    position: relative;
    width: 100%;
    background-color: #f9fafb;

    img{
        width: 100%;
        height: 100%;
    }
`;

const SoicalCount = styled.ul`
    line-height: 1.3;
    display: flex;
    align-items: flex-start;
    overflow: auto;
    margin: 0 16px;
    padding: 8px 0;
    border-bottom: 1px solid #e9e5df;
    list-style: none;

    li{
        margin-right: 5px;
        font-size: 14px;

        button{
            display: flex;
            border: none;
            outline: none;
            background: #fff;

        }

        span{
            margin-left: 5px;
        }
    }
`;

const SocialActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 4px 8px;
    min-height: 40px;

    button{
        border: none;
        outline: none;
        background: transparent;
        display: inline-flex;
        align-items: center;
        padding: 8px;
        color: #000;
        font-size: 15px;
        cursor: pointer;
        transition: all 0.3s;

        &:hover{
           transform: scale(1.1);
        }

        span{
            margin-left: 4px;
        }

        @media (min-width: 768px) {
            
            span{
                margin-left: 8px;
            }
        }


        img{
            width: 25px;
            height: 25px;
        }
        @media (max-width: 768px) {
                img{
                    width: 20px;
                    height: 20px;
                }
                span{
                    font-size: 14px;
                }
        }
    }
`;


const mapStateToProps = (state) => {
    return {
        loading: state.articleState.loading,
        user: state.userState.user,
        articles: state.articleState.articles,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);