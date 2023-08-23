import { fetchImageUrls } from 'google-photos-album-image-url-fetch';
import * as fsPromise from 'fs/promises';
import { readFileSync } from 'fs';

export default async function Home() {
  const list = readFileSync("./app/album.json", 'utf-8');
  const album = JSON.parse(list).map((pic : any) =>
    <img style={{display:"block", width:"32.4vw", margin:"0.33vw"}} key={pic.url} src={pic.url}/>
  );
  const main = async () => {
    const re = await fetchImageUrls('https://photos.app.goo.gl/BSsiEqy2akQaKNQF6');
    await fsPromise.writeFile("./app/album.json", JSON.stringify(re, null, 2));
  };
  main().catch(er => console.error(er));
  
  return (
    <main>
      <div style={{display:"flex", flexWrap:"wrap"}}>
        Contact{album}
      </div>
    </main>
  )
}