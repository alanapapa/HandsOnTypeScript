function getEmployee(id) {
    return {
        name: 'John',
        age: 35,
        address: '123 St',
        country: 'Turkey'
    }
}

const { name: fullname, age } = getEmployee(22);
console.log('employee', fullname, age);

/*
Let's pretend for a moment that the getEmployee function goes
to a server and retrieves the information of an employee by id.
Now, as you can see, the employee object has
lots of fields and perhaps not every caller of the function
will need every field. So, we use object destructuring to select
only the fields we care about. Note, in addition, that we also
give the field name an alias of fullName by using the colon.
*/


function getEmployeeWorkInfo(id) {
    return [
        id,
        'Office St',
        'France'
    ]
}

const [id, officeAddress] = getEmployeeWorkInfo(33);
console.log('employee', id, officeAddress);


/*
So, we can also destructure an array as well, but note that
the order of the elements does matterat destructure time.
*/