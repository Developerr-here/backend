class ApiError extends Error{
    constructor(
        statusCode,
        message="something went wrong",
        errors=[],
        stack=""
    )
    {

//         The Error class already knows how to handle messages.

// super() is like saying: "Hey Dad (the Error class), take this 'message' and do what you normally do with it."

// You must call super() before you can use the word this in a child class.
        super(message)

        // it's a way for the object to talk about itself. "This specific instance I'm working with right now."
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors

        if(stack){

            // If your app crashes, the stack tells you: "The error happened in User.js at line 10, which was called by Auth.js at line 5, which was called by Index.js at line 1."
            this.stack=stack
        }else{

            // "Record where this error happened, but when you show me the list of files (the stack), don't include the ApiError internal code itself. Start the report from where I actually called the error."
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export { ApiError }