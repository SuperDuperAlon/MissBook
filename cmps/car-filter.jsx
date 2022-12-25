const { useState, useEffect } = React

import { carService } from "../services/car.service.js"


export function CarFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(carService.getDefaultFilter())

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    // WE WILL NEVER REPEAT OURSELVES
    // function handleVendorChange(ev) {
    //     console.log('ev', ev.target.name);
    //     const { value } = ev.target
    //     setFilterByToEdit((prevFilter) => {
    //         return { ...prevFilter, txt: value }
    //     })
    //     // filterByToEdit.txt = value
    //     // setFilterByToEdit(filterByToEdit)
    // }

    // function handleMinSpeedChange(ev) {
    //     console.log('ev', ev.target.name);
    //     const { value } = ev.target
    //     setFilterByToEdit((prevFilter) => {
    //         return { ...prevFilter, minSpeed: value }
    //     })
    // }

    return <section className="car-filter">
        <h2>Filter our cars</h2>
        <form onSubmit={onSubmitFilter}>
            <label htmlFor="vendor">Vendor:</label>
            <input type="text"
                id="vendor"
                name="txt"
                placeholder="By vendor"
                value={filterByToEdit.txt}
                onChange={handleChange}
            />

            <label htmlFor="minSpeed">Min speed:</label>
            <input type="number"
                id="minSpeed"
                name="minSpeed"
                placeholder="By min speed"
                value={filterByToEdit.minSpeed}
                onChange={handleChange}
            />

            <button>Filter cars!</button>
        </form>

    </section>
}