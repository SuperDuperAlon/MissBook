
export function CarPreview({ car }) {

    return <article className="car-preview">
        <h2>Car vendor: {car.vendor}</h2>
        <h3>Max Speed: {car.maxSpeed}</h3>
        <img src={`assets/img/${car.vendor}.png`} />
    </article>
}