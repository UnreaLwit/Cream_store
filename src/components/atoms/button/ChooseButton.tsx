import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

const choices = [
  { value: "200", ml: "200 Мл", price: "150₽" },
  { value: "500", ml: "500 Мл", price: "300₽" },
  { value: "1000", ml: "1000 Мл", price: "700₽" },
];

export const ChooseButton = () => {
  const [choice, setChoice] = useState<string>(choices[0].value);

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newChoice: string
  ) => setChoice(newChoice);

  const selectedChoice = choices.find((c) => c.value === choice);

  return (
    <div>
      <ToggleButtonGroup
        color="success"
        value={choice}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        {choices.map((c) => (
          <ToggleButton key={c.value} value={c.value}>
            {c.ml}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <h2 className="p-2 text-3xl">{selectedChoice?.price}</h2>
    </div>
  );
};
