import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronUp, ChevronDown } from "lucide-react";

const UserView = () => {
  const [location, setLocation] = useState("");
  const [item, setItem] = useState("");

  // Sample data
  const listings = [
    { item: "Coffee Shop", price: "$3-5", range: "0.5 miles", area: "Downtown", votes: { up: 15, down: 2 } },
    { item: "Pizza Place", price: "$12-18", range: "1.2 miles", area: "Main St", votes: { up: 8, down: 1 } },
    { item: "Bookstore", price: "$10-25", range: "0.8 miles", area: "Arts District", votes: { up: 12, down: 0 } },
    { item: "Gym", price: "$30/month", range: "2.0 miles", area: "Westside", votes: { up: 6, down: 3 } },
  ];

  const handleSearch = () => {
    // Handle search logic here
    console.log("Searching for:", { location, item });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="text-lg font-semibold text-foreground">
          LocalDirectory
        </div>
        <Link to="/" className="btn-link">
          Back
        </Link>
      </header>

      {/* Search/Filter Bar */}
      <div className="px-6 py-4 border-b border-border bg-muted/30">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
          <Button onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 p-6">
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <table className="data-table">
            <thead>
              <tr>
                <th className="table-header">Item</th>
                <th className="table-header">Price</th>
                <th className="table-header">Range</th>
                <th className="table-header">Area</th>
                <th className="table-header">Vote</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing, index) => (
                <tr key={index} className="hover:bg-muted/20">
                  <td className="table-cell font-medium">{listing.item}</td>
                  <td className="table-cell">{listing.price}</td>
                  <td className="table-cell">{listing.range}</td>
                  <td className="table-cell">{listing.area}</td>
                  <td className="table-cell">
                    <div className="flex items-center space-x-2">
                      <button className="btn-vote">
                        <ChevronUp className="w-4 h-4" />
                      </button>
                      <span className="text-sm font-medium">
                        {listing.votes.up - listing.votes.down}
                      </span>
                      <button className="btn-vote">
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default UserView;