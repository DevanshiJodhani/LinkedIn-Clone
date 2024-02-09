import { connect } from "react-redux";
import styled from "styled-components";
import { signOutAPI } from "../Actions";

const Header = (props) => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/images/home-logo.svg" alt="" />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                    <SearchIcon>
                        <img src="/images/search-icon.svg" alt="" />
                    </SearchIcon>
                </Search>
                <Nav>
                    <NavListWrap>
                        <NavList className="active">
                            <a>
                                <img src="/images/nav-home.svg" alt="" />
                                <span>Home</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src="/images/nav-network.svg" alt="" />
                                <span>My Network</span>
                            </a>
                        </NavList>

                        <NavList>
                            <p>
                                <a>
                                    <img src="/images/nav-jobs.svg" alt="" />
                                    <span>Jobs</span>
                                </a>
                            </p>
                        </NavList>

                        <NavList>
                                <a>
                                    <img src="/images/nav-messaging.svg" alt="" />
                                    <span>Messaging</span>
                                </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src="/images/nav-notifications.svg" alt="" />
                                <span>Notifications</span>
                            </a>
                        </NavList>

                        <User>
                            <a>
                                {props.user && props.user.photoURL ? (<img src={props.user.photoURL} alt="" />) : 
                                (<img src="/images/user.svg" alt="" />)}
                                <span>
                                    Me
                                    <img src="/images/down-icon.svg" alt="" />
                                </span>
                            </a>

                            <SignOut onClick={() => props.SignOut()}>
                                <a>Sign out</a>
                            </SignOut>
                        </User>

                        <Work>
                            <a>
                                <img src="/images/nav-work.svg" alt="" />
                                <span>
                                    Work
                                    <img src="/images/down-icon.svg" alt="" />
                                </span>
                            </a>
                        </Work>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    background-color: #fff;
    left: 0;
    padding: 0 24px;
    top: 0;
    position: fixed;
    width: 100vw;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    z-index: 100;

`;

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`;

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
`;

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;

    & > div{
        max-width: 280px;
        input{
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba(0, 0, 0, 0.9);
            width: 218px;
            line-height: 1.75;
            height: 34px;
            font-size: 14px;
            font-weight: 400;
            padding: 0 8px 0 40px;
            vertical-align: text-top;
        }
    }
`;

const SearchIcon = styled.div`
    position: absolute;
    top: 9px;
    left: 2px;
    width: 40px;
    z-index: 1;
    margin: 0;
    border-radius: 0 2px 2px 0;
    display:flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
`;

const Nav = styled.nav`
    margin-left: auto;
    display: block;

    @media (max-width: 768px) {
        position: fixed;
        bottom: 0;
        left: 0;
        background: #fff;
        width: 100%;


    }
`;

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;

    .active{
        span:after{
            content: '';
            transform: translateX(1);
            border-bottom: 2px solid var(--white, #fff);
            bottom: 0;
            left: 0;
            position: absolute;
            transition: transform 0.2s ease-in-out;
            width: 100%;
            border-color: rgba(0, 0, 0, 0.9); 
        }
        
    }
`;


const NavList = styled.li`
    display: flex;
    align-items: center;
    p{
       @media (max-width: 768px) {
        display: none;
       }
    }
    a{
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.5;
        min-height: 52px;
        min-width: 80px;
        text-decoration: none;
        position: relative;
        cursor: pointer;

        span{
            color: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
        }

        @media (max-width: 768px) {
            min-width: 72px;
        }
    }

    &:hover, &:active{
        a{
            span{
                color: rgba(0,0,0, 0.9);
            }
        }
    }
`;

const SignOut = styled.div`
    position: absolute;
    top: 52px;
    background: #a70000;
    color: #fff;
    border-radius: 5px 5px 5px 5px;
    width: 100px;
    height: 40px;
    text-align: center;
    display: none;
    transition: transform 0.8s;
    a{
        font-size: 15px;
    }

    &:hover{
        background-color: rgba(0,0,0,0.3);
        color: #fff;
    }

    
`;

const User = styled(NavList)`
    /* a > svg{
        width: 25px;
        border-radius: 50%;
    } */


    a > img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }

    span{
        display: flex;
        align-items: center;
    }

    &:hover{
        ${SignOut} {
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width: 768px) {
                top: -45px;
                right: 25px;
            }
        }
    }
`;

const Work = styled(User)`
    border-left: 1px solid rgba(0, 0, 0, 0.08);

`;


const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
};

const mapDispatchToProps = (dispatch) => ({
    SignOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);