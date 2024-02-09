import styled from "styled-components"

const RightSide = (props) => {
    return (
        <Container>
            <FollowCard>
                <Title>
                    <h2>Add to your feed</h2>
                    <img src="/images/feed-icon.svg" alt="" />
                </Title>
                <FeedList>
                    <li>
                        <a>
                            <Avtar />
                        </a>
                        <div>
                            <span>#LinkedIn</span>
                            <button>Follow</button>
                        </div>
                    </li>
                    <li>
                        <a>
                            <Avtar />
                        </a>
                        <div>
                            <span>#Video</span>
                            <button>Follow</button>
                        </div>
                    </li>
                </FeedList>
                <Recommendation>
                    View all recommendations
                    <img src="/images/right-icon.svg" alt="" />
                </Recommendation>
            </FollowCard>
            <BannerCard>
                <img src="./images/job-add.jpg" alt="" />
            </BannerCard>
        </Container>
    )
}

const Container = styled.div`
    grid-area: rightside;
`;

const FollowCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    position: relative;
    background-color: #fff;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
    padding: 12px;
`;

const Title = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);

`;

const FeedList = styled.ul`
    margin-top: 16px;
    li{
        display: flex;
        align-items: center;
        margin: 12px 0;
        font-size: 14px;
        position: relative;

        & > div {
            display: flex;
            flex-direction: column;
        }

        button {
            background-color: transparent;
            color: rgba(0, 0, 0, 0.6);
            box-shadow: inset  0 0 0 1px rgba(0, 0, 0, 0.6);
            box-sizing: border-box;
            padding: 16px;
            align-items: center;
            border-radius: 15px;
            font-weight: 600;
            display: inline-flex;
            justify-content: center;
            outline: none;
            max-height: 32px;
            max-width: 480px;
            text-align: center;
        }
    }
`;

const Avtar = styled.div`
    background: url("/images/hastag.svg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 48px;
    height: 48px;
    margin-right: 8px;

`;

const Recommendation = styled.a`
    color: #0a66c2;
    font-size: 14px;
    display: flex;
    align-items: center;

`;

const BannerCard = styled(FollowCard)`
    img{
        width: 100%;
        height: 100%;
    }
`;


export default RightSide;