import Link from './Link';

const links = [
  { url: "/", text: "Inicio"},
  { url: "/noticias", text: "Noticias"},
  { url: "/contacto", text: "Contacto"},
];

export default function Navbar(props) {
  return (
    links.map(l => <Link url={l.url} texto={l.text} />)
  )
} 