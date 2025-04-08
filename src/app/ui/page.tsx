import { Metadata } from "next";

export const metadata: Metadata = {
  title: "chanhdai/ui",
};

export default function Page() {
  return (
    <div className="space-y-2 p-4 font-mono">
      <h1 className="text-3xl font-medium">antoine/ui</h1>
      <p>Pour le meilleur (Bitcoin)</p>
    </div>
  );
}
