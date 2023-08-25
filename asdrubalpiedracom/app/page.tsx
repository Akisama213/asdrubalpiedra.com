import { fetchImageUrls } from 'google-photos-album-image-url-fetch';
import * as fsPromise from 'fs/promises';
import { readFileSync } from 'fs';
import { ImageList } from '@mui/material';

export default async function Home() {
  const list = readFileSync("./app/album.json", 'utf-8');
  const album = JSON.parse(list).map((pic : any) =>
    <img style={{width:"100%", objectFit:"contain", height: "max-content", marginBottom:"10px"}} src={pic.url} key={pic.url} alt="art"/>
  );
  const main = async () => {
    const re = await fetchImageUrls('https://photos.app.goo.gl/BSsiEqy2akQaKNQF6');
    await fsPromise.writeFile("./app/album.json", JSON.stringify(re, null, 2));
  };
  main().catch(er => console.error(er));
  
  return (
    <main>
      <ImageList variant="masonry" cols={3} gap={10}>
        {album}
      </ImageList>
    </main>
  )
}
