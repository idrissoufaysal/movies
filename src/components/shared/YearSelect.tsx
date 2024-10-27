import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input"; // Assurez-vous d'avoir cet input dans votre bibliothèque
import { useMoviesFilters } from "@/context/movieSotore";

export function YearSelect() {
  const {setYear } = useMoviesFilters();
  const [customYear, setCustomYear] = React.useState<string>("");

  const presetYears = ["2023", "2022", "2021", "2020", "2019", "2018","2017", "2016", "2015"];

  const handleCustomYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newYear = e.target.value;
    setCustomYear(newYear);
    setYear(newYear); // Met à jour dans le contexte
  };

  const handleSelectChange = (value: string) => {
    setCustomYear(""); // Réinitialise le champ manuel
    setYear(value);
  };

  return (
    <div className="flex gap-2 items-center">
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a year" />
        </SelectTrigger>
        <SelectContent className="bg-bg_light2">
          <SelectGroup className="">
            <SelectLabel>Years</SelectLabel>
            {presetYears.map((presetYear) => (
              <SelectItem key={presetYear} value={presetYear}>
                {presetYear}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Input
        type="number"
        placeholder="Or enter a year"
        className="w-[180px] mt-2"
        value={customYear}
        onChange={handleCustomYearChange}
        min="1900"
        max={new Date().getFullYear().toString()}
      />
    </div>
  );
}
