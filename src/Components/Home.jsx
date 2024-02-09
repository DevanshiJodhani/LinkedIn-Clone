import styled from "styled-components";
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const Home = (props) => {
    return (
        <Container>
            {!props.user && <Navigate to='/' />}
            <Section>
                <h5>
                    <a>Hiring in a hurry ? -  </a>
                </h5>
                <p>
                    Find talented pros in record time with Upwork and keep business moving.
                </p>
            </Section>
            <LayOut>
                <LeftSide />
                <Main />
                <RightSide />
            </LayOut>
        </Container>
    )
}

const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
`;

const Content = styled.div`
    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;
`;

const Section = styled.section`
    min-height: 50px;
    padding: 20px 0;
    box-sizing: content-box;
    text-align: center;
    display: flex;
    justify-content: center;

    h5{
        color: #0a66c2;
        font-size: 14px;
        text-decoration: underline;

        a{
            font-weight: 700;
        }
    }

    p{
        color: #434649;
        text-decoration: underline;
        font-size: 14px;
        font-weight: 600;

    }

    @media (max-width: 768px) {
        padding: 0 5px;
        flex-direction: column;
    }
`;

const LayOut = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    grid-template: auto;
    margin: 25px 0;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`;

const mapStateToProps = (state) => {
    return{
        user: state.userState.user,
    };
};


export default connect(mapStateToProps)(Home);