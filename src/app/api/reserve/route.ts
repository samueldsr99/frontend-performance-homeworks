import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  await fetch("https://httpbin.org/post", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("posted", data.data);
    });

  return NextResponse.json({ message: "Reservation sent successfully" });
}
