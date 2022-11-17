import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-center text-4xl text-yellow-600 font-bold mb-10'>Questions And Answer</h2>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1'>
                    <h1 className='text-2xl font-semibold  text-yellow-500  text-center mb-10'>Difference between SQL and NoSQL.</h1>

                    <br />
                    <p className='text-center'>
                        <li>
                            SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.
                        </li>
                        <br />
                        <li>
                            Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.
                        </li>
                        <br />
                        <li>
                            SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                        </li>
                        <br />
                        <li>
                            SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.
                        </li>
                        <br />
                        <li>
                            Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.
                        </li>

                    </p>
                </div>


                <div>
                    <h1 className='text-2xl font-semibold  text-yellow-500  text-center mb-10'>What is JWT, and how does it work?.</h1>
                    <p>

                        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

                    </p>
                </div>

                <div>
                    <h1 className='text-2xl font-semibold  text-yellow-500  text-center mb-10'>What is the difference between javascript and NodeJS?</h1>
                    <p>

                        JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight (easy to learn syntax) and object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access.

                    </p>
                </div>

                <div>
                    <h1 className='text-2xl font-semibold  text-yellow-500  text-center mb-10'>How does NodeJS handle multiple requests at the same time?</h1>
                    <p>

                        How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;