'use client'
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [cols, setCols] = useState(3);
  useEffect(() => {
    let portrait = window.matchMedia("(orientation: portrait)");
    portrait.addEventListener("change", function(e) {
      if(e.matches) {
        setCols(2);
      } else {
        setCols(3);
      }
    });
  }, []);
  
  return (
    <main>
      <ImageList cols={cols} gap={10}
              style={{paddingRight: "0.5em", paddingLeft: "0.5em", paddingBottom: "2em"}}>
        <ImageListItem key="1" 
          onMouseEnter={(event) => {
            event.currentTarget.style.scale = "100%"
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.scale = "98%"
          }}
          style={{transition: "all 0.5s ease"}}>
          <Link href="/3d">
            <video 
              preload="none" loop muted className='video' autoPlay
              style={{aspectRatio:"1/1", objectFit: "cover", borderRadius: "20px", objectPosition: "51% 50%"}}
            >
              <source src="/8B25D101-46A4-41E0-A72A-0F5D9B29B22B.MP4" type="video/mp4"/>
            </video>
          </Link>
          <ImageListItemBar
            title="3D"
            style={{fontWeight: "600", textAlign: "center", borderRadius: "20px"}}
          />
        </ImageListItem >
        <ImageListItem key="2"
              onMouseEnter={(event) => {
                event.currentTarget.style.scale = "100%"
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.scale = "98%"
              }}
              style={{transition: "all 0.5s ease"}}>
            <Link href="/animation">
            <img className='image' loading="lazy" alt={"Character"} src="/GALLIPOLLO WALLPAPER_02.gif"
            style={{aspectRatio:"1/1", objectFit: "cover", borderRadius: "20px"}}
            />
            </Link>
          <ImageListItemBar
            title="Animation"
            style={{fontWeight: "600", textAlign: "center", borderRadius: "20px"}}
          />
				</ImageListItem>
        <ImageListItem key="3" 
            onMouseEnter={(event) => {
              event.currentTarget.style.scale = "100%"
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.scale = "98%"
            }}
            style={{transition: "all 0.5s ease"}}>
            <Link href="/characters">
              <img className='image' loading="lazy" alt={"Character"} src="/24795f22781473.56046ba36a55d.jpg"
                style={{aspectRatio:"1/1", objectFit: "cover", borderRadius: "20px"}}
                />
            </Link>
          <ImageListItemBar
            title="Character Design"
            style={{fontWeight: "600", textAlign: "center", borderRadius: "20px"}}
          />
        </ImageListItem >
        <ImageListItem key="4" 
            onMouseEnter={(event) => {
              event.currentTarget.style.scale = "100%"
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.scale = "98%"
            }}
            style={{transition: "all 0.5s ease"}}>
            <Link href="/creatures">
              <img className='image' loading="lazy" alt={"Character"} src="/bingo.jpg"
                style={{aspectRatio:"1/1", objectFit: "cover", borderRadius: "20px"}}
              />
            </Link>
          <ImageListItemBar
            title="Creatures"
            style={{fontWeight: "600", textAlign: "center", borderRadius: "20px"}}
          />
        </ImageListItem >
        <ImageListItem key="5" 
            onMouseEnter={(event) => {
              event.currentTarget.style.scale = "100%"
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.scale = "98%"
            }}
            style={{transition: "all 0.5s ease"}}>
            <Link href="/graphic">
              <video 
                preload="none" loop muted className='video' autoPlay
                style={{aspectRatio:"1/1", objectFit: "cover", borderRadius: "20px", objectPosition: "50% 50%"}}
              >
                <source src="/ILUSTRACION5.mp4" type="video/mp4"/>
              </video>
            </Link>
          <ImageListItemBar
            title="Graphic Design"
            style={{fontWeight: "600", textAlign: "center", borderRadius: "20px"}}
          />
        </ImageListItem >
        <ImageListItem key="6" 
            onMouseEnter={(event) => {
              event.currentTarget.style.scale = "100%"
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.scale = "98%"
            }}
            style={{transition: "all 0.5s ease"}}>
            <Link href="/backgrounds">
              <img className='image' loading="lazy" alt={"Character"} src="/Color-keys.jpg"
                style={{aspectRatio:"1/1", objectFit: "cover", borderRadius: "20px"}}
                />
            </Link>
          <ImageListItemBar
            title="Backgrounds"
            style={{fontWeight: "600", textAlign: "center", borderRadius: "20px"}}
          />
        </ImageListItem >
      </ImageList>
    </main>
  )
}
