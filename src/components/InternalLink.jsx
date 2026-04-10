import { Link } from "react-router-dom"

 function InternalLink({children, href}){
    return (
        <Link className="text-sky-600 no-underline hover:underline" to={`/${href}`}>{children}</Link>
    )
 }

export default InternalLink