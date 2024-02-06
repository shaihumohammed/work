export default function Card() {
  return (
    <>
      <form action="">
        <label htmlFor="listing-type">Listing Type</label>
        <select name="listing-type" id="listing-type">
          <option value="rent">Rent</option>
        </select>

        <label htmlFor="addess">Addess</label>
        <input type="text" placeholder="Enter the full address" id="address" />
        <div className="column">
          <div>
            <label htmlFor="beds">Beds</label>
            <input type="text" id="beds" placeholder="Number of beds" />
          </div>
          <div>
            <label htmlFor="baths">Baths</label>
            <input type="text" id="baths" placeholder="Number of baths" />
          </div>
        </div>

        <label htmlFor="room-type">Room Type</label>
        <select name="room-type" id="room-type">
          <option value="">
            <select name="" id="">
              select
            </select>
          </option>
        </select>
        <div className="column">
          <div>
            <label htmlFor="rent">Rent ($)</label>
            <input
              type="text"
              id="rent"
              name="rent"
              placeholder="Enter rent amount"
            />
          </div>
          <div>
            <label htmlFor="utilities">Utilities ($)</label>
            <input
              type="text"
              name="utilities"
              id="utilities"
              placeholder="Enter utilities cost"
            />
          </div>
        </div>
        <label htmlFor="Total">Total ($)</label>
        <input type="text" name="total" placeholder="Enter total cost" />

        <label htmlFor="date">Move By Date</label>
        <input type="date" name="data" id="date" />
      </form>
    </>
  );
}
