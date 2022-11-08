import config from "../config.json"
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estiloDaHomePage = {
        // backgroundColor: "red"
    };

    // console.log(config.playlist);

    return (
        <>
            <CSSReset />
            <div style={estiloDaHomePage}>
            <Menu/>
            <Header/>
            <TimeLine playlist= {config.playlist}/>
            </div>
        </>
    );
  }
  
  export default HomePage

// function Menu (){
//     return (
//         <div>
//             Menu
//         </div>
//     );
// }

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        left: 16px;
        border-radius: 40px;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;

    }
    .banner{
        display: flex;
        position: absolute ;
        width: 1512px;
        height: 230px;
        left: 0;
        top: 56px;
        align-items: center;
    }
`;

function Header(props){
    return (
        <StyledHeader>
            <section className="user-info">
                <section className="banner">
                    <p>
                        <banner img src={`https://unsplash.com/photos/Q1p7bh3SHj8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink.jpg`}/>
                    </p>
                </section>
                    <img src={`http://github.com/${config.github}.png`}/>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    );
}
function TimeLine (props){
    // console.log ("Dentro do componente",props.playlist);
    const playlistNames = Object.keys (props.playlist);
    return (
        <StyledTimeline>
           {playlistNames.map((playlistName)=>{
            const videos = props.playlist[playlistName];
            console.log (playlistName)
            console.log (videos)
            return (
                <section>
                    <h2>{playlistName}</h2>
                    <div>
                        {
                            videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb}/>
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                               );
                               
                            })
                        }
                    </div>
                </section>
            )
        })}
        </StyledTimeline>
    );
}