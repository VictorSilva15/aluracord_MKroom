//Defining global Styles to use in the components
//To use it, just add it as a tag on the top of the argument
export default function GlobalStyle(){
    return(
        <style global jsx>{`
        
            *{
                margin:0;
                padding:0;
                box-sizing:border-box;
                list-style:none;
                font-family: 'Roboto Condensed', sans-serif;
            }

            body{
                /* Firefox scrollbar*/
                scrollbar-width: thin;
                scrollbar-color: #29333D #313D49
            }
            /* App fit height */
            html, body, #_next {
                min-height: 100vh;
                display:flex;
                flex:1;
            }
            #_next{
                flex:1;
            }
            #_next > * {
                flex: 1;
            }
            /* all browsers */
            .scrollBar::-webkit-scrollbar {
                width: 0.5rem;               /* width of the entire scrollbar */
            }

            .scrollBar::-webkit-scrollbar-track {
                background: #313D49;        /* color of the tracking area */
            }

            .scrollBar::-webkit-scrollbar-thumb {
                background-color: #29333D;    /* color of the scroll thumb */
                border-radius: 20px;       /* roundness of the scroll thumb */
                border: 1px solid #101418;  /* creates padding around scroll thumb */ 
            }
            /* ./App fit Height */
        `}</style>
    );
}
