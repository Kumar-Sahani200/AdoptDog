"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function Stats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/stats")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to fetch stats");
        return res.json();
      })
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => {
        setStats({ totalPets: 0, totalCities: 0, totalUsers: 0 });
        setLoading(false);
      });
  }, []);

  const totalPets = stats?.totalPets ?? 0;
  const totalCities = stats?.totalCities ?? 0;
  const totalUsers = stats?.totalUsers ?? 0;

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center my-12 w-full">
      <Card className="w-full max-w-xs sm:w-60 text-center bg-transparent border-2 border-primary font-emblema_one shadow-md">
        <CardHeader>
          <CardTitle className="text-4xl text-primary">
            {loading ? "..." : totalPets}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span className="text-2xl font-bubblegum_sans">Pets Listed</span>
        </CardContent>
      </Card>
      <Card className="w-full max-w-xs sm:w-60 text-center bg-transparent border-2 border-primary font-emblema_one shadow-md">
        <CardHeader>
          <CardTitle className="text-4xl text-primary">
            {loading ? "..." : totalCities}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span className="text-2xl font-bubblegum_sans">Cities Covered</span>
        </CardContent>
      </Card>
      <Card className="w-full max-w-xs sm:w-60 text-center bg-transparent border-2 border-primary font-emblema_one shadow-md">
        <CardHeader>
          <CardTitle className="text-4xl text-primary">
            {loading ? "..." : totalUsers}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span className="text-2xl font-bubblegum_sans">People Posted</span>
        </CardContent>
      </Card>
    </div>
  );
}
