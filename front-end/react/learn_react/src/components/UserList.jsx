

const UserList = () => {
    const users = [
        {id: 1, name: "Cara", age: 38},
        {id: 2, name: "Gabe", age: 38},
        {id: 3, name: "Lori", age: 36},
    ];
    return (
        <div>
            <h2>Potential Dates:</h2>
            {users.map(({name, age, id}) => (
                <ul key={id}>
                    <li>Name: {name}</li>
                    <li>Age: {age}</li>
                </ul>
            ))}
        </div>
    )
}

export default UserList