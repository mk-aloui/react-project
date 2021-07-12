import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Datatable from './datatable';
import { useLocation } from "react-router-dom";

function Gerer(props) {

    const [data, setData] = useState([]);
    const [q, setQ] = useState("");
    const location = useLocation()


    useEffect(() => {
        async function fetchData() {
            const respo = await axios.get("http://127.0.0.1:8000/Bus/")
            const resp = respo.data;
            setData(resp);
        }
        fetchData();
    }, []);


    function search(rows) {
        const columns = rows[0] && Object.keys(rows[0]);
        return rows.filter((row) =>
            columns.some(
                (column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase().trim()) > -1

            )
        );
    }

    return (
        <div class="gbg">
            <div className="rech">
                <input type="text" id="trech" placeholder="Rechercher" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <div>
                <Datatable data={search(data)} />
            </div>
            <div class="voidG"></div>

        </div>
    )

}
export default Gerer;