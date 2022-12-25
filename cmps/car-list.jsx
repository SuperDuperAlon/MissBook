import { CarPreview } from "./car-preview.jsx";

export function CarList({ cars, onRemoveCar, onSelectCar }) {

    return <ul className="car-list">
        {
            cars.map(car => <li key={car.id}>
                <CarPreview car={car} />
                <div>
                    <button onClick={() => onRemoveCar(car.id)}>Remove car!</button>
                    <button onClick={() => onSelectCar(car.id)}>Select car!</button>
                </div>
            </li>)
        }
    </ul>
}