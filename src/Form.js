import React from "react";

export function Form() {
    const [data, setData] = React.useState(() => {
        const storedData = JSON.parse(localStorage.getItem("data"));
        return storedData ? storedData : [];
    });
    const [form, setForm] = React.useState({
        nama: "",
        email: "",
        phone: "",
        alamat: "",
    });

    const addData = (e) => {
        e.preventDefault();
        console.log("Submitting form...");

        if (!form.nama || !form.email || !form.phone || !form.alamat) {
            alert("Input cannot be empty!");
            return;
        }

        const newData = {
            nama: form.nama,
            email: form.email,
            phone: form.phone,
            alamat: form.alamat,
        };

        const updatedData = [...data, newData];
        setData(updatedData);
        localStorage.setItem("data", JSON.stringify(updatedData));
        setForm({ nama: "", email: "", phone: "", alamat: "" });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    }

    const handlePhoneInput = (e) => {
        const { value } = e.target;
        if (/^\d*$/.test(value)) {
            setForm((prevForm) => ({
                ...prevForm,
                phone: value,
            }));
        }
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "10px" }}>
            <h1>Remedial React</h1>
            <form onSubmit={addData} style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "25px", width: "100%", alignItems: "center", paddingBottom: "10px", justifyContent: "center", borderBottom: "1px solid grey", padding: "0 30px 10px 30px" }}>
                <input type="text" name="nama" placeholder="Enter Name" value={form.nama} onChange={handleChange} style={{ width: "80%", padding: "10px 13px", borderRadius: "4px", border: "1px solid grey" }} required />
                <input type="email" name="email" placeholder="Enter Email" value={form.email} onChange={handleChange} style={{ width: "80%", padding: "10px 13px", borderRadius: "4px", border: "1px solid grey" }} required />
                <input type="text" name="phone" placeholder="Enter Phone Number" value={form.phone} onChange={handlePhoneInput} pattern="\d*" style={{ width: "80%", padding: "10px 13px", borderRadius: "4px", border: "1px solid grey" }} required />
                <input type="text" name="alamat" placeholder="Enter Address" value={form.alamat} onChange={handleChange} style={{ width: "80%", padding: "10px 13px", borderRadius: "4px", border: "1px solid grey" }} required />
                <button type="submit" style={{ width: "82%", padding: "10px 13px", borderRadius: "4px", border: "1px solid grey", marginBottom: "10px", cursor: "pointer" }}>Submit</button>
            </form>

            <h1>Registration Form</h1>

            <div style={{ display: "flex", width: "90%", alignItems: "center", justifyContent: "center", flexWrap: "wrap", margin: "10px auto", gap: "10px" }}>
                {data.map((item, index) => (
                    <div key={index} style={{ border: "1px solid black", display: "flex", flexDirection: "column", width: "10%", height: "5%", gap: "0" }}>
                        <p>ID: {Date.now()}</p>
                        <p>Name: {item.nama}</p>
                        <p>Email: {item.email}</p>
                        <p>Phone: {item.phone}</p>
                        <p>Address: {item.alamat}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
