import type { Metadata } from "next";
import "../globals.css";
import ThemeRegistry from "@/components/ThemeRegistery";
import Navigation from "./components/Navigation";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: {
    template: "%s | MoodTune",
    default: "Dashboard | MoodTune",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="h-full"> 
      <body className="min-h-screen antialiased">
        <ThemeRegistry>
          <div className="flex flex-col-reverse sm:flex-row h-screen w-full overflow-hidden">            
            <Navigation />

            <div className="flex flex-col flex-1 min-w-0 h-full">
              <Header />
              
              <div className="bg-orange-500 flex-1 overflow-y-auto p-4 m-4 rounded-2xl">
                { children }
              </div>
            </div>

          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}