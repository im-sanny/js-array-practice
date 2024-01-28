    // Checking Array Membership with ‘includes’
    // Instructions:
    // Create an array of books containing different book.
    // Use the includes method to check if the array contains a javascript book.
    // Print a message to the console indicating whether the element is present in the array or not.

    const books=['geography', 'biology', 'math', 'history', 'javascript' ];

    
    console.log(books.includes('javascript'));
    if(books.includes('javascript')){
        console.log('i want to buy a copy')
    }else{
        console.log('you should buy a copy of js book')
    }