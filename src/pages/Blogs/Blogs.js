import React from "react";

const Blogs = () => {
  return (
    <section className="mx-12 my-12">
      <h1 className="text-2xl font-semibold mb-2">
        How will you improve the performance of a React Application?
      </h1>
      <p>
        Optimizing application performance is key for developers. There are some
        techniques for improving React applications. First of all Keeping
        component state local where necessary secondly, Memoizing React
        components to prevent unnecessary re-renders and Code-splitting in React
        using dynamic import(). Lazy loading images in React is another way to
        improve the performance.
      </p>
      <h1 className="text-2xl font-semibold mb-2 mt-8">
        What are the different ways to manage a state in a React application?
      </h1>
      <p>
        There are Four Kinds of React State to Manage React applications. Which
        are Local state, Global state, Server state, and URL state. Local state
        is data we manage in one or another component. The global state is data
        we manage across multiple components. Server state data that comes from
        an external server must be integrated with our UI state. URL state data
        that exists on our URLs, including the pathname and query parameters.
      </p>
      <h1 className="text-2xl font-semibold mb-2 mt-8">
        How does prototypical inheritance work?
      </h1>
      <p>
        The Prototyping Inheritance is a feature in javascript used to add
        methods and properties in objects. It is a method by which an object can
        inherit the properties and methods of another object. Traditionally, in
        order to get and set the [[Prototype]] of an object, we use
        Object.getPrototypeOf and Object. In Javascript, every object has its
        own hidden, internal property, [[Prototype]]. We can access that
        [[Prototype]] using the __proto__ property.
      </p>
      <h1 className="text-2xl font-semibold mb-2 mt-8">
        Why you do not set the state directly in React.
      </h1>
      <p>
        One should never update the state directly because When directly
        updating the state, it does not change this.state immediately. Instead,
        it creates a pending state transition, and accessing it after calling
        this method will only return the present value. Another reason is
        developers will lose control of the state across all components. If
        update it directly, calling the setState() afterward may just replace
        the update I've made.
      </p>
      <h1 className="text-2xl font-semibold mb-2 mt-8">
        What is a Unit Test? Why should write unit tests?
      </h1>
      <p>
        Unit Testing is a type of software testing where individual units or
        components of a software are tested. The purpose is to validate that
        each unit of the software code performs as expected. Unit Testing is
        done during the development (coding phase) of an application by the
        developers. Unit tests help to fix bugs early in the development cycle
        and save costs. Good unit tests serve as project documentation.
      </p>
    </section>
  );
};

export default Blogs;
