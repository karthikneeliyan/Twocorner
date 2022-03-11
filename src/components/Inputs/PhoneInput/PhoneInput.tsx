import React, { useEffect, useState } from "react";
import countries from "./countries.json";
import "./PhoneInput.css";
interface PhoneInput {
  name: string;
  label: string;

  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    // @ts-ignore
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const Divider = () => {
  return <div className="divider"></div>;
};

export const PhoneInput: React.FC<PhoneInput> = ({ name, label, onChange }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  useEffect(() => {
    if (selectedCountry && mobileNumber) {
      // @ts-ignore
      onChange({ target: { name, value: selectedCountry.split(" ")[1] + mobileNumber } });
    }
  }, [selectedCountry, mobileNumber]);

  const onSelectCountry = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCountry(e.target.value);

  const onMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => setMobileNumber(e.target.value);

  console.log(selectedCountry);
  return (
    <div key={"country"} className={"form-input"}>
      <label className={"form-label"} htmlFor={name}>
        {label}
      </label>
      <div className={"form-control"}>
        <select className={"phone-country"} onChange={onSelectCountry} value={selectedCountry || ""}>
          <option selected>{selectedCountry || ""}</option>
          {countries.map((val) => (
            <option value={`${getFlagEmoji(val.code)} ${val.phone}`}>{val.name}</option>
          ))}
        </select>
        <Divider />
        <input  key={"mobile"}  className={"phone-number"} onChange={onMobileNumberChange} id={name} type="tel" value={mobileNumber} />
      </div>
    </div>
  );
};
