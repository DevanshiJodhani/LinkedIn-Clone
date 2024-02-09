import { connect } from "react-redux";
import styled from "styled-components"

const LeftSide = (props) => {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                    <a>
                        <Photo />
                        <Link>Welcome, {props.user ? props.user.displayName : "there"}!</Link>
                    </a>
                    <a>
                        <AddPhotoText>
                            Add a photo
                        </AddPhotoText>
                    </a>
                </UserInfo>
                <Widget>
                <a>
                    <div>
                        <span>Connections</span>
                        <span>Grow Your Network</span>
                    </div>
                    <img src="/images/widget-icon.svg" alt="" />
                </a>
                </Widget>
                <Item>
                    <span>
                        <img src="/images/item-icon.svg" alt="" />
                        My Items
                    </span>
                </Item>
            </ArtCard>

            <CommunityCard>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>
                        Events
                        <img src="/images/plus-icon.svg" alt="" />
                    </span>
                </a>
                <a>
                    <span>Follow Hastags</span>
                </a>
                <a>
                    <span>Discover more</span>
                </a>
            </CommunityCard>
        </Container>
    )
}

const Container = styled.div`
    grid-area: leftside;
`;

const ArtCard = styled.div`
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 8px;
    position: relative;
    transition: box-shadow 83ms;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
    padding: 12px 12px 16px;
    border-bottom: 1px solid rgba(0,0,0, 0.15);
    word-wrap: break-word;
    word-break: break-word;
`;

const CardBackground = styled.div`
    background: url("/images/card-bg.svg");
    background-position: center;
    height: 100px;
    background-size: 465px;
    margin: -12px -12px 0;
`;

const Photo = styled.div`
    background: url("/images/photo.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-clip: content-box;
    background-size: 60%;
    background-color: #fff;
    box-sizing: border-box;
    box-shadow: none;
    width: 72px;
    height: 72px;
    margin: -38px auto 12px;
    border: 2px solid #fff;
    border-radius: 50%;
`;

const Link = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.9);
`;

const AddPhotoText = styled.div`
    line-height: 1.33;
    margin-top: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #0a66c2;

`;

const Widget = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover{
            background-color: rgba(0, 0, 0, 0.08);
        }

    & > a{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;
        text-decoration: none;


        div{
            display: flex;
            flex-direction: column;
            text-align: left;

            span{
                font-size: 12px;
                line-height: 1.5;
                &:first-child {
                    color: rgba(0, 0, 0, 0.6);
                }
                &:nth-child(2) {
                    color: rgba(0, 0, 0, 1);
                }
            }
        }
    }

`;

const Item = styled.a`
    border-color: rgba(0, 0, 0, 0.8);
    text-align: left;
    padding: 12px;
    font-size: 12px;
    display: block;

    span{
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 1);

        svg{
            color: rgba(0, 0, 0, 0.8);
        }
    }
    &:hover{
            background-color: rgba(0, 0, 0, 0.08)
        }
`;

const CommunityCard = styled(ArtCard)`
    padding: 8px 0 0;
    text-align: left;
    display: flex;
    flex-direction: column;

    a{
        color: #000;
        font-size: 12px;
        padding: 4px 12px 4px 12px;

        &:hover{
            color: #0a66c2;

        }

        span{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &:last-child {
            color: rgba(0, 0, 0, 0.6);
            text-decoration: none;
            border-top: 1px solid #d6cec2;
            padding: 12px;

            &:hover{
                background-color: rgba(0, 0, 0, 0.08);
            }
        }
    }
    
`;

const mapStateToProps = (state) => {
    return{
        user: state.userState.user
    }
}

export default connect(mapStateToProps)(LeftSide);