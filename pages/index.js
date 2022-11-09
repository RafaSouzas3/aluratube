import React from "react";
import config from "../config.json"
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { CSSReset } from "../src/components/CSSReset";


function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState ("");
    return (
        <>
            <CSSReset />
                <div style={{
                    display: "flex",
                    flexDirection:"column",
                    flex:"1"

            }}>
            <Menu valorDoFiltro = {valorDoFiltro} setValorDoFiltro ={setValorDoFiltro}/>
            <Header/>
            <TimeLine searchValue = {valorDoFiltro} playlist= {config.playlist}/>
            </div>
        </>
    );
  }
  
  export default HomePage

const StyledHeader = styled.div`
    background-color: ${({theme}) => theme.backgroundLevel1 };

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
`;
const StyledBanner = styled.div` 
    background-color: blue;
    background-image: url(${config.bg});
    height: 230px
`;
function Header(){
    return (
        <StyledHeader>
            <StyledBanner/>
            <section className="user-info">
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
function TimeLine ({searchValue, ...props}){
    // console.log ("Dentro do componente",props.playlist);
    const playlistNames = Object.keys (props.playlist);
    return (
        <StyledTimeline>
           {playlistNames.map((playlistName)=>{
            const videos = props.playlist[playlistName];
            console.log (playlistName)
            console.log (videos)
            return (
                <section key={playlistName}>
                    <h2>{playlistName}</h2>
                    <div>
                        {
                            videos.filter((video)=>{
                                const titleNormalized= video.title.toLowerCase();
                                const searchValueNormalized= searchValue.toLowerCase();

                                return titleNormalized.includes(searchValueNormalized)

                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
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