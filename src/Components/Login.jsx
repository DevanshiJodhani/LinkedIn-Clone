import styled from "styled-components"
import { connect } from "react-redux";
import { signInAPI } from "../Actions";
import { Navigate } from "react-router-dom";

const Login = (props) => {
    return(
        <Container>
            {props.user && <Navigate to="/home" />}
            <Nav>
                <a href="/">
                <img src="/images/login-logo.svg" alt="" />  
                </a>
                <div>
                    <Join>Join now</Join>
                    <SignIn>Sign in</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional Community</h1>
                    <img src="/images/login-hero.svg" alt="" />
                </Hero>
                <Form>
                    <Google onClick={() => props.signIn()}>
                        <img src="/images/google.svg" alt="" />
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
};



const Container = styled.div`
    padding: 0px;

`;

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a{
        width: 135px;
        height: 34px;

        @media (max-width: 768px) {
            padding: 0 5px;            
        }
    }
`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 12px;
    cursor: pointer;
    transition: 0.5s;

    &:hover{
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
    }
    @media (max-width: 768px) {
        padding: 10px 12px;
        font-size: 14px;
    }
`;

const SignIn = styled.a`
    padding: 10px 24px;
    font-size: 16px;
    font-weight: 600;
    color: #0a66c2;
    box-shadow: inset 0 0 0 1px #0a66c2;
    border-radius: 24px;
    line-height: 40px;
    transition: 0.5s;
    cursor: pointer;
    text-align: center;
    background-color: rgba(0,0,0,0);
    
    &:hover{
        background-color: rgba(112, 181, 249, 0.15);
        color: #0a66c2;
        text-decoration: none;
    }

`;

const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    max-width: 1128px;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 138px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    align-items: center;
    margin: auto;

    @media (max-width: 768px) {
        margin: auto;
        min-height: 0px;
    }
`;

const Hero = styled.div`
    width: 100%;
    h1{
        font-size: 56px;
        padding-bottom: 0;
        font-weight: 200;
        color: #2977c9;
        width: 55%;
        line-height: 70px;

        @media (max-width: 768px) {
            font-size: 20px;
            text-align: center;
            line-height: 2;
            width: 100%;
        }
    }

    img{
        width: 700px;
        height: 680px;
        position: absolute;
        bottom: 30px;
        right: -180px;

        @media (max-width: 768px) {
            width: initial;
            height: initial;
            position: initial;
            top: 238px;
        }
    }
`; 

const Form = styled.div`
    margin-top: 150px;
    width: 408px;

    @media (max-width: 768px) {
        margin: 50px; 
    }
`;

const Google = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 56px;
    background-color: #fff;
    color: rgba(0,0,0, 0.6);
    border-radius: 28px;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid #000;
    outline: none;
    z-index: 0;
    transition: 0.5s;

    &:hover{
        color: rgba(0, 0, 0, 0.9);
        background-color: rgba(207, 207, 207, 0.25);
    }

    img{
        margin-right: 8px;
    }
`;


const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

