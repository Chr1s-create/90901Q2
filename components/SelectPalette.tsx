import React from "react";
import Modal from "@styles/components/Modal";

import Button from "@styles/components/Button";
import { useTheme } from "next-themes";

const options = [
  {
    value: "light",
    label: "Default",
  },
  {
    value: "navyBlueTheme",
    label: "Midnight Skies",
  },
];

const SelectPalette = ({ setShow }: { setShow: Function }) => {
  const { setTheme } = useTheme();

  const handleChangeTheme = (e: any) => {
    setTheme(e.target.name);
  };

  return (
    <Modal data-aos="zoom-out">
      {options.map((option) => (
        <Button
          onClick={(e) => handleChangeTheme(e)}
          key={option.value}
          name={option.value}
        >
          {option.label}
        </Button>
      ))}
      <Button className="clear" onClick={() => setShow(false)}>
        Close
      </Button>
    </Modal>
  );
};

export default SelectPalette;
