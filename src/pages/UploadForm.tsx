import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

const UploadForm = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [items, setItems] = useState([{ item: "", price: "" }]);

  const addItem = () => {
    setItems([...items, { item: "", price: "" }]);
  };

  const updateItem = (index: number, field: string, value: string) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted:", { location, items });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="text-lg font-semibold text-foreground">
          LocalDirectory
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="form-label mb-0">Location:</label>
            <Input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="w-40"
            />
          </div>
          <Button variant="outline" onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="space-y-4 p-4 border border-border rounded-md">
                <div>
                  <label className="form-label">Item</label>
                  <Input
                    type="text"
                    value={item.item}
                    onChange={(e) => updateItem(index, "item", e.target.value)}
                    placeholder="Enter item name"
                  />
                </div>
                <div>
                  <label className="form-label">Price</label>
                  <Input
                    type="text"
                    value={item.price}
                    onChange={(e) => updateItem(index, "price", e.target.value)}
                    placeholder="Enter price"
                  />
                </div>
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={addItem}
              className="w-full flex items-center justify-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add+</span>
            </Button>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default UploadForm;