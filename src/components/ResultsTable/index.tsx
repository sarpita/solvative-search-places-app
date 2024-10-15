import React from "react";
import { Place } from "../../models";

interface ResultsTableProps {
  places: Place[];
}

const ResultsTable: React.FC<ResultsTableProps> = ({ places }) => {
  return (
    <table className="results-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Place Name</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {places.length === 0 ? (
          <tr>
            <td colSpan={3}>No results found</td>
          </tr>
        ) : (
          places.map((place, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{place.city}</td>
              <td>
                <img
                  src={`https://flagsapi.com/${place.countryCode}/flat/64.png`}
                  alt={place.country}
                  style={{ width: "20px", marginRight: "10px" }}
                />
                {place.country}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ResultsTable;
