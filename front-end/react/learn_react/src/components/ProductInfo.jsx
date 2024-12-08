

const ProductInfo = () => {
    const products = [
        {id: 1, name: "Python for Data Science", price: 249},
        {id: 2, name: "Enterprise Development with Java", price: 459},
        {id: 3, name: "Embedded by C", price: 219},
    ]

    return (
        <div>
            <h2>Courses for Sale</h2>
            <div>
                {products.map(({id, name, price}) => (
                    <ul key={id}>
                        <li>Course: {name}</li>
                        <li>Cost: ${price}</li>
                    </ul>
                ))}
            </div>
        </div>
  );
}

export default ProductInfo