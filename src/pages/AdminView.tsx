import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";

const AdminView = () => {
  const [location, setLocation] = useState("");
  const [item, setItem] = useState("");

  // Sample data with admin controls
  const listings = [
    { 
      item: "Coffee Shop", 
      price: "$3-5", 
      range: "0.5 miles", 
      area: "Downtown", 
      verified: false,
      id: 1 
    },
    { 
      item: "Pizza Place", 
      price: "$12-18", 
      range: "1.2 miles", 
      area: "Main St", 
      verified: true,
      id: 2 
    },
    { 
      item: "Bookstore", 
      price: "$10-25", 
      range: "0.8 miles", 
      area: "Arts District", 
      verified: false,
      id: 3 
    },
    { 
      item: "Gym", 
      price: "$30/month", 
      range: "2.0 miles", 
      area: "Westside", 
      verified: true,
      id: 4 
    },
  ];

  const handleSearch = () => {
    // Handle search logic here
    console.log("Searching for:", { location, item });
  };

  const handleVerify = (id: number, verified: boolean) => {
    // Handle verification logic here
    console.log("Verify listing:", id, verified);
  };

  const handleDelete = (id: number) => {
    // Handle delete logic here
    console.log("Delete listing:", id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="text-lg font-semibold text-foreground">
          LocalDirectory
        </div>
        <Link to="/admin" className="btn-link">
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
                <th className="table-header">Verify</th>
                <th className="table-header">Delete</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing) => (
                <tr key={listing.id} className="hover:bg-muted/20">
                  <td className="table-cell font-medium">{listing.item}</td>
                  <td className="table-cell">{listing.price}</td>
                  <td className="table-cell">{listing.range}</td>
                  <td className="table-cell">{listing.area}</td>
                  <td className="table-cell">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={listing.verified}
                        onCheckedChange={(checked) => 
                          handleVerify(listing.id, checked as boolean)
                        }
                      />
                      <span className="text-xs text-muted-foreground">
                        {listing.verified ? "Verified" : "Pending"}
                      </span>
                    </div>
                  </td>
                  <td className="table-cell">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(listing.id)}
                      className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
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

export default AdminView;