import { css, styled } from "styled-components";
import { useState } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase/compat/app";

import { postArticalAPI } from "../Actions";

const PostModel = (props) => {

    const [editorText, setEditorText] = useState('');
    const [shareMedia, setShareMedia] = useState('');
    const [videoLink, setVideoLink] = useState('');
    const [assetsArea, setAssetArea] = useState('');


    const handleChange = (e) => {
        const image = e.target.files[0];

        if (image === " " || image === undefined) {
            alert(`not an Image, the file is a ${typeof image}`);
            return;
        }
        setShareMedia(image)
    }

    const switchAssetArea = (area) =>{
        setShareMedia("");
        setVideoLink("");
        setAssetArea(area);
    }

    const postArticale = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }
    
        const payload = {
            image: shareMedia,
            video: videoLink,
            user: props.user,
            description: editorText,
            timestamp: firebase.firestore.Timestamp.now(),
        };
    
        if (shareMedia === "" && videoLink === "") {
            // Post content without image or video
            props.postArticale(payload);
        } else {
            // Post content with image or video
            props.postArticale(payload);
        }
    
        reset(e);
    };
    

    const reset = (e) => {
        setEditorText("");
        setShareMedia("");
        setVideoLink("");
        setAssetArea("");
        props.handleClick(e);
    }

    return (
        <>
            {props.showModel === "open" &&
                <Container>
                    <Content>
                        <Header>
                            <h2>Create a Post</h2>
                            <button onClick={(event) => reset(event)}>
                                <img src="./images/close-icon.svg" alt="" />
                            </button>
                        </Header>
                        <SharedContent>
                            <UserInfo>
                                { props.user.photoURL ? (
                                <img src={props.user.photoURL} />
                                ):(
                                <img src="./images/user.svg" alt="" />
                                )}
                                <span>{props.user.displayName}</span>
                            </UserInfo>
        
                            <Editor>
                                <textarea value={editorText} onChange={(e) => setEditorText(e.target.value)} placeholder="What do you want to talk about?" autoFocus={true}
                                />   
                                {assetsArea === "image" ? (
                                    <UploadImage>
                                        <input type="file" accept="image/gif, image/jpeg, image/png, image/jpg" name="image" id="file" style={{display: "none"}} onChange={handleChange}/>
                                        <p> <label htmlFor="file" >select an Image for Upload</label> </p>
                                        {shareMedia && <img src={URL.createObjectURL(shareMedia)} />}
                                    </UploadImage> 
                                ) : (
                                    assetsArea === "media" && (
                                        
                                        <UploadVideo>
                                            <input type="text" placeholder="Please enter video link" value={videoLink} onChange={(e) => setVideoLink(e.target.value)} />

                                            {videoLink && (<ReactPlayer width={'100%'} url={videoLink} />)}
                                        </UploadVideo>
                                        
                                        )
                                    )  
                                }                   
                            </Editor>
        
                        </SharedContent>
                        <ShareCreation>
                            <AttachAssets>
                                <AssetButton onClick={() => switchAssetArea("image")}>
                                    <img src="./images/share-image.svg" alt=""/>
                                </AssetButton>
                                <AssetButton onClick={() => switchAssetArea("media")}>
                                    <img src="./images/share-video.svg" alt=""/>
                                </AssetButton>
                            </AttachAssets>
                            <ShareComment>
                                <AssetButton>
                                    <img src="./images/share-comment.svg" alt="" />
                                    Anyone
                                </AssetButton>
                            </ShareComment>
                            <PostButton disabled={!editorText} onClick={(event) => postArticale(event)}>Post</PostButton>
                        </ShareCreation>
                    </Content>
                </Container>
            }
        </>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    color: #000;
    background: rgba(0, 0, 0, 0.8);
    animation: fadeIn 0.3s;

`;

const Content = styled.div`
    width: 100%;
    max-width: 552px;
    background-color: #fff;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    top: 32px;
`;

const Header = styled.div`
    display: block;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(0, 0,0,0.15);
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    color: rgba(0, 0,0,0.6);
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        width: 40px;
        height: 40px;
        min-width: auto;
        color: rgba(0, 0,0,0.15);
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;

        svg, img{
            pointer-events: none;
        }
    }

`;

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 8px 12px;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #aaa9a999;
    }

    &::-webkit-scrollbar-track {
        background-color: #f5f5f5; 
    }

`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    svg, img{
        width: 48px;
        height: 48px;
        border: 2px solid transparent;
        border-radius: 50%;  
        background-clip: content-box;      
    }
    span{
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 5px;
    }
`;

const ShareCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    min-width: auto;
    color: #000;
    font-size: 16px;
    cursor: pointer;
    img{
        width: 30px;
    }
`;

const AttachAssets = styled.div`
    display: flex;
    align-items: center;
    padding-right: 8px;

    ${AssetButton} {
        width: 40px;
        margin-left: 5px;
    }
`;

const ShareComment = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0, 0, 0, 0.15);

    ${AssetButton} {
        img{
            width: 25px;
            height: 25px;
            margin-right: 5px;
        }
    }
`;

const PostButton = styled.button`
    min-width: 60px;
    border-radius: 20px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 16px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;

    ${(props) =>
        props.disabled
            ? css`
                  background: #aaa;
                `
            : css`
                  background: #0a66c2;
                  &:hover {
                      background: #004182;
                  }
                `
    }

`;

const Editor = styled.div`
    padding: 12px 24px;
    textarea{
        width: 100%;
        min-height: 100px;
        resize: none;
        border: none;
        outline: none;
    }
    textarea::-webkit-scrollbar{
        width: 2px;
    }
    textarea::-webkit-scrollbar-thumb {
        background-color: #aaa9a999;
    }
    textarea::-webkit-scrollbar-track {
        background-color: #f5f5f5; 
    }

    input{
        width: 100%;
        height: 35px;
        margin-bottom: 20px;
        font-size: 16px;
    }
`;


const UploadImage = styled.div`
    text-align: center;
    img{
        margin-top: 30px;
        width: 100%;
    }
    video{
        margin-top: 30px;
        width: 100%;
    }
    label{
        padding: 12px;
        border: 1px solid #000;
        border-radius: 10px;
        cursor: pointer;
        &:hover{
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
`;

const UploadVideo = styled.div`
    input{
        padding: 0 8px;
        border-radius: 8px;
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    postArticale: (payload) => dispatch(postArticalAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModel);





{/* <input type="file" accept="image/gif, image/jpeg, image/png, image/jpg, video/mp4, video/mov, video/avi" name="media" id="file" style={{display: "none"}} onChange={handleChange} />
<p><label htmlFor="file">Select an Image or Video for Upload</label></p>
{shareMedia && (
  <div>
    {shareMedia.type.startsWith('image/') ? (
      <img src={URL.createObjectURL(shareMedia)} alt="Uploaded Image" />
    ) : (
      <video controls>
        <source src={URL.createObjectURL(shareMedia)} type={shareMedia.type} />
        Your browser does not support the video tag.
      </video>
    )}
  </div>
)} */}
