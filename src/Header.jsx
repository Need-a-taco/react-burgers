/* HEADER
In this file, we will be creating our first component. Namely, the header. The
point is design what this would look like, and then export it elsewhere. We
want to see this on the other pages, so we would import it there. 

Notice that this is JSX code, or Javascript XML, which is basically just a
Javasript and HTML hybrid that makes this whole process a lot easier. Notice
that we have the Javascript looking function structure, but within the
return, we basically just implement an HTML file.
*/


function Header() {

    return(
        <header>
            <h1>My React Website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header