"use client"
import Link from 'next/link'
import './header.css';
import { usePathname } from 'next/navigation'

export default function Header() {
	const pathway = usePathname();
	const list = ["/", "/3d", "/animation", "/characters", "/creatures", "/graphic", "/backgrounds"];

	const handleMouseEnter = (icon : any) => {
		let Header = document.getElementById("Jheader");
		if(Header) {
			switch(icon) {
				case 1:
					Header.style.background = "rgba(0, 0, 0, 0)";
					break
				case 2:
					Header.style.background = "rgb(220, 120, 130)";
					break
				case 3:
					Header.style.background = "rgb(0, 119, 181)";
					break
			} 
		}
	};
  
	const handleMouseLeave = () => {
		let Header = document.getElementById("Jheader");
		if(Header) {
			Header.style.background = "black"
		}
	};

	if (typeof document !== 'undefined') {
		list.forEach(path => {
			let mark = document.getElementById(path);
			if(mark) mark.style.textDecorationColor = "transparent";
		});
		let mark = document.getElementById(pathway);
		if(mark) mark.style.textDecorationColor = "white";
 	}

	return (
		<>
			<div className='Jbackheader'/>
			<header id="Jheader" className="Jheader">
				<div className="Jtitle" >
					<Link href="/">
						<img style={{height:"4em", margin:"0.5em"}} src="/asdrubal-name-2023-transp.svg"/>
					</Link>
				</div>
				<div className="Jside" style={{textAlign:"right"}}>
					<Link href="/" id="/"
						onMouseEnter={(event) => {event.currentTarget.style.fontSize = "1.3em"}} 
						onMouseLeave={(event) => {event.currentTarget.style.fontSize = "1.1em"}}
						className='Jlink'>Home</Link>
					<Link href="/3d" id="/3d"
						onMouseEnter={(event) => {event.currentTarget.style.fontSize = "1.3em"}} 
						onMouseLeave={(event) => {event.currentTarget.style.fontSize = "1.1em"}}
						className='Jlink'>3D</Link>
					<Link href="/animation" id="/animation"
						onMouseEnter={(event) => {event.currentTarget.style.fontSize = "1.3em"}} 
						onMouseLeave={(event) => {event.currentTarget.style.fontSize = "1.1em"}}
						className='Jlink'>Animation</Link>
					<Link href="/characters" id="/characters"
						onMouseEnter={(event) => {event.currentTarget.style.fontSize = "1.3em"}} 
						onMouseLeave={(event) => {event.currentTarget.style.fontSize = "1.1em"}}
						className='Jlink'>Characters</Link>
					<Link href="/creatures" id="/creatures"
						onMouseEnter={(event) => {event.currentTarget.style.fontSize = "1.3em"}} 
						onMouseLeave={(event) => {event.currentTarget.style.fontSize = "1.1em"}}
						className='Jlink'>Creatures</Link>
					<Link href="/graphic" id="/graphic"
						onMouseEnter={(event) => {event.currentTarget.style.fontSize = "1.3em"}} 
						onMouseLeave={(event) => {event.currentTarget.style.fontSize = "1.1em"}}
						className='Jlink'>Graphic Design</Link>
					<Link href="/backgrounds" id="/backgrounds"
						onMouseEnter={(event) => {event.currentTarget.style.fontSize = "1.3em"}} 
						onMouseLeave={(event) => {event.currentTarget.style.fontSize = "1.1em"}}
						className='Jlink'>Backgrounds</Link>
					<a onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} className="Ja" href="https://www.instagram.com/asdrubal_piedra/" target="_blank">
						<img className="Jicon" src="/icons8-instagram.svg"/>
					</a>
					<a onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} className="Ja" href="mailto:asdrubalpc14@gmail.com" target="_blank">
						<img className="Jicon" src="/icons8-mail.svg"/>
					</a>
					<a style={{marginRight: "1.5em"}} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} className="Ja" href="https://www.linkedin.com/in/asdrubal-piedra-bb0b2b180/" target="_blank">
						<img className="Jicon" src="/icons8-linked-in.svg"/>
					</a> 
				</div>
			</header>
		</>
	)
}