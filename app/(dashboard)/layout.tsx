import type { Metadata } from "next";
import "../globals.css";
import ThemeRegistry from "@/components/ThemeRegistery";
import Navigation from "./components/Navigation";

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
              <div className="bg-red-500 h-16 w-full shrink-0 p-2">
                Header
              </div>
              
              <div className="bg-orange-500 flex-1 overflow-y-auto p-4">
                { children }
              </div>
            </div>

          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}