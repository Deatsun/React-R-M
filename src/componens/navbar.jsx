export default function Navbar(){
    return(
        <header className="text-white bg-black  py-10">
            <ul className="flex gap-10 flex justify-center gap-20 font-semibold text-xl">
             <li><a href="App.jsx" className="hover:text-orange-500">Characters</a></li>
             <li><a href="episodes.jsx" className="hover:text-orange-500">Episodes</a></li>
             <li><a href="loaction.jsx" className="hover:text-orange-500">Location</a></li>
            </ul>
        </header>
    )
}