
let pattern=(function() {
        let x=3;

        function increment() {
            console.log(++x) ;
        }

        function getvalue(){
            console.log(x);
        }

        function square(){
            console.log(x*x);
        }

        return {
            increment,
            getvalue
            // square
        }
    })()

    console.log(typeof(pattern));
    pattern.getvalue()
    pattern.increment()
    pattern.increment() //closure property

    // pattern.square()