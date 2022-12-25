const { useState, useEffect } = React

import { CarFilter } from '../cmps/car-filter.jsx';
import { CarList } from '../cmps/car-list.jsx';
import { CarDetails } from './car-details.jsx';

import { carService } from './../services/car.service.js';
import { UserMsg } from '../cmps/user-msg.jsx';

export function CarIndex() {

    const [filterBy, setFilterBy] = useState(carService.getDefaultFilter())
    const [cars, setCars] = useState([])
    const [selectedCar, setSelectedCar] = useState(null)
    const [userMsg, setUserMsg] = useState('')

    useEffect(() => {
        loadCars()
    }, [filterBy])

    function loadCars() {
        carService.query(filterBy).then(carsToUpdate => {
            setCars(carsToUpdate)
        })
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }

    function onRemoveCar(carId) {
        carService.remove(carId).then(() => {
            const updatedCars = cars.filter(car => car.id !== carId)
            setCars(updatedCars)
            flashMsg('Car removed!')
        })
    }

    function onSelectCar(carId) {
        // setSelectedCar(car)
        carService.get(carId).then((car) => {
            setSelectedCar(car)
        })
    }

    function flashMsg(msg) {
        setUserMsg(msg)
        setTimeout(() => {
            setUserMsg('')
        }, 3000)
    }

    console.log('user msg:', userMsg);
    return <section className="car-index ">
        {userMsg && <UserMsg msg={userMsg} />}
        {!selectedCar && <div>
            <h1>Hello from car app!</h1>
            <CarFilter onSetFilter={onSetFilter} />
            <CarList cars={cars} onRemoveCar={onRemoveCar} onSelectCar={onSelectCar} />
        </div>}

        {selectedCar && <CarDetails
            car={selectedCar}
            onGoBack={() => setSelectedCar(null)}
        />}
    </section>
}