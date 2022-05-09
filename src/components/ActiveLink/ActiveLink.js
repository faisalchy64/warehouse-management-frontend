import { Link, useMatch, useResolvedPath } from "react-router-dom";

function ActiveLink({ children, to }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link className={match ? "active link" : "link"} to={to}>
            {children}
        </Link>
    );
}

export default ActiveLink;
