export default function Test({queryParam}) {

let name = queryParam

    return (
    <>
        <h1>Hello, {name} this is cool ... </h1>
        <style jsx>
            {`
            h1 {
                color:hotpink;
            }
            
            `}

        </style>
    </>
    ) 
}

// async function 
export  function getServerSideProps({query}) {
    // get query param from url
    let queryParam = query.name

    return {
        props: {
            queryParam,
        }
    }
}