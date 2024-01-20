'use client'
import { ImageList, ImageListItem } from '@mui/material';
import { useEffect, useState } from 'react';
import './gallery.css';
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import { firebaseConfig } from "../../firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the storage service
const storage = getStorage(app);



function Loader(Loading: boolean) {
	let Animation = "";
	if(!Loading) {
		Animation = "fade 3s ease-out forwards"
	}
  return (
	<div className='loaderContainer' style={{animation: Animation}}>
	  <b style={{color: "white"}}>
		Loading gallery...
	  </b>
	  <div className='loaderIcon'/>
	</div>
  );
}


export default function Gallery({source} : {source : string}) {
  const [gallery, setGallery] = useState<null | { type: string; url: string }[]>(null);
  const [Loading, setLoading] = useState(true);
  let [cols, setCols] = useState(3);
	
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

  useEffect(() => {
		
			// Reference to the folder in storage
			const folderRef = ref(storage, source);

			// Get a list of all items (images) in the folder
			listAll(folderRef)
				.then((result) => {
					const promises = result.items.map((item) => {
						return getDownloadURL(item).then((url) => {
							return getMetadata(item).then((metadata) => {
								const contentType = metadata.contentType;

								if (contentType && contentType.startsWith('image/')) {
									return { type: 'image', url: url };
								} else if (contentType && contentType.startsWith('video/')) {
									return { type: 'video', url: url };
								} else {
									return { type: 'unknown', url: url };
								}
							});
						});
					});

					return Promise.all(promises);
				})
				.then((itemsWithType) => {
					setGallery(itemsWithType);
					setLoading(false);
				})
				.catch((error) => {
					console.log("Got the error: " + error);
				});
			}, []);

	let placeHolders = [];
	for(let n = 1; n < 10; n++) {
		placeHolders.push(
			<ImageListItem>
				<div className="placeHolder" style={{animation: "cardFade 7.5s ease " + n/1.2 + "s infinite"}}/>
			</ImageListItem>
		)
	}

  return (
	<>
		{ Loader(Loading) }
		
		<div style={{marginRight:"10px", marginLeft:"10px", zIndex:"0"}}>
			
			{ gallery != null ? (
				<ImageList variant="masonry" cols={cols} gap={10}>
					{ gallery.map((media : any) =>
		  media.type == "video" ? (
				<ImageListItem key={media.url}>
					<video loop muted className='video'
						onMouseEnter={(event) => {
							event.currentTarget.play();
							event.currentTarget.style.filter = "brightness(100%)";
							event.currentTarget.style.scale = "100%"
						}}
						onMouseLeave={(event) => {
							event.currentTarget.pause();
							event.currentTarget.style.filter = "brightness(50%)";
							event.currentTarget.style.scale = "98%"
						}}
					>
					<source src={media.url}/>
					</video>
				</ImageListItem>
			) : (
				<ImageListItem key={media.id}>
					<img className='image' loading="lazy" src={media.url}/>
				</ImageListItem>
			)
		) }
				</ImageList>
				) : (
				<ImageList variant="masonry" cols={cols} gap={10}>
					{ placeHolders }
				</ImageList>
			)}
			
		</div>
	</>
  )
}