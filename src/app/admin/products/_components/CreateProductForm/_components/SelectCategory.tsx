"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoryDB } from "@/type";
// =============================================================
export function SelectCategory({
  categories,
  categoryId,
  setCategoryId,
}: {
  categories: CategoryDB[];
  categoryId: string;
  setCategoryId: React.Dispatch<React.SetStateAction<string>>;
}) {
  const currentCategory = categories.find((cat) => cat.id === categoryId);
  return (
    <Select
      defaultValue={currentCategory?.id}
      onValueChange={(value) => setCategoryId(value)}
    >
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Select a category">
          {currentCategory?.name}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {categories.map((cat) => (
            <SelectItem key={cat.id} value={cat.id}>
              {cat.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
