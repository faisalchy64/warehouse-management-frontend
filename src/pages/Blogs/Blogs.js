import { Container } from "react-bootstrap";

function Blogs() {
    return (
        <section className="py-5">
            <Container>
                <h1>Difference between javascript and nodejs.</h1>
                <p>JavaScript</p>
                <ul>
                    <li>JavaScript is a programming language.</li>
                    <li>JavaScript can run in the browser.</li>
                    <li>It is basically used on the client-side.</li>
                    <li>Javascript is used in frontend development.</li>
                </ul>

                <p>NodeJS</p>
                <ul>
                    <li>NodeJS is a JavaScript runtime environment.</li>
                    <li>
                        With the help of NodeJS, we can run JavaScript in
                        terminal and server.
                    </li>
                    <li>It is basically used on the server-side.</li>
                    <li>NodeJS is used in server-side development.</li>
                </ul>

                <h1>
                    When should you use nodejs and when should you use mongodb?
                </h1>
                <p>
                    NodeJS is a JavaScript runtime environment. And MongoDB is a
                    database, where we can store data. When we need to work on
                    server-side we should use NodeJS. When we need to store data
                    to a database we should use MongoDB. From client-side we can
                    request for some specific data to server-side and then from
                    server-side we can get specific data from database and then
                    send the requested data to client-side.
                </p>

                <h1>Differences between SQL and NOSQL databases.</h1>
                <p>SQL</p>
                <ul>
                    <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).</li>
                    <li>
                        These databases have fixed or static or predefined
                        schema.
                    </li>
                    <li>
                        These databases are not suited for hierarchical data
                        storage.
                    </li>
                    <li>Vertically Scalable.</li>
                </ul>

                <p>NOSQL</p>
                <ul>
                    <li>Non-relational or distributed database system.</li>
                    <li>They have dynamic schema.</li>
                    <li>
                        These databases are best suited for hierarchical data
                        storage.
                    </li>
                    <li>Horizontally scalable.</li>
                </ul>
            </Container>
        </section>
    );
}

export default Blogs;
