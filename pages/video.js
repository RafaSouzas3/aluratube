import React from "react";

import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { CSSReset } from "../src/components/CSSReset";


function Video() {
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
            </div>
        </>
    );
  }
  
  export default Video

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