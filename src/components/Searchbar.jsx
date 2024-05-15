import React from 'react'

const Searchbar = () => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a plant"
            />
            <div className="input-group-append">
              <button
                className="btn searchbar-icon"
                type="button"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Searchbar