import { useEffect, useState } from "preact/hooks";

type Record = {
  date: string;
  hour: string;
  speed: string;
};

export function App() {
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    fetch(`/json/get-day?date=${new Date().toISOString().split("T")[0]}`)
      .then((res) => res.json())
      .then((data) => setRecords(data));
  }, []);

  return (
    <>
      <h1>Speedtest</h1>
      {records.length === 0 && <p class="">Loading...</p>}
      <ul>
        {records.map((record) => (
          <li>{record.date} {record.hour} {record.speed}</li>
        ))}
      </ul>
    </>
  );
}
