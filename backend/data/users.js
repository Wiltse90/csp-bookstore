import bcrypt from 'bcryptjs'

const db.users.insertMany([
    {
        name: 'Admin User',
        email: 'admin@bookstore.com',
        password: 'admin123',
        roles: 'readWrite'

    },
    {
        name: 'John Doe',
        email: 'jDoe100@anyemail.com',
        password: 'password1',
        roles: 'none'
    },
    {
        name: 'Jane Doe',
        email: 'janydoey99@example.com',
        password: 'password2',
        roles: 'none'

    },
    {
        name: 'Steven Wiltse',
        email: 'wiltses@csp.edu',
        password: 'password3',
        roles: 'none'

    }
])

export default users

