// was able to use the reactDOM libray because is part of the thing install from the CDN script
// NOTE: you cant render to sibling element together 
//------------------example----------------------------
// ReactDOM.render(<h1>1st sibling</h1><h2> second sibling </h2>, document.getElementById("root"))

//------------------correction have wraper that will act as parent so you render both----------- 
// ReactDOM.render(<div>  
//                 <h1>Hello Big React</h1>
//                 <ul>
//                      <li>book</li>
//                      <li>pen</li>
//                      <li>bag</li>
//                  </ul>
//             </div>,
//             document.getElementById("root")
// )
//---------------------------------------method 2 JSX------------------------------------------------------
// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )


//----------------------------------Bootstrap--------------------------------------------------
// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// // Challenge: Create your own custom React component!
// // Call it "MainContent", and have it return a simple
// // h1 element that says "I'm learning React!"

// // Afterward, render it below the Navbar (which
// // you can do inside the ReactDOM.render call below)

// function MainContent() {
//     return (
//         <h1>I'm learning React!</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )

/* 
------------------------------------Challenge------------------------------------------: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

// var navbar=(
//     <nav>
//         <h1>Kobo Ventures</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>

//     </nav>

// )
// ReactDOM.render(
//     navbar,document.getElementById("root")
//  )
//-----------------new method starting React CDN 18.20------------------------------
// ReactDOM.createRoot(document.getElementById("root")).render(navbar)

// -----------Another way of writing the same thing-------------------------------- 
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(navbar)

//-------------------------------more practice problem jsx---------------------------------------------------
// const sample=(
//     <div>
//         <h2>first element</h2>
//         <h2>second element</h2>
//         <h2>Third element</h2>
//         <h2>four element</h2>
//     </div>
// )
// // ReactDOM.render(sample,document.getElementById("root"))
// ReactDOM.createRoot(document.getElementById("root")).render(sample)
// //                 ( this where are want to render )       (the thing I want render)

/**
---------------------------Challenge2-------------------------
                           function : 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */
// function Page (){
//     return(
//         <div>
//            <header>
            
//             Nairaland
//             </header>
//             <h1>I need a job that's why I'm learning this shit </h1>
//             <ol>
            

                
//                 <li>Home</li>
//                 <li>About</li>
                
                

//             </ol>
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<Page/>)
// ReactDOM.render(CustomPage,document.getElementById("room"))
/**
---------------------------Challenge------------------------------------------: 

- Move the header and `footer`  into its own component called header "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

