import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Blog = () => {
  
  useTitle("Blog")
  
    return (
      <div className="grid lg:grid-cols-2 gap-8 text-justify">
        <div className=" border border-y-amber-300 p-6 rounded-xl">
          <img
            className="w-full rounded-lg mb-3"
            src="https://media.istockphoto.com/id/1314979727/photo/server-abstract-background-illustration-3d-rendering.jpg?b=1&s=170667a&w=0&k=20&c=KIDfScSE8N-HRQaxgMKaOilP1auPcpLY7DuORcqKw-8="
            alt=""
          />
          <h3 className="text-xl font-serif font-[400] my-2">
            Difference between SQL and NoSQL
          </h3>
          <p>
            <span className=" font-semibold">SQL:</span> Relational DataBase
            Management System (RDBMS).These databases have fixed or static or
            predefined schema.These databases are not suited for hierarchical
            data storage.These databases are best suited for complex
            queriesVertically Scalable.Follows ACID property. <br />
            <span>Examples:</span> MySQL, PostgreSQL, Oracle, MS-SQL Server etc{" "}
            <br />
            <span className=" font-semibold"> NoSQL:</span>Non-relational or
            distributed database system.They have dynamic schema.These databases
            are best suited for hierarchical data storage.These databases are
            not so good for complex queries.Horizontally scalable.Follows
            CAP(consistency, availability, partition tolerance) <br />
            <span>Examples:</span> MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
          </p>
        </div>
        <div className=" border border-y-amber-300 p-6 rounded-xl">
          <img
            className="w-full rounded-lg mb-3"
            src="https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg?size=626&ext=jpg&ga=GA1.2.939492190.1661093851&semt=sph"
            alt=""
          />
          <h3 className="text-xl font-serif font-[400] my-2">
            What is JWT, and how does it work?
          </h3>
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object.It is
            compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity Provider(IdP).The purpose of using
            JWT is not to hide data but to ensure the authenticity of the data.
            JWT is signed and encoded, not encrypted.JWT is a token based
            stateless authentication mechanism.Basically the identity
            provider(IdP) generates a JWT certifying user identity and Resource
            server decodes and verifies the authenticity of the token using
            secret salt / public key.User sign-in using username and password or
            google/facebook.Authentication server verifies the credentials and
            issues a jwt signed using either a secret salt or a private key.
          </p>
        </div>
        <div className=" border border-y-amber-300 mb-6 p-6 rounded-xl">
          <img
            className="w-full rounded-lg mb-3"
            src="https://vistapointe.net/images/nodejs-4.jpg"
            alt=""
          />
          <h3 className="text-xl font-serif font-[400] my-2">
            What is the difference between javascript and NodeJS?
          </h3>
          <p>
            JavaScript is a client-side scripting language that is lightweight,
            cross-platform, and interpreted. Both Java and HTML include it.
            Node.js, on the other hand, is a V8-based server-side programming
            language.JavaScript is a simple programming language that can be
            used with any browser that has the JavaScript Engine installed.
            Node.js, on the other hand, is an interpreter or execution
            environment for the JavaScript programming language. It requires
            libraries that can be conveniently accessed from JavaScript
            programming to be more helpful.A specific non-blocking operation is
            required to access any operating system. There are a few essential
            objects in JavaScript, but they are entirely OS-specific.What is the
            difference between javascript and NodeJS?
          </p>
        </div>
        <div className=" border border-y-amber-300 p-6 mb-6 rounded-xl">
          <img
            className="w-full rounded-lg mb-3"
            src="https://img.freepik.com/premium-photo/abstract-futuristic-hexagon_40760-200.jpg?size=626&ext=jpg&ga=GA1.2.939492190.1661093851&semt=ais"
            alt=""
          />
          <h3 className="text-xl font-serif font-[400] my-2">
            How does NodeJS handle multiple requests at the same time?
          </h3>
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.A single instance of Node.js runs in
            a single thread. If you have a multi-core system then you can
            utilize every core. Sometimes developer wants to launch a cluster of
            NodeJS process to take advantage of the multi-core system.
          </p>
        </div>
      </div>
    );
};

export default Blog;